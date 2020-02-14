import React from 'react';
import './Nav.less'
import {  Input, Modal, message,} from 'antd';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import {fetchpost, fetchget} from '../../tools/myfetch'
const { Search } = Input;

class Nav extends React.Component {
    super(){}
    state = {
        loading: false,
        visible: false,
        username:'',
        userid:'',
        flag:false,
        count:0
      };
    
    showModal = () => {
    this.setState({
        visible: true,
    });
    };

    handleOk = () => {
    this.setState({ loading: true });
    let data = {
        email: this.account.value,
        password : this.password.value,
    }
    // e.preventDefault();
    fetchpost('/api/login',data)
        .then((res) => {
            this.setState({
                flag:true,
                username:res.user.username
        })
        window.location.reload()
    })
    this.setState({ loading: false, visible: false,flag:true});
         message.success('登陆成功!');
    
    };
    logout=()=>{
        fetchget('/api/logout')
        .then((res)=>{
            this.setState({
                flag:false
            })
            window.location.reload()
        })
    }
    handleCancel = () => {
    this.setState({ visible: false });
    };

    componentDidMount(){
        fetchget('/api/getsession')
        .then((res)=>{
            if(res.code===100){
                this.setState({
                    flag:false
                })
            }
            else{
                var name=res.user
                    this.setState({
                        flag:true,
                        username:name.username,
                        userid:name._id
                })
                var uid={
                    id:res.user._id
                }
                fetchpost('/api/myCart',uid)
                .then((res)=>{
                    var c=0
                    res.cart.map((item,index)=>{
                      c=c+item.amount
                    })
                    this.setState({count:c})
                })
            }
        })
    }

    render(){
        const { visible,flag } = this.state;
        return (
            <div className="App-nav" >
                <div>
        <Modal
          visible={visible}
          title="用户登陆"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            
          ]}
        >
            <div className='s-left'>
                    <div className='login'>
                        <p className='sp'>用户登录</p>
                        <input className='sinput' ref={input=>this.account=input} type='text' placeholder='请输入邮箱'></input>
                        <input className='sinput' ref={input=>this.password=input} type='password' placeholder='请输入密码'></input>
                        <input type='submit' className='sbtn'  onClick={this.handleOk} value='登陆'></input>
                        </div>
                    </div>
                    <div className='s-right'>
                        <div className='signup'>
                        <p className='sp'>官网专享</p>
                        <Link to={{pathname:'/Register'}}>
                        <button className='sbtn' onClick={this.handleCancel}>注册</button>
                        </Link>
                        </div>
                    </div>
          
        </Modal>
      </div>
                <div className='Nav-notice'>
                    <div className='nno'>
                        <div className='notice'> 
                            <div className='na' href='/'>12 月全场免运费， 任购满520即享刻字礼遇: </div>
                            <div className='na' href='/'>秋冬红唇日惊喜上线， 明星单品限时买即赠 </div>
                        </div>
                    </div>
                </div>
                <div className="Nav-item">
                    <div className='item-content'>
                        <div className='c-left'>
                            <a href='/'>首页</a>
                            <Link to={{pathname:'/Service'}}>客服中心</Link>
                        </div>
                        <div className='c-right'>
                        <div className='cra'><Link to={{pathname:'/Cart'}}>购物袋-{this.state.count}件商品</Link></div>
                        {flag? (
                                <div className='cra' >{this.state.username}
                                <div className='cra_out'><Link to={{pathname:'/Discount'}}>我的优惠</Link></div>
                                <div className='cra_out'><Link to={{pathname:'/Order'}}>我的订单</Link></div>
                                <div className='cra_out' onClick={this.logout}>退出登录</div></div> 
                            ) : (
                                <div className='cra' onClick={this.showModal} >登陆与注册</div>
                        )}
                        </div>
                    </div>
                    <div className='logo'>
                        <img src={require('../../static/images/logo.png')} alt='logo'/>
                    </div>
                    <div className='Nav-tab'>
                        <ul>
                            <li><Link to={{pathname:'/Lips'}}><span>彩妆</span></Link></li>
                            <li><Link to={{pathname:'/Skin'}}><span>护肤</span></Link></li>
                            <li><Link to={{pathname:'/Perfume'}}><span>香水</span></Link></li>
                            <li><a href='/'>冬日红唇日</a></li>
                            <li><a href='/'>圣诞限定礼盒</a></li>
                            <li><a href='/'>会员中心</a></li>
                            <li><a href='/'>私人订制服务</a></li>
                            
                            <div className='searchbar'>
                                <Search placeholder="夜皇后精华" onSearch={value => console.log(value)} style={{ height:40, width: 200 }}/></div>
                        </ul>
                    </div>
                    
                </div>
               
            </div>
        )
    }
   
}
export default Nav;