import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectCity } from '../action';

// import { bindActionCreators } from 'redux';

import './style.less';

class Header extends Component {

    render() {
        return (
            <header class='home-header clearfix'>
                <div class='home-header-left fl'>
                    <span>{this.props.city}</span>
                    {/* 虽然在jsx里一切没有子元素的标签都可以自闭和，但是为了兼容原生的DOM，还是建议按DOM标准书写*/}
                    <i class='icon-angle-down'></i>
                </div>
                <div class='home-header-right fr'>
                    <i class='icon-user'></i>
                </div>
                <div class='home-header-middle'>
                    <div class='search-container'>
                        <i class='icon-search'></i>
                        <input class='clearfix' placeholder='请输入关键字'/>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    city: state.userInfo.city
})
// const mapDispatchToProps = (dispatch) => ({
//     onSelectCity: (e)=>{
//         dispatch(selectCity(e))
//     }
// })
// const mapDispatchToProps = (dispatch) =>bindActionCreators ({
//     onSelectCity: selectCity
// },dispatch)

// 对象返回值的简易写法
const mapDispatchToProps = {
    onSelectCity: selectCity
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)