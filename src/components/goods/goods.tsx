import * as React from 'react'

const css = require('./goods.sass');
interface Test {
    name: string,
    list: Array<number>
}
const test:Test = {
    name: 'abc',
    list: [1, 2, 3]
};
const ratingList:object[] = new Array(20).fill(test);

export default class Goods extends React.Component<any, any> {
    render () {
        const Rating = ratingList.map((item: Test) => {
            return <li>{item.name}</li>
        });
        const RatingEles = ratingList.map((item: Test) => {
            return (
                <div>
                    <div className={css.goods_header}>
                        {item.name}
                    </div>
                    <ul className={css.goods_content}>
                        {item.list.map((el) => {
                            return <li>{el}</li>
                        })}
                    </ul>
                </div>
            )
        });
        return (
            <div className={css.wrap}>
                <ul className={css.nav}>
                    {Rating}
                </ul>
                <div className={css.goods_list}>
                    {RatingEles}
                </div>
            </div>
        )
    }
}