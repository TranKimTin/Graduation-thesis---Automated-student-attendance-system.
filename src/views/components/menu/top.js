import React, { Component } from "react";
import { connect } from 'react-redux';
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';

import MenuAction from '../../../state/ducks/menu/actions';
class TopMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleItemClick = (e, { name }) => {
        this.props.dispatch(MenuAction.handleItemClick(name));
    };

    triggerLogin = (e, { name }) => {
        this.props.dispatch(MenuAction.triggerLogin(name, true));
    };

    toggleSideBar = (e, { name }) => {
        this.props.dispatch(MenuAction.toggleSideBar(true));
    };

    render() {
        const { top_menu_active } = this.props;
        return (
            <div>
                <Menu id='main_top_menu' fixed="top">
                    <Menu.Item
                        onClick={this.toggleSideBar}>
                        <Icon name="sidebar" />
                    </Menu.Item>
                    <Menu.Item
                        name='statistic'
                        active={top_menu_active === 'statistic'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        exact
                        to={'/statistic'}
                    >
                        Thống kê
                    </Menu.Item>
                    <Menu.Item
                        name='category'
                        active={top_menu_active === 'category'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        exact
                        to={'/category'}
                    >
                        Danh mục
                    </Menu.Item>
                    <Menu.Item
                        name='configure'
                        active={top_menu_active === 'configure'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        exact
                        to={'/configure'}
                    >
                        Cấu hình
                    </Menu.Item>
                    <Menu.Item
                        name='system'
                        active={top_menu_active === 'system'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        exact
                        to={'/system'}
                    >
                        Hệ thống
                    </Menu.Item>
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