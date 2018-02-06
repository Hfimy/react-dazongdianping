import React, { Component } from 'react';

import { view as Header } from '../../component/Header'
import Carousel from './carousel/';

import { connect } from 'react-redux';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <Carousel />
                </main>
            </div>

        )
    }
}
