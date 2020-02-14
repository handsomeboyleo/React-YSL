import React from'react'
import './skin.less'
import{fetchpost}from '../../tools/myfetch'
import { Link } from 'react-router-dom';
class Skin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            classify:'skin',
            skinitem:[]
        }
        var skin={
            classify:this.state.classify
        }
        console.log(skin)
        fetchpost('/api/get/goodsByClass',skin)
        .then((res) => {
            console.log(res)
            this.setState({skinitem:res.goods})
          })
    }
    render(){
        const skinitem=this.state.skinitem.map((item,index)=>{
            return<li key={index}>
            <div className='s-item'>
            <Link to={{pathname:'/detail/'+item._id}} >
              <div className='sitem-img'>
                <img src={'http://localhost:8888'+item.img[0]} alt='new'></img>
              </div>
              <div className='sitem-info'>
                <p className='sp-en'>{item.nameen}</p>
                <p className='sp-cn'>{item.namecn}</p>
              </div>
              <div className='s-price'>¥{item.price}</div>
            </Link>
            </div>
          </li>
        })
        return(
            <div className='skin'>
                <div className='topimg'>
                    <img src={require('../../static/images/护肤.jpg')} alt='护肤'></img>
                </div>
                <div className='skin-main'>
                    <div className='skin-class'>
                        <ul>
                            <li><a>限时折扣</a></li>
                            <li><a>新品`New</a></li>
                        </ul>
                    </div>
                    <div className='skin-goods'>
                        <ul>
                            {skinitem}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Skin