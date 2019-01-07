import React from 'react';
import MyAjax from "./../md/MyAjax.js";
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import './../scss/Details.scss'
import './../scss/Header.scss'
import { Toast } from 'antd-mobile';

function showToast() {
  Toast.info(' 添加书架成功');
}
export default class Details1 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			details: '',
			pinlun:[]
		}
	}

	componentWillMount() {
		console.log(this)
		var that = this;
var gid = this.props.location.pathname.split('/')[2]
		var id = this.props.location.pathname.split('/')[3]
		console.log(id)
		var authorid = this.props.location.pathname.split('/')[4]
		var bookid = this.props.location.pathname.split('/')[5]
		$.ajax({
			url: "http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=888154902&timestamp=1511012659&type=2&resetcache=&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=50F438A0BC3F1B640A49F04542DD1FBE&key=shuqiapi&_=1511012659929",
			success: function(data) {
				console.log(data.data.module[3].content)
				var datas = data.data.module[3].content;
				console.log(datas)
				console.log(id)
				if(id==4){
					id=3;
					var obj = datas[id]
				console.log(obj)
			that.setState({
					details: obj
				})
				}else{
					var obj = datas[id]
				console.log(obj)
			that.setState({
					details: obj
				})
				}
				
				
			
			}
		})
$.ajax({
			url: "http://read.xiaoshuo1-sm.com/novel/i.php?do=sp_get&authorId="+authorid+"&bookId="+bookid+"&fetch=merge&sqUid=888154902&source=store&size=3&page=1&shuqi_h5=&_=1511079311858",
			success: function(data) {
				console.log(data.data)
				that.setState({
					pinlun:data.data
				})
			}
		})
	}
add(){
	$('.addbook').css({background:'#e6e7ed'})
 	$('.addbook').css({color:'#c6c7cc'})
 		$('.addbook').css({border:'1px solid #e6e7ed'})
 		$('.addbook').html('已添加')
 	console.log(1);
 	showToast()
 	var data = this.state.details;
 	    console.log(data)
 	    var obj = new Object()
 	    	obj.title = data.bookname;
 	    	obj.img = data.book_cover;
 	    	obj.bookid = data.bid;
 	    	console.log(obj)
 	    		var arr = JSON.parse(localStorage.getItem("books"))
                console.log(arr)
				if(arr==null){
	            var arr=[]     
					arr.push(obj);
				} else {
					var isHas = false;
					for(var i = 0; i < arr.length; i++) {
						var tmpObj = arr[i];
						if(tmpObj.bookid == obj.bookid) {
							isHas = true;
						}
					}
					if(isHas == false) {
						arr.push(obj);
					}
				}
				
					localStorage.setItem("books", JSON.stringify(arr))
					console.log(localStorage.valueOf())
 }
	render() {
		var arr = [];
		var item = this.state.details;
        
		arr.push(<div className='box' key='item.bookid'>
        <section>
        <img src={item.book_cover} />
       <p>{item.bookname}</p>
       <span>{item.author_name}</span><br/>
       <time>{item.first_cate_name} &nbsp; {item.size}字</time><br/>
       <i>已完本</i>
       </section>
       <div className='btn'><button><a  href={'http://t.shuqi.com/route.php?pagename=#!/bid/'+item.bid+'/cid/'+item.chapterid_first+'/ct/read'}>开始阅读</a></button>
       <button>离线下载</button>
       <button className='addbook' onClick={this.add.bind(this)}>加入书架</button></div>
       <p className='pp'>{item.introduction}</p>
       <div className='new'><em className='iconfont icon-shijian'></em><time><i className='times'>最新:</i>{item.topic}</time><span className='iconfont icon-gengduo'></span></div>
      <a className='mulu' href={'http://t.shuqi.com/route.php?pagename=#!/ct/chapterList/bid/'+item.bid}><time className='iconfont icon-mulu'></time>目录<span className='iconfont icon-gengduo'></span></a>
        </div>)
		var arr1 = [];
		var pinlun = this.state.pinlun;
		
		for(var item1 of pinlun){
			console.log(item1)
			arr1.push(<div key={item1.text} style={{width:'100%',padding:'0.1rem',float:'left',overflow:'hidden',height:'0.8rem',borderBottom:'1px solid #999'}}>
				
				<p><img style={{width:'0.24rem',height:'0.24rem'}} src={item1.userPhoto} /><span style={{marginLeft:'0.1rem',color:'#999'}}>{item1.nickName}</span></p>
			    <p style={{textIndent:'0.4rem'}}>{item1.text}</p>
			</div>)
		}
		return(
			<div className='DetailsContent'>{arr}
			<div style={{width:'100%',height:'0.4rem',borderBottom:'1px solid #eee',lineHeight:'0.4rem',textIndent:'0.1rem',color:'#00afc7'}}>精华评论</div>

			<ul style={{width:'100%',height:'2.6rem',borderBottom:'0.06rem solid #eee'}}>
			
			{arr1}
			</ul>
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