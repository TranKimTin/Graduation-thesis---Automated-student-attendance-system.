import React, { Component } from "react";
import Papa from "papaparse";
import { Modal, Header, Button, Icon } from "semantic-ui-react";
import { toastr } from "react-redux-toastr";

class FileReader extends Component {
    constructor() {
        super();
        this.state = {
            csvfile: undefined,
            openModalInport: false,
        };
        this.updateData = this.updateData.bind(this);
        this.importCSV = this.importCSV.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            csvfile: event.target.files[0],
        });
    };

    importCSV() {
        const { csvfile } = this.state;
        if (!csvfile) return toastr.error("Chưa chọn file");
        if (!csvfile?.name?.includes("csv"))
            return toastr.error("File phải có định dạng csv");
        Papa.parse(csvfile, {
            complete: this.updateData,
            header: false,
        });
    }

    updateData(result) {
        let data = result.data;
        let { field, actionImport } = this.props;
        data = data.slice(1).map((item) => {
            let obj = {};
            for (let i = 0; i < field.length; i++) {
                obj[field[i].code] = item[i];
            }
            return obj;
        });
        console.log(data);
        actionImport(data);
    }

    render() {
        let { openModalInport } = this.state;
        let { field = [] } = this.props;
        return (
            <div>
                <Button
                    content="Import"
                    primary
                    onClick={() => {
                        this.setState({ openModalInport: true });
                    }}
                />
                <Modal
                    closeIcon
                    open={openModalInport}
                    onClose={() => {
                        this.setState({
                            openModalInport: false,
                            csvfile: undefined,
                        });
                    }}
                    size="small"
                >
                    <Header icon="group" content="Import CSV File!" />
                    <Modal.Content>
                        <div className="App">
                            <div>File csv định dạng như sau:</div>
                            <div>
                                Hàng đầu tiên là tên thuộc tính, dữ liệu bắt đầu
                                từ hàng thứ 2
                            </div>
                            <div>Thứ tự cột như sau: </div>
                            {field.map((item, index) => (
                                <div style={{ marginLeft: 10 }}>
                                    {String.fromCharCode(index + 65)} :{" "}
                                    {item.name}
                                </div>
                            ))}
                            <br />
                            <input
                                className="csv-input"
                                type="file"
                                accept=".csv"
                                ref={(input) => {
                                    this.filesInput = input;
                                }}
                                name="file"
                                placeholder={null}
                                onChange={this.handleChange}
                            />
                        </div>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            color="red"
                            onClick={() => {
                                this.setState({
                                    openModalInport: false,
                                    csvfile: undefined,
                                });
                            }}
                        >
                            <Icon name="remove" /> Hủy
                        </Button>
                        <Button color="green" onClick={this.importCSV}>
                            <Icon name="checkmark" /> Import
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default FileReader;
