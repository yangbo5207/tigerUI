import React from 'react';
import Icon from 'components/Icon';
import {Link} from 'react-router';
import {navCn} from 'pages/Index/config';

import './style.scss';

const defaultProps = {
    prevType: null,
    nextType: 'button'
}

export default (props = defaultProps) => {
    const {prevType, nextType} = props;
    return (
        <div className="switch-nav">
            <div className="switch prev">
                <Icon type="arrowleft" />
                <Link to={`/${prevType}`}  className="link">{navCn[prevType] ? `${prevType} ${navCn[prevType]}` : 'null'}</Link>
            </div>
            <div className="switch next">
                <Link to={`/${nextType}`} className="link">{`${nextType} ${navCn[nextType]}`}</Link>
                <Icon type="arrowright" />
            </div>
        </div>
    )
}
