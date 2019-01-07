import React from 'react';
import './../scss/register.scss'
import {NavLink} from 'react-router-dom'
export default class Register extends React.Component {

	constructor(props){
		super(props);
		this.state = {
		img:'http://account3.shuqireader.com/accountapi/v1/web/captcha/index?imei=d30b6c67830e48c392c42a15ce839b89_shuqi_touch&sn=d30b6c67830e48c392c42a15ce839b89_shuqi_touch&timestamp=1511269265185'
		}
	}
qiehuan11(img){
	var that = this;
	that.setState({
		img:'http://account3.shuqireader.com/accountapi/v1/web/captcha/index?imei=d30b6c67830e48c392c42a15ce839b89_shuqi_touch&sn=d30b6c67830e48c392c42a15ce839b89_shuqi_touch&timestamp=1511269265185'
	})
	console.log(1)
}
		render() {
			var img = this.state.img;
				return(

						<div className = 'loginContent' > 
						     <div className = 'login-input-wrap'> 
						          <div className="bold">账户</div>
						          <input type="number" placeholder="请输入手机号" />
						    </div>
						     <div className = 'login-input-wrap'> 
						          <div className="bold">密码</div>
						          <input type="password" placeholder="请输入密码" />
						    </div>
						    <div className = 'login-input-wrap'> 
						          
						          <input type="password" placeholder="请输入验证码" />
						          <img style={{width:'0.6rem',height:'0.3rem'}} src={img} /><span onClick = {this.qiehuan11.bind(this,img)} style={{marginLeft:'0.1rem',color:'#00C98D'}}>换一换</span>
						    </div>
						     <div className="login-button">登录</div>
						 <p><NavLink to={'/login'} style = {{float:'right'}}>立即登录</NavLink></p>
						        <div className="service-procotol" style={{textAlign:'center',marginTop:"0.18rem"}}>
		                         点击上面“获取验证码”按钮<br/>即表示您同意
		                        <span className="js-go-service" style={{color:'#00C98'}}>《阿里文学用户服务协议》</span><br/>
		                        <span className="js-go-secret" style={{color:'#00C98'}}>《隐私服务协议》</span>
	                           </div>
						</div>
			
		)
	}
}