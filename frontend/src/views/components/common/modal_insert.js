import React, { Component } from "react";
import { Modal, Header, Button, Icon, Grid, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import CategoryAction from "../../../state/ducks/category/actions";
import { toastr } from "react-redux-toastr";

class ModalInsert extends Component {
    constructor() {
        super();
        this.state = {};
        this.closeModal = this.closeModal.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.save = this.save.bind(this);
    }

    closeModal() {
        let { dispatch } = this.props;
        dispatch(CategoryAction.closeModal());
    }

    save() {
        let { handleSave, feild = [], dataInsert = {} } = this.props;
        let data = [];
        for (let item of feild) {
            if(!dataInsert[item.code] || dataInsert[item.code].trim()==='') return toastr.error(`${item.name} không hợp lệ`);
            data.push(dataInsert[item.code]);
        }
        handleSave(data);
        this.closeModal();
    }

    changeValue(e, data) {
        let { dispatch } = this.props;
        dispatch(
            CategoryAction.changeValue({ name: data.name, value: data.value })
        );
    }

    render() {
        let { open = false, feild = [], titleModal, dataInsert } = this.props;
        return (
            <div>
                <Modal
                    closeIcon
                    open={open}
                    onClose={this.closeModal}
                    size="small"
                >
                    <Header icon="group" content={titleModal} />
                    <Modal.Content>
                        <Grid>
                            {feild.map((item) => (
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Input
                                            label={item.name}
                                            value={dataInsert[item.code]}
                                            name={item.code}
                                            onChange={this.changeValue}
                                            fluid
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            ))}
                        </Grid>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="red" onClick={this.closeModal}>
                            <Icon name="remove" /> Hủy
                        </Button>
                        <Button color="green" onClick={this.save}>
                            <Icon name="checkmark" /> Lưu
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    open: state.category.open,
    dataInsert: state.category.dataInsert,
});

export default connect(mapStateToProps)(ModalInsert);
