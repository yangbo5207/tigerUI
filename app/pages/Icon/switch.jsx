import React from 'react';

const defaultProps = {

}

export default (props) => {
    return (
        <div className="switch-nav">
            <div className="switch prev">
                <Icon type="arrowleft" />
                <Link  className="link">null</Link>
            </div>
            <div className="switch next">
                <Link to="/button" className="link">Button 按钮</Link>
                <Icon type="arrowright" />
            </div>
        </div>
    )
}
