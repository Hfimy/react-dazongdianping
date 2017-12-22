import React from 'react';
import {Router,Route,IndexRoute,hashHistory,browserHistory} from 'react-router';

import App from './container/app';
import {view as Home} from './home/';
import NotFound from './container/notFound';

export default ()=>(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
)