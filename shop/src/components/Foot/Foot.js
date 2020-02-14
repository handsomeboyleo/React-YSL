import React from 'react';
import './Foot.less'
function Foot() {
    return (
        <div className='Foot'>
            <div className='fbanner'>
                <ul>
                    <li>
                        <div className='fitem'>
                        <div className='fbimg'><img src={require('../../static/images/安全.png')} alt='haha'></img></div>
                        <span>100%官方正品保证</span>
                        </div>
                    </li>
                    <li><div className='fitem'>
                        <div className='fbimg'><img src={require('../../static/images/运输.png')}alt='haha'></img></div>
                        <span>支持多种支付方式</span>
                        </div>
                    </li>
                    <li><div className='fitem'>
                        <div className='fbimg'><img src={require('../../static/images/礼物.png')}alt='haha'></img></div>
                        <span>专项官网特惠礼遇</span>
                        </div>
                    </li>
                    <li><div className='fitem'>
                        <div className='fbimg'><img src={require('../../static/images/联系.png')}alt='haha'></img></div>
                        <span>联系我们<br/>电话400-820-6362</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='f-content'>
                <ul>
                    <li><p>彩妆</p></li>
                </ul>
                <ul>
                    <li><p>护肤</p></li>
                </ul>
                <ul>
                    <li><p>香水</p></li>
                </ul>
                <ul>
                    <li><p>圣诞限定</p></li>
                </ul>
                <ul>
                    <li><p>关注我们</p></li>
                </ul>
            </div>
            <div className='f-logo'>
                <img src={require('../../static/images/logo.png')} alt='logo'/>
            </div>
            <div className='f-info'>
                <div className='info'>
                    <p>@欧莱雅（中国）有限公司</p>
                    <p>中国工商</p>
                    <p>沪公网安备</p>
                    <ul>
                        <li><a href='/'>Cookies政策</a></li>
                        <li><a href='/'>使用条款</a></li>
                        <li><a href='/'>隐私政策</a></li>
                        <li><a href='/'>网站地图</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Foot;