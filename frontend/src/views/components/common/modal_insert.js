import React, { Component } from "react";
import Papa from "papaparse";
import { Modal, Header, Button, Icon } from "semantic-ui-react";
import { toastr } from "react-redux-toastr";
import { connect } from "react-redux";

class ModalInsert extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                
            </div>
        );
        }
}

const mapStateToProps = (state) => ({
    open: false
});

export default connect(mapStateToProps)(ModalInsert);
