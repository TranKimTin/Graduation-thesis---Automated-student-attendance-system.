import React, { Component } from "react";
import {
    Segment,
    Header,
    Table,
    Grid,
    Icon,
    Pagination,
    Dropdown,
    Popup
} from "semantic-ui-react";
import CustomSearch from "../common/search";
import PageSize from "../common/page_size";
import AttendanceAction from "../../../state/ducks/attendance/actions";
import { connect } from "react-redux";
import moment from 'moment';
import LoaderActive from "../common/loader";

class Attendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            id_section_class: null
        };
        this.onPageChange = this.onPageChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.onPageSizeChange = this.onPageSizeChange.bind(this);
        this.changeSectionClass = this.changeSectionClass.bind(this);
        this.attendance = this.attendance.bind(this);
    }

    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(AttendanceAction.getOptionSectionClass());
    }

    onPageChange(e, { activePage }) {
        let { dispatch, paging } = this.props;
        let { search, id_section_class } = this.state;
        let newPaging = paging;
        newPaging.pageIndex = activePage * 1;
        dispatch(AttendanceAction.getAttendance({ ...newPaging, search, id_section_class }));
    }

    handleSearch(search) {
        let { dispatch, paging } = this.props;
        let { id_section_class } = this.state;
        this.setState({ search });
        dispatch(AttendanceAction.getAttendance({ ...paging, search, id_section_class }))
    }

    onPageSizeChange(pageSize) {
        let { dispatch, paging } = this.props;
        let { search, id_section_class } = this.state;
        dispatch(AttendanceAction.getAttendance({ ...paging, pageSize, search, id_section_class }));
    }

    changeSectionClass(e, data) {
        let { dispatch } = this.props;
        let id_section_class = data.value || null
        this.setState({
            id_section_class
        });
        dispatch(AttendanceAction.getAttendance({ id_section_class }));
    }

    attendance(id_student, id_schedule) {
        let { dispatch } = this.props;
        let { search, id_section_class } = this.state;
        let { paging } = this.props;
        dispatch(AttendanceAction.attendande({ id_student, id_schedule }, { ...paging, search, id_section_class }));
    }

    render() {
        let { list = [], loading = false, optionSectionClass = [], columnSort, direction, dispatch,
            paging = {
                pageSize: 25,
                pageIndex: 1,
                totalPage: 1,
            }
        } = this.props;
        optionSectionClass = optionSectionClass.map(item => ({
            key: item.id,
            text: item.section_class_name,
            value: item.id
        }));
        let date = [];
        if (list.length > 0 && list[0].attendance) {
            date = list[0].attendance.map(item => moment(item.start_time).format('DD/MM/YY'));
        }
        return (
            <Segment>
                <Header> Điểm danh </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Dropdown
                                placeholder='Chọn lớp học phần'
                                fluid
                                search
                                selection
                                options={optionSectionClass}
                                onChange={this.changeSectionClass}
                            />
                        </Grid.Column>
                        <Grid.Column></Grid.Column>
                        <Grid.Column width={9}> </Grid.Column>
                        <Grid.Column width={3}>
                            <CustomSearch
                                handleSearch={this.handleSearch} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <div className='overflow'>
                    <Table celled sortable selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={1}>STT</Table.HeaderCell>
                                <Table.HeaderCell
                                    width={3}
                                    sorted={(columnSort === 'student_name') ? direction : null}
                                    onClick={() => dispatch({ type: 'CHANGE_SORT', columnSort: 'student_name' })}
                                >
                                    Họ tên sinh viên
                                    </Table.HeaderCell>
                                <Table.HeaderCell
                                    width={2}
                                    sorted={(columnSort === 'student_code') ? direction : null}
                                    onClick={() => dispatch({ type: 'CHANGE_SORT', columnSort: 'student_code' })}
                                >
                                    Mã sinh viên
                                </Table.HeaderCell>
                                {date.map((item, i) => (
                                    <Table.HeaderCell key={i} width={1}>{item}</Table.HeaderCell>
                                ))}
                            </Table.Row>
                        </Table.Header>
                        {loading ?
                            <Table.Cell colSpan={16}><LoaderActive /></Table.Cell> :
                            <Table.Body>
                                {list.map((item, stt) => (
                                    <Table.Row key={stt}>
                                        <Table.Cell> {(paging.pageIndex - 1) * paging.pageSize + stt + 1} </Table.Cell>
                                        <Table.Cell>{item.student_name}</Table.Cell>
                                        <Table.Cell>{item.student_code}</Table.Cell>
                                        {item.attendance && item.attendance.length > 0 && item.attendance.map((i, ii) => (
                                            <Table.Cell key={ii} textAlign='center'>
                                                <Popup
                                                    trigger={<Icon className='icon-button'
                                                        name={i.status}
                                                        color={i.color}
                                                        onClick={() => { this.attendance(item.id_student, i.id_schedule) }} />}
                                                    content={<div><div>{i.timestamp ? moment(i.timestamp).format('DD/MM/YY HH:mm:SS') : 'Vắng'}</div><div></div>{i.teacher_name}</div>}
                                                    basic
                                                />

                                            </Table.Cell>
                                        ))}
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        }
                    </Table>
                </div>
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
    list: state.attendance.list,
    paging: state.attendance.paging,
    optionSectionClass: state.attendance.optionSectionClass,
    columnSort: state.attendance.columnSort,
    direction: state.attendance.direction,
    loading: state.attendance.loading
});
export default connect(mapStateToProps)(Attendance);
