import * as React from 'react'
import * as IScroll from '../../lib/iscroll.js'

const css = require('./goods.sass');
interface Test {
    name: string,
    list: Array<number>
}
const test:Test = {
    name: 'abc',
    list: [1, 2, 3]
};
const ratingList:Test[] = new Array(20).fill(test);
const RatingTemp = (item: any[]) => {
    return (
        <ul className={css.goods_content}>
            {item.map((el: number) => {
                return (
                    <li className={css.good_detail}>
                        <div className={css.good_pic}>
                            <img src={require("../../assets/avatar@2x.png")} alt=""/>
                        </div>
                        <div className={css.good_info}>
                            <h1>皮蛋瘦肉粥配包子套餐</h1>
                            <p className={css.good_species}>咸粥</p>
                            <p className={css.good_sales}><span>月售1132份</span><span>好评率100%</span></p>
                            <div className={css.good_footer}>
                                <div>
                                    <span className={css.good_price}><i>￥</i>24</span>
                                    <span className={css.good_price_before}>￥28</span>
                                </div>
                                <div className={css.btn}><span className={css.add}>+</span></div>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
};
export default class Goods extends React.Component<any, any> {
    scrollLeft: any;
    scrollRight: any;
    componentDidMount () {
        setTimeout(() => {
            this.scrollLeft = new IScroll(this.refs.scrollLeft);
            this.scrollRight = new IScroll(this.refs.scrollRight);
        }, 100)
    }
    render () {
        const Rating = ratingList.map((item: Test) => {
            return <li>{item.name}</li>
        });
        const RatingEles = ratingList.map((item: Test) => {
            return (
                <li>
                    <div className={css.goods_header}>
                        {item.name}
                    </div>
                    {RatingTemp(item.list)}
                </li>
            )
        });
        return (
            <div className={css.wrap}>
                <div ref="scrollLeft">
                    <ul className={css.nav}>
                        {Rating}
                    </ul>
                </div>
                <div className={css.goods_list} ref="scrollRight">
                    <ul>
                        {RatingEles}
                    </ul>
                </div>
            </div>
        )
    }
}