import React from 'react';
import './../scss/register.scss'
import {NavLink} from 'react-router-dom'
import MyAjax from './../md/MyAjax.js'
import $ from 'jquery'
import { Toast } from 'antd-mobile';

function showToast() {
  Toast.info('登录成功')
}
function showToast1() {
  Toast.info('密码错误')
}
function showToast2() {
  Toast.info('用户不存在，请先注册')
}
export default class Login extends React.Component {

	constructor(props){
		super(props);
		
	}
	loginFn(){
    var userID = $('#username')[0].value;
    console.log(userID)
    var password = $('#password')[0].value;
    console.log(password)
    var url = "http://datainfo.duapp.com/shopdata/userinfo.php";
    MyAjax.axiosGet(url,{
      params:{
        userID:userID,
        password:password,
        status:'login'
      }
    },(data) => {
      console.log(data.data);
      if(data.data == "0"){
       alert("用户名不存在，请先注册")
       showToast2()
      location.replace("#/register");
      }else if(data.data == "2"){
          showToast1()
        this.refs.password.value = "";
        this.refs.password.focus();
      }else{
      showToast()
      location.replace("#/home");
      }
    },(err) => {
      console.log(err)
    })
  }
			

		render() {
				return(

						<div className = 'loginContent' > 
						    <div className = 'login-input-wrap'> 
						          <div className="bold">账户</div>
						          <input type="number" id='username' placeholder="请输入手机号" />
						    </div>
						     <div className = 'login-input-wrap'> 
						          <div className="bold">密码</div>
						          <input type="password" id='password' placeholder="请输入密码" />
						    </div>
						    <div onClick={this.loginFn} className="login-button js-login-button active" >登录</div>
						    
						    <p><NavLink to={'/register'}>立即注册</NavLink></p>
						    <div className="service-procotol" style={{textAlign:'center'}}>
		                     点击上面“登录”<br/>按钮即表示您同意
		              <span className="js-go-service" >《阿里文学用户服务协议》</span><br/>
		              <span className="js-go-secret">《隐私服务协议》</span>
	                  </div>
					  </div>
		)
	}
}