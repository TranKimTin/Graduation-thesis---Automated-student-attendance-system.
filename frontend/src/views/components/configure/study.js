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
import ConfigureAction from "../../../state/ducks/configure/actions";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import moment from 'moment';
import LoaderActive from "../common/loader";

class Study extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: [],
            codeDelete: [],
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
        dispatch(ConfigureAction.getStudy());
    }

    handleClickNew(item) {
        if (!item) {
            this.setState({
                titleModal: "Đăng ký học",
                type: "new",
                id: [],
            });
        } else {
            this.setState({
                id: [item.id_student, item.id_section_class],
                titleModal: "Sửa thông tin đăng ký học",
                type: "edit",
            });
            if (item.date_of_birth) item.date_of_birth = moment(item.date_of_birth).format('YYYY-MM-DD');
        }
        let { dispatch } = this.props;
        dispatch(ConfigureAction.openModal(item));
    }

    openModalDelete(item) {
        let { dispatch } = this.props;
        dispatch(ConfigureAction.openModalDelete());
        this.setState({ codeDelete: [item.student_code, item.section_class_code] });
    }

    handleSave(data) {
        let { dispatch } = this.props;
        let { type, id = [] } = this.state;
        if (type === 'new') {
            dispatch(ConfigureAction.insertStudy([data]));
        }
        if (type === 'edit') {
            data.push(...id);
            dispatch(ConfigureAction.updateStudy(data));
        }
    }

    handleDelete(data) {
        let { dispatch } = this.props;

        if (data.length === 0) return toastr.error("Có lỗi xảy ra, vui lòng thử lại");
        dispatch(ConfigureAction.deleteStudy({ data: JSON.stringify(data) }));
        this.setState({
            codeDelete: [],
            arrayCodeDelete: []
        });
    }

    actionImport(data) {
        let { dispatch } = this.props;
        dispatch(ConfigureAction.insertStudy(data));
    }

    onPageChange(e, { activePage }) {
        let { dispatch, paging } = this.props;
        let { search } = this.state;
        let newPaging = paging;
        newPaging.pageIndex = activePage * 1;
        dispatch(ConfigureAction.getStudy({ ...newPaging, search }));
    }

    handleSearch(search) {
        let { dispatch, paging } = this.props;
        this.setState({ search });
        dispatch(ConfigureAction.getStudy({ ...paging, search }))
    }

    onPageSizeChange(pageSize) {
        let { dispatch, paging } = this.props;
        let { search } = this.state;
        dispatch(ConfigureAction.getStudy({ ...paging, pageSize, search }));
    }

    select(checked, student_code, section_class_code) {
        let { arrayCodeDelete = [] } = this.state;
        arrayCodeDelete = arrayCodeDelete.filter(item => !(item[0] === student_code && item[1] === section_class_code));
        if (checked) {
            arrayCodeDelete.push([student_code, section_class_code]);
        }
        this.setState({ arrayCodeDelete });
    }

    isSelectAll() {
        let { list } = this.props;
        for (let item of list)
            if (!this.isChecked(item))
                return false;
        return true;
    }

    selectAll(e, data) {
        let { list } = this.props;
        let { arrayCodeDelete } = this.state;
        list = list.map(item => [item.student_code, item.section_class_code]);
        arrayCodeDelete = arrayCodeDelete.filter(item => {
            for (let i of list) {
                if (item[0] === i[0] && item[1] === i[1]) {
                    return false;
                }
            }
            return true;
        });
        if (data.checked) arrayCodeDelete.push(...list);
        this.setState({ arrayCodeDelete });
    }

    isChecked(item) {
        let { arrayCodeDelete } = this.state;
        for (let i of arrayCodeDelete) {
            if (i[0] === item.student_code && i[1] === item.section_class_code) {
                return true;
            }
        }
        return false;
    }

    render() {
        let { list = [], loading = false, optionStudent = [], optionSectionClass = [], paging = {
            pageSize: 25,
            pageIndex: 1,
            totalPage: 1,
        } } = this.props;
        let { titleModal, arrayCodeDelete = [], codeDelete = [] } = this.state;
        let data = (codeDelete.length !== 0) ? [codeDelete] : arrayCodeDelete;
        let fields = [
            {
                name: "Mã sinh viên",
                code: "student_code",
                options: optionStudent.map(item => ({
                    key: item.student_code,
                    text: item.student_code,
                    value: item.student_code
                }))
            },
            {
                name: "Lớp học phần",
                code: "section_class_code",
                options: optionSectionClass.map(item => ({
                    key: item.section_class_code,
                    text: item.section_class_name,
                    value: item.section_class_code
                }))
            },
        ];
        let header = [
            { name: 'Mã sinh viên', code: 'student_code', width: 3 },
            { name: 'Họ Tên', code: 'student_name', width: 3 },
            { name: 'Lớp học phần', code: 'section_class_name', width: 2 },
            { name: 'Môn học', code: 'subject_name', width: 2 },
            { name: 'Năm học', code: 'year_name', width: 1 },
            { name: 'Học kỳ', code: 'semester_name', width: 2 }
        ];
        return (
            <Segment>
                <Header> Đăng ký học </Header>
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
                                onClose={() => { this.setState({ codeDelete: [] }) }}
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
                                        <Checkbox className='margin-right-5' checked={this.isChecked(item)} onChange={(e, data) => { this.select(data.checked, item.student_code, item.section_class_code) }} />
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
                                                    item
                                                );
                                            }}
                                        />
                                    </Table.Cell>
                                    <Table.Cell> {item.student_code} </Table.Cell>
                                    <Table.Cell> {item.student_name} </Table.Cell>
                                    <Table.Cell> {item.section_class_name} </Table.Cell>
                                    <Table.Cell> {item.subject_name} </Table.Cell>
                                    <Table.Cell> {item.year_name} </Table.Cell>
                                    <Table.Cell> {item.semester_name} </Table.Cell>
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
    list: state.configure.list,
    paging: state.configure.paging,
    optionSectionClass: state.configure.optionSectionClass,
    optionStudent: state.configure.optionStudent,
    loading: state.configure.loading
});
export default connect(mapStateToProps)(Study);
