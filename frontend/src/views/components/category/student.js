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

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            studentCodeDelete: '',
            arrayStudentCodeDelete: [],
            titleModal: "",
            type: "new",
            search: ''
        };
        this.handleSave = this.handleSave.bind(this);
        this.openModalDelete = this.openModalDelete.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.newStudent = this.newStudent.bind(this);
        this.importStudent = this.importStudent.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.onPageSizeChange = this.onPageSizeChange.bind(this);
        this.select = this.select.bind(this);
        this.isSelectAll = this.isSelectAll.bind(this);
        this.selectAll = this.selectAll.bind(this);
    }

    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(CategoryAction.getStudent());
    }

    newStudent(item) {
        console.log(item)
        if (!item) {
            this.setState({
                titleModal: "Thêm mới sinh viên",
                type: "new",
                id: "",
            });
        } else {
            this.setState({
                open: true,
                id: item.id,
                titleModal: "Sửa Sinh viên",
                type: "edit",
            });
            if (item.date_of_birth) item.date_of_birth = moment(item.date_of_birth).format('YYYY-MM-DD');
        }
        let { dispatch } = this.props;
        dispatch(CategoryAction.openModal(item));
    }

    openModalDelete(studentCode) {
        let { dispatch } = this.props;
        dispatch(CategoryAction.openModalDelete());
        this.setState({ studentCodeDelete: studentCode });
    }

    handleSave(data) {
        let { dispatch } = this.props;
        let { type, id } = this.state;
        if (type === 'new') {
            dispatch(CategoryAction.insertStudent([data]));
        }
        if (type === 'edit') {
            data.push(id);
            dispatch(CategoryAction.updateStudent(data));
        }
    }

    deleteStudent(data) {
        let { dispatch } = this.props;

        if (data.length === 0) return toastr.error("Chưa chọn sinh viên nào");
        dispatch(CategoryAction.deleteStudent({ data }));
        this.setState({
            studentCodeDelete: '',
            arrayStudentCodeDelete: []
        });
    }

    importStudent(data) {
        let { dispatch } = this.props;
        dispatch(CategoryAction.insertStudent(data));
    }

    onPageChange(e, { activePage }) {
        let { dispatch, paging } = this.props;
        let { search } = this.state;
        let newPaging = paging;
        newPaging.pageIndex = activePage * 1;
        dispatch(CategoryAction.getStudent({ ...newPaging, search }));
    }

    handleSearch(search) {
        let { dispatch, paging } = this.props;
        this.setState({ search });
        dispatch(CategoryAction.getStudent({ ...paging, search }))
    }

    onPageSizeChange(pageSize) {
        let { dispatch, paging } = this.props;
        let { search } = this.state;
        dispatch(CategoryAction.getStudent({ ...paging, pageSize, search }));
    }

    select(checked, code) {
        let { arrayStudentCodeDelete = [] } = this.state;
        arrayStudentCodeDelete = arrayStudentCodeDelete.filter(item => item !== code);
        if (checked) {
            arrayStudentCodeDelete.push(code);
        }
        this.setState({ arrayStudentCodeDelete });
    }

    isSelectAll() {
        let { list } = this.props;
        let { arrayStudentCodeDelete } = this.state;
        for (let item of list)
            if (!arrayStudentCodeDelete.includes(item.student_code))
                return false;
        return true;
    }

    selectAll(e, data) {
        let { list } = this.props;
        let { arrayStudentCodeDelete } = this.state;
        list = list.map(item => item.student_code);
        arrayStudentCodeDelete = arrayStudentCodeDelete.filter(item => !list.includes(item));
        if (data.checked) arrayStudentCodeDelete.push(...list);
        this.setState({ arrayStudentCodeDelete });
    }

    render() {
        let { list, optionClass, paging = {
            pageSize: 25,
            pageIndex: 1,
            totalPage: 1,
        } } = this.props;
        let { titleModal, arrayStudentCodeDelete = [], studentCodeDelete = '' } = this.state;
        let data = (studentCodeDelete !== '') ? [studentCodeDelete] : arrayStudentCodeDelete;
        let feild = [
            { name: "Mã sinh viên", code: "student_code" },
            { name: "Tên sinh viên", code: "student_name" },
            { name: "Ngày sinh", code: "date_of_birth", type: 'date' },
            {
                name: "Giới tính",
                code: "gender",
                options: [{
                    key: 'Nam',
                    text: 'Nam',
                    value: 'Nam',
                },
                {
                    key: 'Nữ',
                    text: 'Nữ',
                    value: 'Nữ',
                }]
            },
            {
                name: "Mã lớp",
                code: "class_code",
                options: optionClass.map(item => ({
                    key: item.class_code,
                    text: item.class_name,
                    value: item.class_code
                }))
            },
        ];
        return (
            <Segment>
                <Header> Danh sách sinh viên </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <ModalInsert
                                handleSave={this.handleSave}
                                feild={feild}
                                titleModal={titleModal}
                                handleNew={this.newStudent} />
                        </Grid.Column>
                        <Grid.Column>
                            <ImportCSV
                                field={["Mã sinh viên", "Họ tên", 'Mã lớp']}
                                actionImport={this.importStudent}
                            />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <ModalDelete
                                handleDelete={this.deleteStudent}
                                data={data}
                                onClose={() => { this.setState({ studentCodeDelete: '' }) }}
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
                            <Table.HeaderCell> Mã sinh viên </Table.HeaderCell>
                            <Table.HeaderCell> Họ Tên </Table.HeaderCell>
                            <Table.HeaderCell> Ngày sinh </Table.HeaderCell>
                            <Table.HeaderCell> Giới tính </Table.HeaderCell>
                            <Table.HeaderCell> Lớp </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {list.map((item, stt) => (
                            <Table.Row>
                                <Table.Cell> {(paging.pageIndex - 1) * paging.pageSize + stt + 1} </Table.Cell>
                                <Table.Cell>
                                    <Checkbox className='margin-right-5' checked={arrayStudentCodeDelete.includes(item.student_code)} onChange={(e, data) => { this.select(data.checked, item.student_code) }} />
                                    <Icon
                                        className="margin-5 icon-button "
                                        name="pencil"
                                        color="blue"
                                        onClick={() => {
                                            this.newStudent(item);
                                        }}
                                    />
                                    <Icon
                                        className="margin-5 icon-button "
                                        name="trash alternate"
                                        color="red"
                                        onClick={() => {
                                            this.openModalDelete(
                                                item.student_code
                                            );
                                        }}
                                    />
                                </Table.Cell>
                                <Table.Cell> {item.student_code} </Table.Cell>
                                <Table.Cell> {item.student_name} </Table.Cell>
                                <Table.Cell> {moment(item.date_of_birth).format('DD/MM/YYYY')} </Table.Cell>
                                <Table.Cell> {item.gender} </Table.Cell>
                                <Table.Cell> {item.class_name} </Table.Cell>
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
    optionClass: state.category.optionClass
});
export default connect(mapStateToProps)(Student);
