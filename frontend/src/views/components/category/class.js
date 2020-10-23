import React, { Component } from "react";
import { Segment, Header, Table, Grid, Button } from 'semantic-ui-react';
import CustomSearch from '../common/search';
import CategoryAction from '../../../state/ducks/category/actions';
import { connect } from "react-redux";

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(CategoryAction.getClass());
    }

    render() {
        let { listClass } = this.props;
        console.log(listClass)
        return (
            <Segment>
                <Header>Danh sách Lớp</Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Button content="Thêm" primary />
                        </Grid.Column>
                        <Grid.Column>
                            <Button content="Import" primary />
                        </Grid.Column>
                        <Grid.Column width={11}></Grid.Column>
                        <Grid.Column width={3}>
                            <CustomSearch />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>STT</Table.HeaderCell>
                            <Table.HeaderCell>Mã lớp</Table.HeaderCell>
                            <Table.HeaderCell>Tên lớp</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            listClass.map((item, stt) => (
                                <Table.Row>
                                    <Table.Cell>{stt+1}</Table.Cell>
                                    <Table.Cell>{item.class_code}</Table.Cell>
                                    <Table.Cell>{item.class_name}</Table.Cell>
                                </Table.Row>))
                        }
                    </Table.Body>
                </Table>
            </Segment>
        );
    }
}

const mapStateToProps = state => ({
    listClass: state.category.listClass,
    paging: state.category.paging
})
export default connect(mapStateToProps)(Class);