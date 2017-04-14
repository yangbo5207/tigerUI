import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ModalContainer from './container';
import makeAnimation from './makeAnimation';

import './style.scss';

const arrayFrom = Array.from || (collection => [].slice.call(collection));

// 返回一个数组，每一项是string中包含的html标签，这些标签为兄弟节点
const createElementFromString = string => {
    let container = document.createElement('div');
    let elements;

    container.innerHTML = string;
    elements = arrayFrom(container.children);
    elements.forEach(element => document.body.appendChild(element));

    container = null;
    return elements;
}

const defaultSettings = {
    component: null,
    opacity: 0.3
}

let zIndex = 2000;
let instances = [];

class Modal {
    constructor() {
        if (instances.length > 0) {
            instances.forEach(instance => instance.destroyDirect())
        }

        zIndex++;
        instances.push(this);
    }

    show(settings = {}) {
        settings = { ...defaultSettings, ...settings }
        const style = `z-index:${zIndex};background-color:rgba(0,0,0,${settings.opacity})`;
        this.elements = createElementFromString(`<div class="modal-backdrop modal-animation-show" style="${style}"></div>`);
        this.modalElement = this.elements[0];
        render(<ModalContainer {...settings} />, this.modalElement);
    }

    destroy() {
        makeAnimation(this.modalElement).then(() => {
            unmountComponentAtNode(this.modalElement);
            this.elements.forEach(element => document.body.removeChild(element));
            this.modalElement = this.elements = null;
            instances.forEach(instance => instance = null);
            instances.length = 0;
        })
    }

    destroyDirect() {
        unmountComponentAtNode(this.modalElement);
        this.elements.forEach(element => document.body.removeChild(element));
        this.modalElement = this.elements = null;
        instances.forEach(instance => instance = null);
        instances.length = 0;
    }

    close() {
        this.destroy();
    }
}

export default Modal;
