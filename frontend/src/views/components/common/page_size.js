import React from 'react';
import { Dropdown } from 'semantic-ui-react';

class Pagesize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, data) {
        let pageSize = data.value;
        let { onPageSizeChange } = this.props;
        onPageSizeChange(pageSize);
    }

    render() {
        let { value = 25 } = this.props;
        const optionPagesize = [
            { key: '5', value: 5, text: '5' },
            { key: '10', value: 10, text: '10' },
            { key: '25', value: 25, text: '25' },
            { key: '50', value: 50, text: '50' },
            { key: '100', value: 100, text: '100' }
        ];
        return (
            <span>
                <span>Cỡ trang:</span>
                <Dropdown
                    placeholder='Cỡ trang'
                    options={optionPagesize}
                    value={value}
                    onChange={this.handleChange}
                    selection
                    className='margin-left-5'
                />
            </span>

        );
    }
}

export default Pagesize;