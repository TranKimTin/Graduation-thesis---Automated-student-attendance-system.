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
import ImportCSV from "../common/modal_import_csv";
import ModalInsert from "../common/modal_insert";
import CategoryAction from "../../../state/ducks/category/actions";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDelete: false,
            id: "",
            classCodeDelete: "",
            titleModal: "",
            type: "new",
        };
        this.handleSave = this.handleSave.bind(this);
        this.closeModalDelete = this.closeModalDelete.bind(this);
        this.openModalDelete = this.openModalDelete.bind(this);
        this.deleteClass = this.deleteClass.bind(this);
        this.newClass = this.newClass.bind(this);
        this.importClass = this.importClass.bind(this);
        this.feild = [
            { name: "Mã lớp", code: "class_code" },
            { name: "Tên lớp", code: "class_name" },
        ];
    }

    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(CategoryAction.getClass());
    }

    newClass(item) {
        if (!item) {
            this.setState({
                titleModal: "Thêm mới lớp",
                type: "new",
                id: "",
            });
        } else {
            this.setState({
                open: true,
                id: item.id,
                titleModal: "Sửa lớp",
                type: "edit",
            });
        }
        let { dispatch } = this.props;
        dispatch(CategoryAction.openModal());
    }

    closeModalDelete() {
        this.setState({ openDelete: false, classCodeDelete: "" });
    }
    openModalDelete(classCode) {
        this.setState({ openDelete: true, classCodeDelete: classCode });
    }

    handleSave(data) {
        let { dispatch } = this.props;
        let {type, id} = this.state;
        if(type === 'new'){
            dispatch(CategoryAction.insertClass([data]));
        }
        if(type === 'edit'){
            data.push(id);
            dispatch(CategoryAction.updateClass(data));
        }
    }

    deleteClass() {
        let { dispatch } = this.props;
        let { classCodeDelete } = this.state;
        if (!classCodeDelete) return toastr.error("Mã lớp không hợp lệ");
        dispatch(CategoryAction.deleteClass({ classCode: classCodeDelete }));
        this.closeModalDelete();
    }

    importClass(data) {
        let { dispatch } = this.props;
        dispatch(CategoryAction.insertClass(data));
    }

    render() {
        let { listClass } = this.props;
        let { openDelete } = this.state;
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
                            <ImportCSV
                                field={["Mã lớp", "Tên lớp"]}
                                actionImport={this.importClass}
                            />
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
                            <Table.HeaderCell> Action </Table.HeaderCell>
                            <Table.HeaderCell> Mã lớp </Table.HeaderCell>
                            <Table.HeaderCell> Tên lớp </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {listClass.map((item, stt) => (
                            <Table.Row>
                                <Table.Cell> {stt + 1} </Table.Cell>
                                <Table.Cell>
                                    <Input type="checkbox" className='margin-5'/>
                                    <Icon
                                        className="margin-5 icon-button "
                                        name="pencil"
                                        color="blue"
                                        onClick={() => {
                                            this.newClass(item);
                                        }}
                                    />
                                    <Icon
                                        className="margin-5 icon-button "
                                        name="trash alternate"
                                        color="red"
                                        onClick={() => {
                                            this.openModalDelete(
                                                item.class_code
                                            );
                                        }}
                                    />
                                </Table.Cell>
                                <Table.Cell> {item.class_code} </Table.Cell>
                                <Table.Cell> {item.class_name} </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <ModalInsert handleSave={this.handleSave} feild={this.feild} />
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
