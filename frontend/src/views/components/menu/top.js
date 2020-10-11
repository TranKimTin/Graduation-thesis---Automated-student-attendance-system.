import React, {Component} from "react";
import {connect} from 'react-redux';
import {Menu, Icon} from "semantic-ui-react";
import {NavLink} from 'react-router-dom';
import Cookies from 'js-cookie';

import MenuAction from '../../../state/ducks/menu/actions';
class TopMenu extends Component {

    constructor(props) {
        super(props);
    }

    handleItemClick = (e, {name}) => {
        this.props.dispatch(MenuAction.handleItemClick(name));
    };

    triggerLogin = (e, {name}) => {
        this.props.dispatch(MenuAction.triggerLogin(name, true));
    };

    toggleSideBar = (e, {name}) => {
        this.props.dispatch(MenuAction.toggleSideBar(true));
    };

    render() {
        const {top_menu_active} = this.props;
        return (
            <div>
                <Menu id='main_top_menu' fixed="top">
                    <Menu.Item
                        onClick={this.toggleSideBar}>
                        <Icon name="sidebar"/>
                    </Menu.Item>
                    <Menu.Item
                        name='category'
                        active={top_menu_active === 'category'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        exact
                        to={'/category'}
                    >Danh mục</Menu.Item>
                    <Menu.Item
                        name='config'
                        active={top_menu_active === 'config'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        exact
                        to={'/config'}
                    >Config</Menu.Item>
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        top_menu_active: state.menu.top_menu_active
    }
};

export default connect(mapStateToProps)(TopMenu);