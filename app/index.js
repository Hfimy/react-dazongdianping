import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import store from './store';
import RouteMap from './routeMap';

import './public/style/common.css';
import './public/style/font.css';

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <RouteMap />
            </Provider>
        )
    }
}


render(<Root />, document.getElementById('root'));