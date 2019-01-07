import React from 'react';
import { NavLink } from 'react-router-dom'
export default class User extends React.Component {

		render() {
				return(

						<div className = 'userContent' > 
						    <div style={{width:'100%',height:'0.72rem'}}></div>
						    <NavLink to='/login'><button>登录</button></NavLink>
						    <NavLink to='/register'><button>注册</button></NavLink>
						    <div>
						    	<ul style={{padding:'0.1rem'}}>
						    	<li style={{width:'100%',height:'0.56rem',borderBottom:'0.01rem solid #eee',lineHeight:'0.56rem',textIndex:'0.1rem'}}>我的余额</li>
						    	<li style={{width:'100%',height:'0.56rem',borderBottom:'0.01rem solid #eee',lineHeight:'0.56rem',textIndex:'0.1rem'}}>书豆充值</li>
						    	<li style={{width:'100%',height:'0.56rem',borderBottom:'0.01rem solid #eee',lineHeight:'0.56rem',textIndex:'0.1rem'}}>充值记录</li>
						    	<li style={{width:'100%',height:'0.56rem',borderBottom:'0.01rem solid #eee',lineHeight:'0.56rem',textIndex:'0.1rem'}}>消费记录</li>
						    	</ul>
						    	
						    	<ul style={{padding:'0.1rem'}}>
						    	<li style={{width:'100%',height:'0.56rem',borderBottom:'0.01rem solid #eee',lineHeight:'0.56rem',textIndex:'0.1rem'}}>我的书架</li>
						    	<li style={{width:'100%',height:'0.56rem',borderBottom:'0.01rem solid #eee',lineHeight:'0.56rem',textIndex:'0.1rem'}}>账户管理</li>
						    	<li style={{width:'100%',height:'0.56rem',borderBottom:'0.01rem solid #eee',lineHeight:'0.56rem',textIndex:'0.1rem'}}>退出登录</li>
						    	</ul>
						    </div>
						    <div style={{width:'100%',height:'2.5rem',textAlign:'center',background:'#f0f0f3'}}>
			<button style={{width:'80%',height:'0.42rem',background:'#00c98d',color:'#fff',borderRadius:'0.04rem',marginTop:'0.2rem',border:'1px solid #00c98d'}}>下载书旗小说客户端</button>
			<p style={{lineHeight:'0.4rem'}}>海量图书，更高品质阅读体验</p>
			<p style={{color:'#999'}}>©2016书旗网shuqi.com</p>
			<p style={{color:'#999'}}>粤ICP备13078413号-1</p>
			<p style={{color:'#999'}}>广州阿里巴巴文学信息技术有限公司 版权所有</p>
			<p style={{color:'#999'}}>广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元</p>
			<p style={{color:'#999'}}>020-39225959</p>
			
			</div>
						< /div>
			
		)
	}
}