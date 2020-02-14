import React from 'react'
import ReactSwiper from 'reactjs-swiper';
import './home.less';
import {fetchget} from '../../tools/myfetch.js'
import { Link } from 'react-router-dom';
const Bannerswiper= () => {
  const items = [ {
        image: 'https://res.yslbeautycn.com/resources/2019/11/15/15738079893431802.jpg',
        title: '图片2',
      }, {
        image: 'https://res.yslbeautycn.com/resources/2019/12/3/15753454195103348.jpg',
        title: '图片3',
        link: 'http://jd.com'
      }, {
        image: 'https://res.yslbeautycn.com/resources/2019/11/19/15741562213449410.jpg',
        title: '图片4',
      },{
          image:'https://res.yslbeautycn.com/resources/2019/11/24/15746097974894592.jpg',
          title:'5'
      }
  ];
  const swiperOptions = {
    preloadImages: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: false
  };
  return (
      <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}className="swiper" />
    );
};

const Offswiper=()=>{
  const item=[{
    image: 'https://res.yslbeautycn.com/resources/2019/11/15/15738079893431802.jpg',
    title: '图片2',
  }, {
    image: 'https://res.yslbeautycn.com/resources/2019/12/3/15753454195103348.jpg',
    title: '图片3',
    link: 'http://jd.com'
  }];
  const sOptions = {
    loop: true,
    effect: 'fade',
    autoplay: 3000,
  };
  return (
    <ReactSwiper swiperOptions={sOptions}  items={item} className="offswiper" />
  );
}

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      goodslist:[]
    }
    fetchget('/api/get/GoodsAll',)
      .then((res) => {
          if (res.code === 101) {
              console.log(res.goods);
              this.setState({
                goodslist:res.goods
              });
          }
      })
  }
  render(){
    const lipsshow=this.state.goodslist.map((item,index)=>{
      if(index<3){
        return<li key={index}>
        <div className='new-item'>
          <Link to={{pathname:'/detail/'+item._id}} >
          <div className='h-img'>
            <img src={'http://localhost:8888'+item.img[0]} alt='hotitem'></img>
          </div>
          <div className='n-info'>
            <p className='infoname-eng'>{item.nameen}</p>
            <p className='infoname-cn'>{item.namecn}</p>
          </div>
          <div className='infomain'>
            {item.info}
          </div>
          <div className='h-price'>
            <p>¥{item.price}</p>
          </div>
          </Link>
        </div>
      </li>
      }
    })
    const hotshow=this.state.goodslist.map((item,index)=>{
      if(index<5){
        return<li key={index}>
          <div id='h-item'>
          <Link to={{pathname:'/detail/'+item._id}} >
            <div className='item-img'>
              <img src={'http://localhost:8888'+item.img[0]}alt='new'></img>
            </div>
            <div className='item-info'>
              <p className='hp-en'>{item.nameen}</p>
              <p className='hp-cn'>{item.namecn}</p>
            </div>
            <div className='h-price'>¥{item.price}</div>
           </Link>
          </div>
        </li>
      }
    })
    const showdiscount=this.state.goodslist.map((item,index)=>{
      if(index<5)
        return<li key={index}>
        <div className='o-item'>
        <Link to={{pathname:'/detail/'+item._id}} >
          <div className='oitem-img'>
            <img src={'http://localhost:8888'+item.img[0]} alt='new'></img>
          </div>
          <div className='oitem-info'>
            <p className='op-en'>{item.nameen}</p>
            <p className='op-cn'>{item.namecn}</p>
          </div>
          <div className='o-price'>¥{item.price}</div>
        </Link>
        </div>
      </li>
      
    })
    return(
        <div className='home'>
            <div className='lunbo'>
                <Bannerswiper />
            </div>
            <div className='new'>
              <div className='n-head'>
                  <p>YSL NEW PRODUCTS</p>
                  <p className='newp'>新品尝鲜</p>
              </div>
              <div className='n-content'>
                    <div className='n-left'>
                      <a href='#/lips'>
                        <img src={require('../../static/images/hot.jpg') }alt='hot'></img>
                      </a>
                    </div>
                    <div className='n-right'>
                      <ul>
                        {lipsshow}
                      </ul>
                    </div>
                </div>
            </div>
            <div className='hot'>
                <div className='h-head'>
                    <p>YSL HOT PRODUCTS</p>
                    <p className='hotp'>热销商品</p>
                </div>
                <div className='hot-content'>
                  <ul>
                    {hotshow}
                  </ul>
                </div>
            </div>
            <div className='discount'>
              <div className='d-head'>
                <p>YSL ON SALE</p>
                <p className='dp'>折扣专区</p>
              </div>
              <div className='offimg'>
                <Offswiper/>
              </div>
              <div className='off-content'>
                <ul>
                  {showdiscount}
                </ul>
              </div>
            </div>
        </div>
    )
  }
}
export default Home