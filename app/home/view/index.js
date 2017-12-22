import React, { Component } from 'react';

import { view as Header } from '../../component/header/'

import {connect} from 'react-redux';

class Home extends Component {
    render() {
        return (
            <Header />
        )
    }
}

export default connect()(Home)