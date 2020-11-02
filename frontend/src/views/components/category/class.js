import React, { Component } from "react";
import {
    Segment,
    Header,
    Table,
    Grid,
    Button,
    Icon,
    Modal,
    Input,
} from "semantic-ui-react";
import CustomSearch from "../common/search";
import CategoryAction from "../../../state/ducks/category/actions";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openDelete: false,
            className: "",
            classCode: "",
            id: '',
            classCodeDelete: "",
            titleModal: "",
            type: 'new'
        };
        this.closeModal = this.closeModal.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.closeModalDelete = this.closeModalDelete.bind(this);
        this.openModalDelete = this.openModalDelete.bind(this);
        this.deleteClass = this.deleteClass.bind(this);
        this.newClass = this.newClass.bind(this);
    }

    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(CategoryAction.getClass());
    }

    newClass(item) {
        console.log(item);
        if (!item) {
            this.setState({
                open: true,
                className: "",
                classCode: "",
                id: '',
                titleModal: "Thêm mới lớp",
                type: 'new'
            });
        } else {
            this.setState({
                open: true,
                className: item.class_name,
                classCode: item.class_code,
                id: item.id,
                titleModal: "Sửa lớp",
                type: 'edit'
            });
        }
    }

    closeModal() {
        this.setState({
            open: false,
        });
    }

    changeValue(e, data) {
        this.setState({
            [data.name]: data.value,
        });
    }

    closeModalDelete() {
        this.setState({ openDelete: false, classCodeDelete: "" });
    }
    openModalDelete(classCode) {
        this.setState({ openDelete: true, classCodeDelete: classCode });
    }

    handleSave() {
        let { dispatch } = this.props;
        let { className, classCode, id, type } = this.state;
        if (className.trim() == "") return toastr.error("Chưa nhập tên lớp!");
        if (classCode.trim() == "") return toastr.error("Chưa nhập mã lớp!");

        if(type == 'new') dispatch(CategoryAction.insertClass({ className, classCode }));
        if(type == 'edit') dispatch(CategoryAction.updateClass({ className, classCode, id }));
        this.closeModal();
    }

    deleteClass() {
        let { dispatch } = this.props;
        let { classCodeDelete } = this.state;
        if (!classCodeDelete) return toastr.error("Mã lớp không hợp lệ");
        dispatch(CategoryAction.deleteClass({ classCode: classCodeDelete }));
        this.closeModalDelete();
    }

    render() {
        let { listClass } = this.props;
        let { open, className, classCode, openDelete, titleModal } = this.state;
        return (
            <Segment>
                <Header> Danh sách Lớp </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Button
                                content="Thêm"
                                primary
                                onClick={() => {
                                    this.newClass();
                                }}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button content="Import" primary />
                        </Grid.Column>
                        <Grid.Column width={11}> </Grid.Column>
                        <Grid.Column width={3}>
                            <CustomSearch />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell> STT </Table.HeaderCell>
                            <Table.HeaderCell> Mã lớp </Table.HeaderCell>
                            <Table.HeaderCell> Tên lớp </Table.HeaderCell>
                            <Table.HeaderCell> </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {listClass.map((item, stt) => (
                            <Table.Row>
                                <Table.Cell> {stt + 1} </Table.Cell>
                                <Table.Cell> {item.class_code} </Table.Cell>
                                <Table.Cell> {item.class_name} </Table.Cell>
                                <Table.Cell>
                                    <Icon
                                        className="icon-button"
                                        name="pencil"
                                        color="blue"
                                        onClick={() => {
                                            this.newClass(item);
                                        }}
                                    />
                                    <Icon
                                        className="icon-button"
                                        name="trash alternate"
                                        color="red"
                                        onClick={() => {
                                            this.openModalDelete(
                                                item.class_code
                                            );
                                        }}
                                    />
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <Modal
                    closeIcon
                    open={open}
                    onClose={this.closeModal}
                    size="small"
                >
                    <Header icon="group" content={titleModal} />
                    <Modal.Content>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Input
                                        label="Mã lớp"
                                        value={classCode}
                                        name="classCode"
                                        fluid
                                        onChange={this.changeValue}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Input
                                        label="Tên lớp"
                                        value={className}
                                        name="className"
                                        onChange={this.changeValue}
                                        fluid
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="red" onClick={this.closeModal}>
                            <Icon name="remove" /> Hủy
                        </Button>
                        <Button color="green" onClick={this.handleSave}>
                            <Icon name="checkmark" /> Lưu
                        </Button>
                    </Modal.Actions>
                </Modal>
                <Modal
                    closeIcon
                    open={openDelete}
                    onClose={this.closeModalDelete}
                    size="small"
                >
                    <Header icon="group" content="Xóa lớp" />
                    <Modal.Content>
                        Bạn có chắc chắn muốn xóa lớp không?
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.closeModalDelete}>
                            <Icon name="remove" /> Hủy
                        </Button>
                        <Button color="red" onClick={this.deleteClass}>
                            <Icon name="checkmark" /> Xóa
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
        );
    }
}

const mapStateToProps = (state) => ({
    listClass: state.category.listClass,
    paging: state.category.paging,
});
export default connect(mapStateToProps)(Class);
