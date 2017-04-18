import React, { Component } from 'react';
import { CSSTransitionGroup } from "react-transition-group";
import Button from '../Button';
import './style.scss';

export default class TodoList extends Component {

    state = {
        tag: false
    }

    switchTag = e => {
        this.setState({
            tag: !this.state.tag
        })
    }

    render() {
        const { tag } = this.state;

        return (
            <div>
                <Button type="primary" onClick={this.switchTag} context={tag ? 'click to hide' : 'click to show'}></Button>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    { tag ? <div className="items"></div> : null }
                </CSSTransitionGroup>
            </div>
        )
    }
}
