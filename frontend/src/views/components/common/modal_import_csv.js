import React, { Component } from "react";
import Papa from "papaparse";
import { Modal, Header, Button, Icon } from "semantic-ui-react";
import { toastr } from "react-redux-toastr";

class FileReader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModalInport: false,
            data: [],
            dataErr: [],
        };
        this.updateData = this.updateData.bind(this);
        this.importCSV = this.importCSV.bind(this);
    }

    handleChange = (event) => {
        let csvfile = event.target.files[0];
        Papa.parse(csvfile, {
            complete: this.updateData,
            header: false,
        });
    };

    importCSV() {
        let { data = [] } = this.state;
        let { actionImport } = this.props;
        if (data.length === 0) return toastr.error("File trống");
        actionImport(data);
        this.setState({openModalInport: false});
    }

    updateData(result) {
        console.log(result)
        let data = result.data;
        let { fields = [] } = this.props;
        let dataErr = data
            .slice(1)
            .map((item, index) =>
                item.filter((x) => x !== "").length !== fields.length
                    ? index + 2
                    : null
            )
            .filter((item) => item);
        data = data
            .slice(1)
            .filter(
                (item) => item.filter((x) => x !== "").length === fields.length
            );
        console.log(data);
        this.setState({
            data,
            dataErr,
        });
    }

    render() {
        let { openModalInport, data, dataErr } = this.state;
        let { fields = [] } = this.props;
        return (
            <div>
                <Button
                    content="Import"
                    primary
                    onClick={() => {
                        this.setState({ openModalInport: true, data: [], dataErr:[] });
                    }}
                />
                <Modal
                    closeIcon
                    open={openModalInport}
                    onClose={() => {
                        this.setState({
                            openModalInport: false,
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
                            {fields.map((item, index) => (
                                <div style={{ marginLeft: 10 }} key={index}>
                                    {String.fromCharCode(index + 65)} : {item}
                                </div>
                            ))}
                            <br />
                            <div>
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
                            <br />
                            <div>{data.length} bản ghi hợp lệ sẽ được import</div>
                            <div>
                                {dataErr.length} bản ghi sai định dạng tại dòng: {dataErr.join(', ')}
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            color="red"
                            onClick={() => {
                                this.setState({
                                    openModalInport: false,
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
