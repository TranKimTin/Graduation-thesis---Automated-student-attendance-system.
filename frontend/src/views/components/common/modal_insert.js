import React, { Component } from "react";
import { Modal, Header, Button, Icon, Grid, Input, Dropdown } from "semantic-ui-react";
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
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    closeModal() {
        let { dispatch } = this.props;
        dispatch(CategoryAction.closeModal());
    }

    save() {
        let { handleSave, fields = [], dataInsert = {} } = this.props;
        let data = [];
        for (let item of fields) {
            if(item.ignore) continue;
            if (!dataInsert[item.code] || dataInsert[item.code].trim() === '') return toastr.error(`${item.name} không hợp lệ`);
            data.push(dataInsert[item.code]);
        }
        handleSave(data);
        this.closeModal();
    }

    changeValue(e, { type, name, value }) {
        let { dispatch } = this.props;
        if(type === 'number') value *= 1;
        dispatch(CategoryAction.changeValue({ name, value }));
    }

    onKeyPress(e) {
        if (e.key === 'Enter') {
            this.save();
        }
    }
    render() {
        let { open = false, fields = [], titleModal, dataInsert, handleNew, content='Thêm' } = this.props;
        return (
            <div>
                <Button
                    content={content}
                    primary
                    onClick={() => {
                        handleNew();
                    }}
                />
                <Modal
                    closeIcon
                    open={open}
                    onClose={this.closeModal}
                    size={(fields.length > 4) ? 'large' : 'small'}
                >
                    <Header icon="group" content={titleModal} />
                    <Modal.Content>
                        <Grid>
                            {fields.map((item, i) => (
                                // <Grid.Row key={i}>
                                <Grid.Column width={(fields.length > 4 && !item.fluid) ? 8 : 16} key={i}>
                                    <label><strong>{item.name}</strong></label>
                                    {!item.options && !item.ignore &&
                                        <Input
                                            value={dataInsert[item.code]}
                                            name={item.code}
                                            onChange={this.changeValue}
                                            fluid
                                            type={item.type || 'text'}
                                            onKeyPress={this.onKeyPress}
                                        />
                                    }
                                    {item.options && !item.ignore &&
                                        <Dropdown
                                            options={item.options}
                                            placeholder={item.name}
                                            value={dataInsert[item.code]}
                                            name={item.code}
                                            onChange={this.changeValue}
                                            fluid
                                            search
                                            selection
                                        />
                                    }
                                    {item.ignore && item.tag}
                                </Grid.Column>
                                // </Grid.Row>
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
