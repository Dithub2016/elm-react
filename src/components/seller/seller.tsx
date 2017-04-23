import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from '../header/header';

import Goods from '../goods/goods'
import Evaluate from '../evaluate/evaluate'
import Business from '../business/business'

const css = require('./seller.sass');

export default class Seller extends React.Component<any, any> {
    componentDidMount () {
        console.log(`I'm coming`);
    }
    render () {
        return (
            <BrowserRouter>
                <div className={css.wrap}>
                    <Header className={css.header} />
                    <ul className={css.nav}>
                        <li><Link to="/">商品</Link></li>
                        <li><Link to="/evaluate">评价</Link></li>
                        <li><Link to="/business">商家</Link></li>
                    </ul>
                    <Route exact path="/" component={Goods} />
                    <Route path="/evaluate" component={Evaluate} />
                    <Route path="/business" component={Business} />
                </div>
            </BrowserRouter>
        )
    }
}
