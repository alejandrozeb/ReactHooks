import React from 'react';
import { BrowserRouter, Router, Switch } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Router path="/" component={Home} />
            <Router path="/checkout" component={Checkout} />
            <Router path="/checkout/information" component={Information} />
            <Router path="/checkout/payment" component={Payment} />
            <Router path="/checkout/success" component={Success} />
            <Router component={} />
        </Switch>
        </BrowserRouter>
    );
}

export default App;