import React from'react'
import './perfume.less'
import{fetchpost}from '../../tools/myfetch'
import { Link } from 'react-router-dom';
class Perfume extends React.Component{
    constructor(props){
        super(props)
        this.state={
            classify:'perfume',
            peritem:[]
        }
        var per={
            classify:this.state.classify
        }
        console.log(per)
        fetchpost('/api/get/goodsByClass',per)
        .then((res) => {
            console.log(res)
            this.setState({peritem:res.goods})
          })
    }
    render(){
        const peritem=this.state.peritem.map((item,index)=>{
            return<li key={index}>
            <div className='p-item'>
            <Link to={{pathname:'/detail/'+item._id}} >
              <div className='pitem-img'>
                <img src={'http://localhost:8888'+item.img[0]} alt='new'></img>
              </div>
              <div className='pitem-info'>
                <p className='pp-en'>{item.nameen}</p>
                <p className='pp-cn'>{item.namecn}</p>
              </div>
              <div className='p-price'>¥{item.price}</div>
            </Link>
            </div>
          </li>
        })
        return(
            <div className='perfume'>
            <div className='topimg'>
                <img src={require('../../static/images/香水.jpg')} alt='香水'></img>
            </div>
            <div className='per-main'>
                    <div className='per-class'>
                        <ul>
                            <li><a>限时折扣</a></li>
                            <li><a>新品`New</a></li>
                        </ul>
                    </div>
                    <div className='per-goods'>
                        <ul>
                            {peritem}
                        </ul>
                    </div>
                </div>
        </div>
        )
    }
}
export default Perfume