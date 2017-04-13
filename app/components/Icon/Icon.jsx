import React from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';

import './style.scss';

const defaultProps = {
    type: '',
    spin: false
}

export default (props: defaultProps) => {
    const {type, className, spin, title} = props;
    const iconCls = classNames({
        'tiger-icon': true,
        'tiger-icon-spin': !!spin || type === 'loading',
        [`tiger-icon-${type}`]: true
    }, className);

    return (
        <i {...omit(props, ['type', 'spin'])} className={iconCls}>{title}</i>
    )
}
