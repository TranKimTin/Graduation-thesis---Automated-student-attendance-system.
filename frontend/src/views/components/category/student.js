import React, { Component } from "react";
import { Segment, Header, Grid, Button, Table } from 'semantic-ui-react';
import CustomSearch from '../common/search';

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Segment>
                <Header>Danh sách sinh viên</Header>
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
                            <Table.HeaderCell>Họ tên</Table.HeaderCell>
                            <Table.HeaderCell>Mã sinh viên</Table.HeaderCell>
                            <Table.HeaderCell>Ngày sinh</Table.HeaderCell>
                            <Table.HeaderCell>Giới tính</Table.HeaderCell>
                            <Table.HeaderCell>Lớp</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Segment>
        );
    }
}

export default Student;