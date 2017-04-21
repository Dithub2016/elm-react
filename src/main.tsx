import * as React from "react";
import * as ReactDOM from "react-dom";
import Seller from './components/seller/seller';

require('./sass/reset.sass')

ReactDOM.render(
    <Seller />,
    document.getElementById('app')
)
