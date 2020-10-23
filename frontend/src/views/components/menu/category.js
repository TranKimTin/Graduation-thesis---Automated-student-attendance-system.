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
                        name='student'
                        active={active_item === 'student'}
                        onClick={this.handleItemSideBarClick}
                        to={'/category/student'}>
                        <Icon name={'student'}/>
                        Sinh viên
                    </Menu.Item>
                </Menu>
                <Menu vertical inverted>
                    <Menu.Item
                        as={Link}
                        name='class'
                        active={active_item === 'class'}
                        onClick={this.handleItemSideBarClick}
                        to={'/category/class'}>
                        <Icon name={'users'}/>
                        Lớp
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