import * as React from 'react';
import * as ReactDom from 'react-dom';

const css = require('./header.sass');

export default class Header extends React.Component<any, any> {
    render () {
        return (
            <div className={css.header}>
                <div className={css.bg}>
                    <img src={require("../../assets/avatar@2x.png")} alt=""/>
                </div>
                <div className={css.top}>
                    <div className={css.seller_pic}>
                        <img src={require("../../assets/avatar@2x.png")} alt=""/>
                    </div>
                    <div className={css.seller_info}>
                        <h1 className={css.seller_name}>
                            <i>品牌</i>
                            粥品香坊（大运村）
                        </h1>
                        <p className={css.seller_express}>
                            <span>蜂鸟专送</span>
                            <span> / </span>
                            <span>38分钟送达</span>
                        </p>
                        <p className={css.seller_coupon}>
                            <i>减</i>
                            <span>在线支付满28减5，满50减10</span>
                            <span>5个</span>
                        </p>
                    </div>
                </div>
                <div className={css.footer}>
                    <i>公告</i>
                    <span>粥品香坊其烹饪粥料的秘方源于中国千年古法，再融和现代制作工艺粥品香坊其烹饪粥料的秘方源于中国千年古法，再融和现代制作工艺</span>
                </div>
            </div>
        )
    }
}
