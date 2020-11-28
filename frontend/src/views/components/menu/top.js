import React, { Component } from "react";
import { connect } from 'react-redux';
import { Menu, Icon, Button } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
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
        let user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : {};
        console.log(user)
        let isAdmin = user.role_code === 'ROLE_ADMIN' ? true : false;
        return (
            <div>
                <Menu id='main_top_menu' fixed="top">
                    <Menu.Item
                        onClick={this.toggleSideBar}>
                        <Icon name="sidebar" />
                    </Menu.Item>
                    <Menu.Item
                        name='attendance'
                        active={top_menu_active === 'attendance'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        exact
                        to={'/attendance'}
                    >
                        Điểm danh
                    </Menu.Item>
                    {isAdmin &&
                        <Menu.Item
                            name='category'
                            active={top_menu_active === 'category'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            exact
                            to={'/category'}
                        >
                            Danh mục
                    </Menu.Item>}
                    {isAdmin &&
                        <Menu.Item
                            name='configure'
                            active={top_menu_active === 'configure'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            exact
                            to={'/configure'}
                        >
                            Cấu hình
                    </Menu.Item>}
                    {isAdmin &&
                        <Menu.Item
                            name='system'
                            active={top_menu_active === 'system'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            exact
                            to={'/system'}
                        >
                            Hệ thống
                    </Menu.Item>}
                    <Menu.Item
                        floated='right'
                        as={Button}
                        color='teal'
                        onClick={() => { MenuAction.logout() }}
                    >
                        <div style={{ color: 'red' }}>Đăng xuất ({user.name || user.username})</div>
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