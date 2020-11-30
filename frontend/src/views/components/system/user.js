import React, { Component } from "react";
import {
    Segment,
    Header,
    Table,
    Grid,
    Icon,
    Pagination,
    Checkbox
} from "semantic-ui-react";
import CustomSearch from "../common/search";
import ImportCSV from "../common/modal_import_csv";
import ModalInsert from "../common/modal_insert";
import ModalDelete from "../common/modal_delete";
import PageSize from "../common/page_size";
import TableHeader from "../common/table_header";
import SystemAction from "../../../state/ducks/system/actions";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import moment from 'moment';
import LoaderActive from "../common/loader";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            codeDelete: '',
            arrayCodeDelete: [],
            titleModal: "",
            type: "new",
            search: ''
        };
        this.handleSave = this.handleSave.bind(this);
        this.openModalDelete = this.openModalDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClickNew = this.handleClickNew.bind(this);
        this.actionImport = this.actionImport.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.onPageSizeChange = this.onPageSizeChange.bind(this);
        this.select = this.select.bind(this);
        this.isSelectAll = this.isSelectAll.bind(this);
        this.selectAll = this.selectAll.bind(this);
    }

    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(SystemAction.getUser());
    }

    handleClickNew(item) {
        if (!item) {
            this.setState({
                titleModal: "Thêm mới tài khoản",
                type: "new",
                id: "",
            });
        } else {
            this.setState({
                id: item.id,
                titleModal: "Sửa tài khoản",
                type: "edit",
            });
            if (item.date_of_birth) item.date_of_birth = moment(item.date_of_birth).format('YYYY-MM-DD');
        }
        let { dispatch } = this.props;
        dispatch(SystemAction.openModal(item));
    }

    openModalDelete(username) {
        let { dispatch } = this.props;
        dispatch(SystemAction.openModalDelete());
        this.setState({ codeDelete: username });
    }

    handleSave(data) {
        let { dispatch } = this.props;
        let { type, id } = this.state;
        if (data[1] !== data[2]) return toastr.error("Mật khẩu không khớp");
        data = [data[0], data[1], data[3]];
        if (type === 'new') {
            dispatch(SystemAction.insertUser([data]));
        }
        if (type === 'edit') {
            data.push(id);
            dispatch(SystemAction.updateUser(data));
        }
    }

    handleDelete(data) {
        let { dispatch } = this.props;

        if (data.length === 0) return toastr.error("Chưa chọn tài khoản nào");
        dispatch(SystemAction.deleteUser({ data }));
        this.setState({
            codeDelete: '',
            arrayCodeDelete: []
        });
    }

    actionImport(data) {
        let { dispatch } = this.props;
        dispatch(SystemAction.insertUser(data));
    }

    onPageChange(e, { activePage }) {
        let { dispatch, paging } = this.props;
        let { search } = this.state;
        let newPaging = paging;
        newPaging.pageIndex = activePage * 1;
        dispatch(SystemAction.getUser({ ...newPaging, search }));
    }

    handleSearch(search) {
        let { dispatch, paging } = this.props;
        this.setState({ search });
        dispatch(SystemAction.getUser({ ...paging, search }))
    }

    onPageSizeChange(pageSize) {
        let { dispatch, paging } = this.props;
        let { search } = this.state;
        dispatch(SystemAction.getUser({ ...paging, pageSize, search }));
    }

    select(checked, code) {
        let { arrayCodeDelete = [] } = this.state;
        arrayCodeDelete = arrayCodeDelete.filter(item => item !== code);
        if (checked) {
            arrayCodeDelete.push(code);
        }
        this.setState({ arrayCodeDelete });
    }

    isSelectAll() {
        let { list } = this.props;
        let { arrayCodeDelete } = this.state;
        for (let item of list)
            if (!arrayCodeDelete.includes(item.username))
                return false;
        return true;
    }

    selectAll(e, data) {
        let { list } = this.props;
        let { arrayCodeDelete } = this.state;
        list = list.map(item => item.username);
        arrayCodeDelete = arrayCodeDelete.filter(item => !list.includes(item));
        if (data.checked) arrayCodeDelete.push(...list);
        this.setState({ arrayCodeDelete });
    }

    render() {
        let { list = [], loading = false, optionRole = [], paging = {
            pageSize: 25,
            pageIndex: 1,
            totalPage: 1,
        } } = this.props;
        let { titleModal, arrayCodeDelete = [], codeDelete = '' } = this.state;
        let data = (codeDelete !== '') ? [codeDelete] : arrayCodeDelete;
        let fields = [
            { name: "Tên tài khoản", code: "username" },
            { name: "Mật khẩu", code: "password", type: 'password' },
            { name: "Nhập lại mật khẩu", code: "repeatPassword", type: 'password' },
            {
                name: "Quyền",
                code: "role_code",
                options: optionRole.map(item => ({
                    key: item.role_code,
                    text: item.role_name,
                    value: item.role_code
                }))
            }
        ];
        let header = [
            { name: 'Họ tên', code: 'teacher_name', width: 6 },
            { name: 'Tên tài khoản', code: 'username', width: 4 },
            { name: 'Quyền', code: 'role_name', width: 3 }
        ];
        return (
            <Segment>
                <Header> Người dùng </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <ModalInsert
                                handleSave={this.handleSave}
                                fields={fields}
                                titleModal={titleModal}
                                handleNew={this.handleClickNew} />
                        </Grid.Column>
                        <Grid.Column>
                            <ImportCSV
                                fields={fields.map(item => item.name)}
                                actionImport={this.actionImport}
                            />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <ModalDelete
                                handleDelete={this.handleDelete}
                                data={data}
                                onClose={() => { this.setState({ codeDelete: '' }) }}
                            />
                        </Grid.Column>
                        <Grid.Column width={9}> </Grid.Column>
                        <Grid.Column width={3}>
                            <CustomSearch
                                handleSearch={this.handleSearch} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Table celled sortable selectable>
                    <TableHeader
                        isSelectAll={this.isSelectAll}
                        selectAll={this.selectAll}
                        header={header}
                    />
                    {loading ?
                        <Table.Cell colSpan={16}><LoaderActive /></Table.Cell> :
                        <Table.Body>
                            {list.map((item, stt) => (
                                <Table.Row key={stt}>
                                    <Table.Cell> {(paging.pageIndex - 1) * paging.pageSize + stt + 1} </Table.Cell>
                                    <Table.Cell>
                                        <Checkbox className='margin-right-5' checked={arrayCodeDelete.includes(item.username)} onChange={(e, data) => { this.select(data.checked, item.username) }} />
                                        <Icon
                                            className="margin-5 icon-button "
                                            name="pencil"
                                            color="blue"
                                            onClick={() => {
                                                this.handleClickNew(item);
                                            }}
                                        />
                                        <Icon
                                            className="margin-5 icon-button "
                                            name="trash alternate"
                                            color="red"
                                            onClick={() => {
                                                this.openModalDelete(
                                                    item.username
                                                );
                                            }}
                                        />
                                    </Table.Cell>
                                    <Table.Cell> {item.teacher_name} </Table.Cell>
                                    <Table.Cell> {item.username} </Table.Cell>
                                    <Table.Cell> {item.role_name} </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    }
                </Table>
                <PageSize onPageSizeChange={this.onPageSizeChange} value={paging.pageSize} />
                <Pagination
                    activePage={paging.pageIndex}
                    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                    prevItem={{ content: <Icon name='angle left' />, icon: true }}
                    nextItem={{ content: <Icon name='angle right' />, icon: true }}
                    totalPages={paging.totalPage}
                    onPageChange={this.onPageChange}
                    floated='right'
                />
            </Segment>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.system.list,
    paging: state.system.paging,
    loading: state.system.loading,
    optionRole: state.system.optionRole
});
export default connect(mapStateToProps)(User);
