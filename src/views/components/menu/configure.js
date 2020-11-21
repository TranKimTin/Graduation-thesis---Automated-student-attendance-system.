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
                        name='section-class'
                        active={active_item === 'section-class'}
                        onClick={this.handleItemSideBarClick}
                        to={'/configure/section-class'}>
                        <Icon name={'group'} />
                        Lớp học phần
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        name='study'
                        active={active_item === 'study'}
                        onClick={this.handleItemSideBarClick}
                        to={'/configure/study'}>
                        <Icon name={'legal'} />
                        Đăng ký học
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        name='teach'
                        active={active_item === 'teach'}
                        onClick={this.handleItemSideBarClick}
                        to={'/configure/teach'}>
                        <Icon name={'calendar alternate outline'} />
                        Lịch giảng dạy
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