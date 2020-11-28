import React from 'react';
import {Input} from 'semantic-ui-react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadding: false
        }
    }

    searchBox(e) {
        let handleSearch = this.props.handleSearch;
        let search = e.target.value;
        this.setState({loadding: true});
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.setState({loadding: false});
            handleSearch(search);
        }, 500);
    }

    render() {
        return (
            <Input loading={this.state.loadding}
                   fluid
                   icon='search'
                   placeholder='Search...'
                   onChange={this.searchBox.bind(this)}
                   defaultValue={this.props.defaultValue || ''}
            />
        );
    }
}

export default Search;