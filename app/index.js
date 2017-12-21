import React, { Component } from 'react';
import { render } from 'react-dom';

import RouteMap from './routeMap';

class Root extends Component {
    render() {
        return (
            <RouteMap />
        )
    }
}


render(<Root />, document.getElementById('root'));