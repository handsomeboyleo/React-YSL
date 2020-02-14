import React from 'react'
import './register.less';
import {fetchpost} from '../../tools/myfetch.js'
class Register extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 1,
      gender:'male',
      offcard:1
    }
    }
    handleClick(e) {
        let data = {
            gender:this.state.gender,
            username : this.account.value,
            email: this.email.value,
            password : this.password.value,
            offcard:this.state.offcard
        }
        console.log(data);
        // e.preventDefault();
        fetchpost('/api/register',data)
            .then((res) => {
              console.log(res)
            })


    };
    handleChange(e){
      console.log(1,e.target.value,)
      this.setState({gender:e.target.value})
          
  }
    render() {
      const{gender}=this.state;
      return (
            <div className='register'>
              <p>新用户注册</p>
              <div className='newuser'>
                  <div className='gender'>
                    <span>称谓：</span>
                    {/* <RadioItem
                          onClick={() => this.handleChange('gender', 'worker')}
                          checked={this.state.gender === 'male'}>先生   </RadioItem>
                      <RadioItem
                          onClick={() => this.handleChange('gender', 'boss')}
                          checked={this.state.gender === 'famale'}>女士</RadioItem> */}
                    <input
                        type="radio"
                        value="male"
                        checked={gender==='male'}
                        onChange={this.handleChange}/>先生
                    <input
                        type="radio"
                        value="female"
                        checked={gender==='female'}
                        onChange={this.handleChange}/>女士                
                  </div>
                  <div className='usermain'>
                      <div className='useraccount'>
                          <span>您的邮箱：</span>
                          <input ref={input=>this.email=input}  name="email" placeholder="请输入正确的邮箱" />
                      </div>
                      <div className='useraccount'>
                          <span>姓名：</span>
                          <input ref={input=>this.account=input}  name="account" />
                      </div>
                      <div className='useraccount'>
                          <span>密码：</span>
                          <input ref={input=>this.password=input} type='password'  name="password" placeholder="请输入您的密码" />
                      </div>
                      <div className='useraccount'>
                          <span>确认密码：</span>
                          <input ref={input=>this.repassword=input} type='password' name="repassword" placeholder="请再次输入您的密码" />
                      </div>
                  </div>
              </div>
              <div className='mention'>
              <input type='radio'/>我同意依照本使用条款和隐私政策对我的个人信息进行收集和使用；我已阅读并确认被给予充分机会理解该使用条款和隐私政策的内容。
              </div>
              <button className='rbtn' onClick={(e)=>this.handleClick(e)}>同意协议并注册</button> 
            </div>
        )
    }
}
export default Register