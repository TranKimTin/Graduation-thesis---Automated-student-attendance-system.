import React from 'react';
import { Checkbox, Table } from 'semantic-ui-react';
import { connect } from "react-redux";
class TableHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let { header = [], isSelectAll, selectAll, columnSort, direction, dispatch } = this.props;
        return (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={1}> STT </Table.HeaderCell>
                    <Table.HeaderCell width={2}>
                        <Checkbox className='margin-right-5' checked={isSelectAll()} onChange={selectAll} />
                    Thao tác
                </Table.HeaderCell>
                    {header.map((item,i) => (
                        <Table.HeaderCell
                            width={item.width}
                            sorted={(columnSort === item.code) ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', columnSort: item.code })}
                            key={i}
                        >
                            {item.name}
                        </Table.HeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>
        );
    }
}

const mapStateToProps = (state) => ({
    columnSort: state.category.columnSort,
    direction: state.category.direction
});
export default connect(mapStateToProps)(TableHeader);