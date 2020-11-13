import React, { Component } from "react";
import { connect } from 'react-redux';
import { Menu, Sidebar } from "semantic-ui-react";
import CategoryBar from './category';
import ConfigureBar from './configure';
import SystemBar from './system';

class LeftSidebar extends Component {

    render() {
        const { sidebar_visible, top_menu_active } = this.props;
        return (
            <RenderedContent tabName={top_menu_active} sidebar_visible={sidebar_visible} />
        );
    }
}

const RenderedContent = ({ tabName, sidebar_visible }) => {
    tabName = tabName || window.location.href;
    console.log(tabName)
    if (tabName.includes('category')) {
        return (
            <Sidebar as={Menu} animation='push' direction='left' icon='labeled' width='thin'
                inverted vertical visible={sidebar_visible} >
                <CategoryBar />
            </Sidebar>
        )
    }
    else if (tabName.includes('configure')) {
        return (
            <Sidebar as={Menu} animation='push' direction='left' icon='labeled' width='thin'
                inverted vertical visible={sidebar_visible} >
                <ConfigureBar />
            </Sidebar>
        )
    }
    else if (tabName.includes('system')) {
        return (
            <Sidebar as={Menu} animation='push' direction='left' icon='labeled' width='thin'
                inverted vertical visible={sidebar_visible} >
                <SystemBar />
            </Sidebar>
        )
    } else {
        return (
            <Sidebar as={Menu} animation='push' direction='left' icon='labeled' width='thin'
                inverted vertical visible={sidebar_visible} >
                <CategoryBar />
            </Sidebar>
        )
    }
};

const mapStateToProps = state => {
    return {
        sidebar_visible: state.menu.sidebar_visible,
        top_menu_active: state.menu.top_menu_active
    }
};

export default connect(mapStateToProps)(LeftSidebar);