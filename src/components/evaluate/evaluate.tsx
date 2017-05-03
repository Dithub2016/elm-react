import * as React from 'react'
const css = require('./evaluate.sass');

const Score = () => {
    return (
        <div className={css.score_wrap}>
            <div className="left">
                <div className="left">
                    <h1 className="left-average_score"></h1>
                    <p className="left-average_text">综合评分</p>
                    <p className="left-average_proportion">高于周边商家69.2%</p>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
};
export default class Evaluate extends React.Component<any, any> {
    render () {
        return (
            <Score/>
        )
    }
}