import React, { Component } from "react";
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { withCookies } from 'react-cookie';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { Segment, Sidebar, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopMenu from './components/menu/top';
import LeftSidebar from './components/menu/sidebar';
import LoaderActive from './components/common/loader';
import NotFound from './components/not_found/not_found';

import AllRoutes from './routes';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="unstackable warp">
                <ReduxToastr
                    timeOut={5000}
                    newestOnTop={true}
                    preventDuplicates={false}
                    position="top-right"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick />
                <Router>
                    <TopMenu />
                    <Sidebar.Pushable as={Segment} attached="bottom">
                        <LeftSidebar />
                        <Sidebar.Pusher>
                            <Segment basic style={{ minHeight: '100vh' }} className={'main'}>
                                <Switch>
                                    {AllRoutes.map(r =>
                                        <Route
                                            exact={r.exact}
                                            path={r.path}
                                            component={r.component}
                                            key={r.key}
                                        />
                                    )}
                                </Switch>
                            </Segment>
                            <div className="ui footer segment">
                                <div className="ui center aligned container">
                                    <div className="ui section divider">&nbsp;</div>
                                    <Icon name={'user secret'} size='big' color={'teal'} /><br />
                                    <div className="ui horizontal small divided link list">
                                        <a className="item" href="/#" target="_blank">Automation Software
                                        Division
                                                    (AST)</a>
                                    </div>
                                </div>
                            </div>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Router>
            </div>
        );
    }
}
export default App;