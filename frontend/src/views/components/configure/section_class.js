import React, { Component } from "react";
import {
    Segment,
    Header,
    Table,
    Grid,
    Icon,
    Pagination,
    Checkbox,
    Modal,
    Button,
    Input
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

class SectionClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            codeDelete: '',
            arrayCodeDelete: [],
            titleModal: "",
            type: "new",
            search: '',
            open: false,
            schedule: {},
            listSchedule: []
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
        this.closeModalSchedule = this.closeModalSchedule.bind(this);
        this.addSchedule = this.addSchedule.bind(this);
        this.changeSchedule = this.changeSchedule.bind(this);
        this.removeSchedule = this.removeSchedule.bind(this);
    }

    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(ConfigureAction.getSectionClass());
    }

    handleClickNew(item) {
        if (!item) {
            this.setState({
                titleModal: "Thêm mới lớp học phần",
                type: "new",
                id: "",
                listSchedule: []
            });
        } else {
            this.setState({
                open: false,
                id: item.id,
                titleModal: "Sửa lớp học phần",
                type: "edit",
                listSchedule: item.schedule
            });
            if (item.date_of_birth) item.date_of_birth = moment(item.date_of_birth).format('YYYY-MM-DD');
        }
        let { dispatch } = this.props;
        dispatch(ConfigureAction.openModal(item));
    }

    openModalDelete(studentCode) {
        let { dispatch } = this.props;
        dispatch(ConfigureAction.openModalDelete());
        this.setState({ codeDelete: studentCode });
    }

    handleSave(data) {
        let { dispatch } = this.props;
        let { type, id, listSchedule } = this.state;
        if (type === 'new') {
            dispatch(ConfigureAction.insertSectionClass({ sectionClass: [data], schedule: listSchedule }));
        }
        if (type === 'edit') {
            data.push(id);
            dispatch(ConfigureAction.updateSectionClass({ sectionClass: data, schedule: listSchedule }));
        }
    }

    handleDelete(data) {
        let { dispatch } = this.props;

        if (data.length === 0) return toastr.error("Chưa chọn lớp học phần nào");
        dispatch(ConfigureAction.deleteSectionClass({ data }));
        this.setState({
            codeDelete: '',
            arrayCodeDelete: []
        });
    }

    actionImport(data) {
        let { dispatch } = this.props;
        dispatch(ConfigureAction.insertSectionClass(data));
    }

    onPageChange(e, { activePage }) {
        let { dispatch, paging } = this.props;
        let { search } = this.state;
        let newPaging = paging;
        newPaging.pageIndex = activePage * 1;
        dispatch(ConfigureAction.getSectionClass({ ...newPaging, search }));
    }

    handleSearch(search) {
        let { dispatch, paging } = this.props;
        this.setState({ search });
        dispatch(ConfigureAction.getSectionClass({ ...paging, search }))
    }

    onPageSizeChange(pageSize) {
        let { dispatch, paging } = this.props;
        let { search } = this.state;
        dispatch(ConfigureAction.getSectionClass({ ...paging, pageSize, search }));
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
            if (!arrayCodeDelete.includes(item.section_class_code))
                return false;
        return true;
    }

    selectAll(e, data) {
        let { list } = this.props;
        let { arrayCodeDelete } = this.state;
        list = list.map(item => item.section_class_code);
        arrayCodeDelete = arrayCodeDelete.filter(item => !list.includes(item));
        if (data.checked) arrayCodeDelete.push(...list);
        this.setState({ arrayCodeDelete });
    }

    closeModalSchedule() {
        this.setState({
            open: false,
            schedule: {}
        });
    }
    addSchedule() {
        let { listSchedule, schedule } = this.state;
        if (!schedule.startDate || !schedule.numberWeeks || !schedule.startLesson || !schedule.endLesson) return toastr.error('Nhập thiếu thông tin');
        if (schedule.startLesson > schedule.endLesson) return toastr.error('Tiết học không hợp lệ');
        listSchedule.push(schedule)
        this.setState({
            open: false,
            schedule: {},
            listSchedule
        });
    }

    changeSchedule(e, { name, value }) {
        let { schedule } = this.state;
        schedule[name] = value;
        this.setState({ schedule });
    }

    removeSchedule(i) {
        let { listSchedule } = this.state;
        listSchedule = listSchedule.slice(0, i).concat(listSchedule.slice(i + 1));
        this.setState({ listSchedule });
    }
    render() {
        let { list = [], loading = false, optionSubject = [], optionYear = [], optionSemester = [], paging = {
            pageSize: 25,
            pageIndex: 1,
            totalPage: 1,
        } } = this.props;
        let { titleModal, arrayCodeDelete = [], codeDelete = '', open, schedule = {}, listSchedule = [] } = this.state;

        let data = (codeDelete !== '') ? [codeDelete] : arrayCodeDelete;
        let fields = [
            { name: 'Mã Lớp học phần', code: "section_class_code" },
            { name: "Tên Lớp học phần", code: "section_class_name" },
            {
                name: "Môn học",
                code: "subject_code",
                options: optionSubject.map(item => ({
                    key: item.subject_code,
                    text: item.subject_name,
                    value: item.subject_code
                }))
            },
            {
                name: "Năm học",
                code: "year_code",
                options: optionYear.map(item => ({
                    key: item.year_code,
                    text: item.year_name,
                    value: item.year_code
                }))
            },
            {
                name: "Học kỳ",
                code: "semester_code",
                options: optionSemester.map(item => ({
                    key: item.semester_code,
                    text: item.semester_name,
                    value: item.semester_code
                }))
            },
            {
                ignore: true,
                tag: (<Modal
                    size='small'
                    open={open}
                    onClose={this.closeModalSchedule}
                >
                    <Modal.Header>Tạo lịch học</Modal.Header>
                    <Modal.Content>
                        <label><strong>Ngày bắt đầu</strong></label>
                        <Input type='date' fluid className='margin-bottom-5' value={schedule.startDate} name='startDate' onChange={this.changeSchedule} />
                        <label><strong>Tiết bắt đầu</strong></label>
                        <Input type='number' min={1} max={12} fluid className='margin-bottom-5' value={schedule.startLesson} name='startLesson' onChange={this.changeSchedule} />
                        <label><strong>Tiết kết thúc</strong></label>
                        <Input type='number' min={1} max={12} fluid className='margin-bottom-5' value={schedule.endLesson} name='endLesson' onChange={this.changeSchedule} />
                        <label><strong>Số tuần học</strong></label>
                        <Input type='number' min={1} max={15} fluid className='margin-bottom-5' value={schedule.numberWeeks} name='numberWeeks' onChange={this.changeSchedule} />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.closeModalSchedule}>
                            Hủy
                    </Button>
                        <Button positive onClick={this.addSchedule}>
                            Lưu
                    </Button>
                    </Modal.Actions>
                </Modal>)
            },
            {
                ignore: true,
                fluid: true,
                tag: <Button content='Tạo lịch học' primary onClick={() => { this.setState({ open: true }) }} />
            },
            {
                ignore: true,
                fluid: true,
                tag:
                    (<Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Ngày bắt đầu</Table.HeaderCell>
                                <Table.HeaderCell>Từ tiết</Table.HeaderCell>
                                <Table.HeaderCell>Đến tiến</Table.HeaderCell>
                                <Table.HeaderCell>Số tuần học</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {listSchedule.map((item, i) => (
                                <Table.Row key={i}>
                                    <Table.Cell>{moment(item.startDate).format('DD/MM/YYYY')}</Table.Cell>
                                    <Table.Cell>{item.startLesson}</Table.Cell>
                                    <Table.Cell>{item.endLesson}</Table.Cell>
                                    <Table.Cell>{item.numberWeeks}</Table.Cell>
                                    <Table.Cell><Icon color='red' name='trash alternate' className="margin-5 icon-button " onClick={() => { this.removeSchedule(i) }} /></Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>)
            },
        ];
        let header = [
            { name: 'Mã Lớp học phần', code: 'section_class_code', width: 3 },
            { name: 'Tên Lớp học phần', code: 'section_class_name', width: 3 },
            { name: 'Môn học', code: 'subject_name', width: 3 },
            { name: 'Năm học', code: 'year_name', width: 2 },
            { name: 'Học kỳ', code: 'semester_name', width: 2 }
        ];
        return (
            <Segment>
                <Header> Danh sách lớp học phần </Header>
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
                                fields={fields.filter(item => !item.ignore).map(item => item.name)}
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
                <Table celled sortable>
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
                                        <Checkbox className='margin-right-5' checked={arrayCodeDelete.includes(item.section_class_code)} onChange={(e, data) => { this.select(data.checked, item.section_class_code) }} />
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
                                                    item.section_class_code
                                                );
                                            }}
                                        />
                                    </Table.Cell>
                                    <Table.Cell> {item.section_class_code} </Table.Cell>
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
    optionSubject: state.configure.optionSubject,
    optionYear: state.configure.optionYear,
    optionSemester: state.configure.optionSemester,
    loading: state.configure.loading
});
export default connect(mapStateToProps)(SectionClass);
