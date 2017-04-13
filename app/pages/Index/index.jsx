import React, { Component } from 'react';
import {Link} from 'react-router';
import each from 'lodash/each';
import {navLists, navCn} from './config';

import 'components/style';
import './style.scss';

class Index extends Component {
    state = {
        curIndex: 0
    }

    onClick = index => this.setState({
        curIndex: index
    })

    render() {
        const {curIndex} = this.state;
        return (
            <div className="tiger-ui-content">
                <nav className="tiger-ui-nav">
                    {navLists.map((item, i) => <Link to={`/${item}`} key={i} className={curIndex == i ? 'active' : ''} onClick={this.onClick.bind(null, i)}>{navCn[item]}</Link>)}
                </nav>
                <div className="tiger-ui-components">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Index;
