import React, { Component } from "react";
import { Modal, Header, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import CategoryAction from "../../../state/ducks/category/actions";

class ModalDelete extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.save = this.save.bind(this);
        this.openModalDelete = this.openModalDelete.bind(this);
    }

    closeModal() {
        let { dispatch, onClose } = this.props;
        dispatch(CategoryAction.closeModalDelete());
        onClose();
    }

    save() {
        let { handleDelete, data } = this.props;
        handleDelete(data);
        this.closeModal();
    }

    openModalDelete() {
        let { dispatch } = this.props;
        dispatch(CategoryAction.openModalDelete());
    }


    render() {
        let { open = false, title = '', data = [] } = this.props;
        return (
            <div>
                <Button
                    color='red'
                    content={`Xóa (${data.length})`}
                    disabled={data.length === 0}
                    className='margin-left-5'
                    onClick={this.openModalDelete}
                />
                <Modal
                    closeIcon
                    open={open}
                    onClose={this.closeModal}
                    size="small"
                >
                    <Header icon="trash alternate" color='red' content={title} />
                    <Modal.Content>
                        Bạn có chắc chắn muốn xóa không?
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.closeModal}>
                            <Icon name="remove" /> Hủy
                        </Button>
                        <Button color="red" onClick={this.save}>
                            <Icon name="trash alternate" /> Xóa
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    open: state.category.open_modal_delete
});

export default connect(mapStateToProps)(ModalDelete);
