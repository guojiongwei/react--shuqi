import React from 'react';
import $ from 'jquery'

import { NavLink } from 'react-router-dom'
export default class  Rank extends React.Component {

	constructor(props){
		super(props)
			this.state={
				ranklist:[]
			}
	}
	
	componentDidMount(){
		console.log(this)
		var that = this;
		$.ajax({
			url:'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=4&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=888154902&timestamp=1510995729&type=2&resetcache=&sign=684170D8D0FDF838181A40368FCF1EE0&key=shuqiapi&_=1510995729648',
			success:function(data){
				console.log(data.data.module)
				var datas = data.data.module
				that.setState({
						ranklist:datas
					})
			}
		})
	}



		render() {
			var arr = [];
			var datas = this.state.ranklist;
			for(var i = 0;i<datas.length;i++){
					datas[i].index = i;
					if(i%2==0){
					  var data = datas[i]
					  console.log(data.content.title)
					  var id = (i/2)+1;
					  arr.push(
					  	<NavLink key={id} to={'/ranklist/'+id+'/'+data.content.title}><li style={{width:'100%',height:'0.9rem',borderBottom:'0.05rem solid #eee'}}><h3 style={{marginLeft:'0.1rem'}}>{data.content.title}</h3>
					  	<p style={{marginLeft:'0.1rem'}}>{data.content.desc}</p>
					  	</li></NavLink>
					  )
					}
				}
				return(
					<div className = 'RankContent'>
						<ul style = {{padding:'0'}}>{arr}</ul>
						<div style={{width:'100%',height:'2.5rem',textAlign:'center',background:'#f0f0f3'}}>
						<button style={{width:'80%',height:'0.42rem',background:'#00c98d',color:'#fff',borderRadius:'0.04rem',marginTop:'0.2rem',border:'1px solid #00c98d'}}>下载书旗小说客户端</button>
						<p style={{lineHeight:'0.4rem'}}>海量图书，更高品质阅读体验</p>
						<p style={{color:'#999'}}>©2016书旗网shuqi.com</p>
						<p style={{color:'#999'}}>粤ICP备13078413号-1</p>
						<p style={{color:'#999'}}>广州阿里巴巴文学信息技术有限公司 版权所有</p>
						<p style={{color:'#999'}}>广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元</p>
						<p style={{color:'#999'}}>020-39225959</p>
			
			      </div>
			</div>
		)
	}
}