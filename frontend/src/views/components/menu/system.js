import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import MenuAction from "../../../state/ducks/menu/actions";

class Configure extends Component {

    handleItemSideBarClick = (e, { name }) => {
        this.props.dispatch(MenuAction.handleItemSideBarClick(name));
    };

    render() {
        const { active_item } = this.props;
        return (
            <div>
                <Menu vertical inverted>
                    <Menu.Item
                        as={Link}
                        name='user'
                        active={active_item === 'user'}
                        onClick={this.handleItemSideBarClick}
                        to={'/system/user'}>
                        <Icon name={'user'} />
                        Người dùng
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        name='permission'
                        active={active_item === 'permission'}
                        onClick={this.handleItemSideBarClick}
                        to={'/system/permission'}>
                        <Icon name={'cog'} />
                        Quyền
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        name='groups'
                        active={active_item === 'groups'}
                        onClick={this.handleItemSideBarClick}
                        to={'/system/groups'}>
                        <Icon name={'cogs'} />
                        Nhóm quyền
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

export default connect(mapStateToProps)(Configure);