import React from 'react';
import {Router,Route,IndexRoute,hashHistory,browserHistory} from 'react-router';

import App from './container/index';
import Home from './home/index';
import NotFound from './container/notFound';

export default ()=>(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
)