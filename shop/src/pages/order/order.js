import React from'react'
import { fetchpost,fetchget } from '../../tools/myfetch'
import{message} from 'antd'
import './order.less'

class Order extends React.Component{
    constructor(props){
        super(props)
        this.state={
            order:[],
            secgoods:[]
        }
        fetchget('/api/getsession')
        .then((res)=>{
            if(res.code==100){
            message.warning('请登录后查看您的订单')
            }
            else{
            var username={
                username:res.user.username
            }
            this.setState({username:res.user.username})
            fetchpost('/api/myOrder',username)
            .then((res)=>{
                this.setState({order:res.order})
                res.order.map((item,index)=>{
                    var sec={
                        onum:item.onum
                    }
                    fetchpost('/api/findsecGoods',sec)
                    .then((res)=>{
                        console.log(res)
                        this.setState({secgoods:res.secgoods})
                    })
                })
            })
            }
        })
    }
    render(){
        const mysecgoods=this.state.secgoods.map((item,index)=>{
            return<div className='secgoods' key={index}>
                <div className='mygoods'>
                    <p className='impinfo'>{item.title}</p>  
                </div>
                <div className='mygoods'>
                <p className='impinfo'>{item.color}</p>
                </div>
                <div className='mygoods'>
                  <p  className='impinfo'>¥{item.price}</p>  
                
                </div>
                <div className='mygoods'>
                 <p className='impinfo'>{item.amount}个</p>   
                </div>
          
            </div>
        })
        const myorder=this.state.order.map((item,index)=>{
            return<div className='myorder' key={index}>
                        <div className='mo-top'>
                            <div className='prinfo'>
                                <p>订单编号:</p><p className='impinfo'>{item.onum}</p>
                            </div>
                            <div className='prinfo'>
                                <p>姓名:</p><p className='impinfo'>{item.username}</p>
                            </div>
                            <div className='prinfo'>
                                <p>*联系电话:</p ><p className='impinfo'>{item.phonenumber}</p>
                            </div>
                            <div className='prinfo'>
                                <p>*配送地址:</p><p className='impinfo'>{item.address}</p>
                            </div>
                        </div>
                        <div className='secgoods' key={index}>
                            <div className='mygoods'>
                                <p>已购商品</p>  
                            </div>
                            <div className='mygoods'>
                            <p>备注</p>  
                            </div>
                            <div className='mygoods'>
                            <p>单价</p>   
                            
                            </div>
                            <div className='mygoods'>
                            <p>数量</p> 
                            </div>
                    
                        </div>
                            {mysecgoods}
                        <div className='mo-bottom'>
                            <div className='prinfo'>
                                <p>商品总价格:</p><p>¥{item.totalprice}</p>
                            </div>
                            <div className='prinfo'>
                                <p>运费:</p><p>¥{item.transferfee}</p>
                            </div>
                            <div className='prinfo'>
                                <p>已优惠价格:</p><p>¥{item.offfee}</p>
                            </div>
                            <div className='prinfo'>
                                <p>*订单合计金额:</p><p className='impinfo'>¥{item.finalprice}</p>
                            </div>
                        </div>
                    </div>
                
        })
        return(
            <div>
                <p>我的订单</p>
                {myorder}
            </div>
        )
    }
}
export default Order