import React, { Component, isValidElement } from 'react';

const events = ['touchmove', 'mousewheel', 'DOMMouseScroll'];

class ModalContainer extends Component {

    eventHandler = ev => {
        ev.preventDefault();
        ev.stopPropagation();
    }

    componentDidMount() {
        const element = this.refs.container.parentNode; // 表示最外层的背景
        events.forEach(event => element.addEventListener(event, this.eventHandler, false))
    }

    componentWillUnmount() {
        const element = this.refs.container.parentNode;
        events.forEach(event => element.removeEventListener(event, this.eventHandler, false));
    }

    render() {
        const { component: MyComponent }  = this.props;

        return (
            <div className="modal-wrap" ref="container">
                { (!MyComponent || isValidElement(MyComponent)) ? MyComponent : <MyComponent {...this.props} /> }
            </div>
        )
    }
}

export default ModalContainer;

// container组件为内容，而最外层的div在show时被创建并引入dom中
