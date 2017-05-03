import * as React from 'react'
import * as IScroll from '../../lib/iscroll.js'

const css = require('./goods.sass');

const goodList = (item: any[]) => {
    return (
        <ul className={css.goods_content}>
            {item.map((el: any) => {
                return (
                    <li className={css.good_detail}>
                        <div className={css.good_pic}>
                            <img src={el.image} alt=""/>
                        </div>
                        <div className={css.good_info}>
                            <h1>{el.name}</h1>
                            <p className={css.good_species}>{el.description}</p>
                            <p className={css.good_sales}><span>月售{el.sellCount}份</span><span>好评率100%</span></p>
                            <div className={css.good_footer}>
                                <div>
                                    <span className={css.good_price}><i>￥</i>{el.price}</span>
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
let scrollRefs: any = [];
interface JsonData  {
    jsonData: any,
    currentRating: number
}
export default class Goods extends React.Component<any, any> {
    scrollLeft: any;
    scrollRight: any;
    state: JsonData = {
        jsonData: null,
        currentRating: 0
    };
    componentWillMount () {
        fetch('http://localhost:8080/data.json')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.setState({
                    jsonData: json
                });
                setTimeout(() => {
                    this.scrollLeft = new IScroll(this.refs.scrollLeft);
                    this.scrollRight = new IScroll(this.refs.scrollRight);
                }, 100)
            });
    }
    scrollHandle (index: number) {
        this.setState({
            currentRating: index
        });
        this.scrollRight.scrollToElement(this.refs[scrollRefs[index]], 750);
    }
    render () {
        const Rating = this.state.jsonData && this.state.jsonData.goods.map((item: any, index: number) => {
            return <li onClick={this.scrollHandle.bind(this, index)} style={
                this.state.currentRating === index ? {background: '#fff'} : null
            }>{item.name}</li>
        });
        const RatingHeader = this.state.jsonData && this.state.jsonData.goods.map((item: any, index: number) => {
            scrollRefs.push('scrollRefs' + index);
            return (
                <li>
                    <div className={css.goods_header + " scroll-refs"} ref={scrollRefs[index]}>
                        {item.name}
                    </div>
                    {goodList(item.foods)}
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
                        {RatingHeader}
                    </ul>
                </div>
            </div>
        )
    }
}


