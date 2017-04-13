import React, {Component} from 'react';
import Icon from 'components/Icon';
import {iconTypes} from './config';
import {Link} from 'react-router';

import Switch from 'utils/Switch';

import './style.scss';

class Picon extends Component {
    render() {
        const warningStyle = {
            fontSize: '50px',
            color: 'red'
        }
        const mapStyle = {
            fontSize: '100px'
        }
        return (
            <div className="tiger-pages-icon">
                <h1>图标组件 Icon</h1>
                <p>语义化的矢量图标</p>

                <h2>如何使用</h2>
                <p>使用<code>Icon</code>标签声明组件，指定图标对应的type属性，示例代码如下：</p>
                <pre><code>
                    {`<Icon type="success" />`}
                </code></pre>
                <section className="code-box">
                    <div className="show-demo code-box-item">
                        <div className="show-box-title">演示</div>
                        <p>
                            <Icon type="success" />
                        </p>
                        <p>
                            <Icon type="warning" style={warningStyle} />
                        </p>
                        <p>
                            <Icon type="map" style={mapStyle} />
                        </p>
                    </div>
                    <div className="show-desc code-box-item">
                        <div className="show-box-title">描述</div>
                        <p>因为是矢量图形，因此还可以使用新添加的className与style将图标当成文字来处理，以达到修改图标样式的目的</p>
                    </div>
                    <div className="show-code code-box-item">
                        <div className="show-box-title">代码</div>

                        <code>{`const warningStyle = { fontSize: "50px", color: "red" }`}</code>
                        <code>{`const mapStyle = { fontSize: "100px" }`}</code>
                        <code>{`<Icon type="success" />`}</code>
                        <code>{`<Icon type="warning" style={warningStyle} />`}</code>
                        <code>{`<Icon type="map" style={mapStyle} />`}</code>
                    </div>
                </section>
                <h2>目前支持的图标列表</h2>
                <p>指定不同的<code>type</code>值即可得到不同的图标。</p>
                <ul className="tiger-icon-list">
                    {iconTypes.map((type, i) => {
                        return (
                            <li className="tiger-icon-wrap" key={i}>
                                <Icon type={type} className="icon" />
                                <div className="typename">{type}</div>
                            </li>
                        )
                    })}
                </ul>

                <Switch nextType="button" />
            </div>
        )
    }
}

export default Picon;
