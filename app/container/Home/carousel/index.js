import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import './style.less';

export default class Carousel extends Component {
    state = {
        currentIndex: 0
    }
    render() {
        const { currentIndex } = this.state;
        const opt = {
            auto: 3000,
            callback: (index) => this.setState({ currentIndex: index })
        }
        return (
            <div class='home-carousel'>
                <ReactSwipe swipeOptions={opt}>
                    <div class='carousel-item'>
                        <ul class='clearfix'>
                            <li class='fl jingdian'>景点</li>
                            <li class='fl ktv'>KTV</li>
                            <li class='fl gouwu'>购物</li>
                            <li class='fl shenghuofuwu'>生活服务</li>
                            <li class='fl jianshenyundong'>健身运动</li>
                            <li class='fl meifa'>美发</li>
                            <li class='fl qinzi'>亲子</li>
                            <li class='fl xiaochikuaican'>小吃快餐</li>
                            <li class='fl zizhucan'>自助餐</li>
                            <li class='fl jiuba'>酒吧</li>
                        </ul>
                    </div>
                    <div class="carousel-item">
                        <ul class='clearfix'>
                            <li class="fl meishi">美食</li>
                            <li class="fl dianying">电影</li>
                            <li class="fl jiudian">酒店</li>
                            <li class="fl xiuxianyule">休闲娱乐</li>
                            <li class="fl waimai">外卖</li>
                            <li class="fl huoguo">火锅</li>
                            <li class="fl liren">丽人</li>
                            <li class="fl dujiachuxing">度假出行</li>
                            <li class="fl zuliaoanmo">足疗按摩</li>
                            <li class="fl zhoubianyou">周边游</li>
                        </ul>
                    </div>
                    <div class="carousel-item">
                        <ul class='clearfix'>
                            <li class="fl ribencai">日本菜</li>
                            <li class="fl SPA">SPA</li>
                            <li class="fl jiehun">结婚</li>
                            <li class="fl xuexipeixun">学习培训</li>
                            <li class="fl xican">西餐</li>
                            <li class="fl huochejipiao">火车机票</li>
                            <li class="fl shaokao">烧烤</li>
                            <li class="fl jiazhuang">家装</li>
                            <li class="fl chongwu">宠物</li>
                            <li class="fl quanbufenlei">全部分类</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div class='carousel-point'>
                    <ul>
                        <li class={currentIndex === 0 ? 'selected' : ''}></li>
                        <li class={currentIndex === 1 ? 'selected' : ''}></li>
                        <li class={currentIndex === 2 ? 'selected' : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}