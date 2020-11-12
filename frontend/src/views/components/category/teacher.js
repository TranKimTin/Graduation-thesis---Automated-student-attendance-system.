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
import CategoryAction from "../../../state/ducks/category/actions";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import moment from 'moment';

class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            teacherCodeDelete: '',
            arrayTeacherCodeDelete: [],
            titleModal: "",
            type: "new",
            search: ''
        };
        this.handleSave = this.handleSave.bind(this);
        this.openModalDelete = this.openModalDelete.bind(this);
        this.deleteTeacher = this.deleteTeacher.bind(this);
        this.newTeacher = this.newTeacher.bind(this);
        this.importTeacher = this.importTeacher.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.onPageSizeChange = this.onPageSizeChange.bind(this);
        this.select = this.select.bind(this);
        this.isSelectAll = this.isSelectAll.bind(this);
        this.selectAll = this.selectAll.bind(this);
    }

    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(CategoryAction.getTeacher());
    }

    newTeacher(item) {
        if (!item) {
            this.setState({
                titleModal: "Thêm mới giảng viên",
                type: "new",
                id: "",
            });
        } else {
            this.setState({
                open: true,
                id: item.id,
                titleModal: "Sửa giảng viên",
                type: "edit",
            });
            if (item.date_of_birth) item.date_of_birth = moment(item.date_of_birth).format('YYYY-MM-DD');
        }
        let { dispatch } = this.props;
        dispatch(CategoryAction.openModal(item));
    }

    openModalDelete(teacherCode) {
        let { dispatch } = this.props;
        dispatch(CategoryAction.openModalDelete());
        this.setState({ teacherCodeDelete: teacherCode });
    }

    handleSave(data) {
        let { dispatch } = this.props;
        let { type, id } = this.state;
        if (type === 'new') {
            dispatch(CategoryAction.insertTeacher([data]));
        }
        if (type === 'edit') {
            data.push(id);
            dispatch(CategoryAction.updateTeacher(data));
        }
    }

    deleteTeacher(data) {
        let { dispatch } = this.props;

        if (data.length === 0) return toastr.error("Chưa chọn giảng viên nào");
        dispatch(CategoryAction.deleteTeacher({ data }));
        this.setState({
            teacherCodeDelete: '',
            arrayTeacherCodeDelete: []
        });
    }

    importTeacher(data) {
        let { dispatch } = this.props;
        dispatch(CategoryAction.insertTeacher(data));
    }

    onPageChange(e, { activePage }) {
        let { dispatch, paging } = this.props;
        let { search } = this.state;
        let newPaging = paging;
        newPaging.pageIndex = activePage * 1;
        dispatch(CategoryAction.getTeacher({ ...newPaging, search }));
    }

    handleSearch(search) {
        let { dispatch, paging } = this.props;
        this.setState({ search });
        dispatch(CategoryAction.getTeacher({ ...paging, search }))
    }

    onPageSizeChange(pageSize) {
        let { dispatch, paging } = this.props;
        let { search } = this.state;
        dispatch(CategoryAction.getTeacher({ ...paging, pageSize, search }));
    }

    select(checked, code) {
        let { arrayTeacherCodeDelete = [] } = this.state;
        arrayTeacherCodeDelete = arrayTeacherCodeDelete.filter(item => item !== code);
        if (checked) {
            arrayTeacherCodeDelete.push(code);
        }
        this.setState({ arrayTeacherCodeDelete });
    }

    isSelectAll() {
        let { list } = this.props;
        let { arrayTeacherCodeDelete } = this.state;
        for (let item of list)
            if (!arrayTeacherCodeDelete.includes(item.teacher_code))
                return false;
        return true;
    }

    selectAll(e, data) {
        let { list } = this.props;
        let { arrayTeacherCodeDelete } = this.state;
        list = list.map(item => item.teacher_code);
        arrayTeacherCodeDelete = arrayTeacherCodeDelete.filter(item => !list.includes(item));
        if (data.checked) arrayTeacherCodeDelete.push(...list);
        this.setState({ arrayTeacherCodeDelete });
    }

    render() {
        let { list, paging = {
            pageSize: 25,
            pageIndex: 1,
            totalPage: 1,
        } } = this.props;
        let { titleModal, arrayTeacherCodeDelete = [], teacherCodeDelete = '' } = this.state;
        let data = (teacherCodeDelete !== '') ? [teacherCodeDelete] : arrayTeacherCodeDelete;
        let feild = [
            { name: "Mã giảng viên", code: "teacher_code" },
            { name: "Họ tên", code: "teacher_name" },
            { name: "Ngày sinh", code: "date_of_birth", type: 'date' },
            {
                name: "Giới tính",
                code: "gender",
                options: [{
                    key: 'nam',
                    text: 'Nam',
                    value: 'nam',
                },
                {
                    key: 'nữ',
                    text: 'Nữ',
                    value: 'nữ',
                }]
            }
        ];
        return (
            <Segment>
                <Header> Danh sách giảng viên </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <ModalInsert
                                handleSave={this.handleSave}
                                feild={feild}
                                titleModal={titleModal}
                                handleNew={this.newTeacher} />
                        </Grid.Column>
                        <Grid.Column>
                            <ImportCSV
                                field={["Mã giảng viên", "Họ tên", 'Ngày sinh', 'Giới tính']}
                                actionImport={this.importTeacher}
                            />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <ModalDelete
                                handleDelete={this.deleteTeacher}
                                data={data}
                                onClose={() => { this.setState({ teacherCodeDelete: '' }) }}
                            />
                        </Grid.Column>
                        <Grid.Column width={9}> </Grid.Column>
                        <Grid.Column width={3}>
                            <CustomSearch
                                handleSearch={this.handleSearch} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell> STT </Table.HeaderCell>
                            <Table.HeaderCell>
                                <Checkbox className='margin-right-5' checked={this.isSelectAll()} onChange={this.selectAll} />
                                Action
                            </Table.HeaderCell>
                            <Table.HeaderCell> Mã giảng viên </Table.HeaderCell>
                            <Table.HeaderCell> Họ tên </Table.HeaderCell>
                            <Table.HeaderCell> Ngày sinh </Table.HeaderCell>
                            <Table.HeaderCell> Giới tính </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {list.map((item, stt) => (
                            <Table.Row>
                                <Table.Cell> {(paging.pageIndex - 1) * paging.pageSize + stt + 1} </Table.Cell>
                                <Table.Cell>
                                    <Checkbox className='margin-right-5' checked={arrayTeacherCodeDelete.includes(item.teacher_code)} onChange={(e, data) => { this.select(data.checked, item.teacher_code) }} />
                                    <Icon
                                        className="margin-5 icon-button "
                                        name="pencil"
                                        color="blue"
                                        onClick={() => {
                                            this.newTeacher(item);
                                        }}
                                    />
                                    <Icon
                                        className="margin-5 icon-button "
                                        name="trash alternate"
                                        color="red"
                                        onClick={() => {
                                            this.openModalDelete(
                                                item.teacher_code
                                            );
                                        }}
                                    />
                                </Table.Cell>
                                <Table.Cell> {item.teacher_code} </Table.Cell>
                                <Table.Cell> {item.teacher_name} </Table.Cell>
                                <Table.Cell> {moment(item.date_of_birth).format('DD/MM/YYYY')} </Table.Cell>
                                <Table.Cell> {item.gender} </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
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
    list: state.category.list,
    paging: state.category.paging,
});
export default connect(mapStateToProps)(Teacher);
