import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Icon, Menu} from "semantic-ui-react";
import {connect} from "react-redux";
import MenuAction from "../../../state/ducks/menu/actions";

class Category extends Component {

    handleItemSideBarClick = (e, {name}) => {
        this.props.dispatch(MenuAction.handleItemSideBarClick(name));
    };

    render() {
        const {active_item} = this.props;
        return (
            <div>
                <Menu vertical inverted>
                    <Menu.Item
                        as={Link}
                        name='tool'
                        active={active_item === 'tool'}
                        onClick={this.handleItemSideBarClick}
                        to={'/category/student'}>
                        <Icon name={'bars'}/>
                        Sinh viên
                    </Menu.Item>
                </Menu>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        active_item: state.menu.active_item
    }
};

export default connect(mapStateToProps)(Category);