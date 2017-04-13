import React from 'react';
import {render} from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Index from 'pages/Index';
import Color from 'pages/Color';
import Icon from 'pages/Icon';
import Button from 'pages/Button';
import Toast from 'pages/Toast';

const tigerUIElement = document.querySelector('.tiger-ui');

render((
    <Router history={hashHistory}>
        <Route path="/" component={Index}>
            <IndexRoute component={Color} />
            <Route path="/color" component={Color} />
            <Route path="/icon" component={Icon} />
            <Route path="/button" component={Button} />
            <Route path="/modal" component={Toast} />
        </Route>
    </Router>
), tigerUIElement);
