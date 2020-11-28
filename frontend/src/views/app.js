import React, { Component } from "react";
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { Segment, Sidebar } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopMenu from './components/menu/top';
import LeftSidebar from './components/menu/sidebar';
import Login from './components/login/login';

import AllRoutes from './routes';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let url = window.location.href;
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
                {url.match(/login/gi) ? <Login /> :
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
                            </Sidebar.Pusher>
                        </Sidebar.Pushable>
                    </Router>}

            </div>
        );
    }
}
export default App;