import React from 'react';
import $ from 'jquery';
import { Toast } from 'antd-mobile';
import './../scss/Details.scss'
import { NavLink } from 'react-router-dom'
function showToast() {
  Toast.info(' 移出书架成功');
}
export default class CartHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			img:'http://c-shuqi.11222.cn/assets/bookshelf-empty_0f8e62c.png'
		}
	}
	componentDidMount() {
		var that = this;
		console.log(this)
		console.log(localStorage.valueOf())
		var book = localStorage.getItem('books')
		console.log(JSON.parse(book))
		var books = JSON.parse(book);
		that.setState({
			books: books
		})
var books = JSON.parse(localStorage.getItem('books'))
		if(books.length==0){
			$('.kong').show()
		}else{
			$('.kong').hide()
		}
	}
	detele(index) {
		showToast()
		var that = this;
		console.log(index)
		var books = JSON.parse(localStorage.getItem('books'))
		console.log(books)
		books.splice(index, 1)
		if(books.length==0){
			$('.kong').show()
		}else{
			$('.kong').hide()
		}
		console.log(this.state.books)
		this.state.books.splice(index, 1);
		that.setState({
			books: this.state.books
		})
		localStorage.setItem('books', JSON.stringify(books))
	}

	render() {
		var arr = [];
		var data = this.state.books;
		for(var i = 0; i < data.length; i++) {
			//	console.log(data[i])
			var item = data[i]
			item.index = i;
			//console.log(item)
			arr.push(<li className='bookbox' style={{textAlign:'center',position:'relative',width:'1.1rem',height:'1.7rem',float:'left',marginLeft:'0.06rem'}}  key={item.bookid} ><em onClick={this.detele.bind(this,i)} className='iconfont icon-cuohao datele' style={{position:'absolute',right:'0',display:'none',top:'-0.14rem',color:'red',zIndex:'999'}}></em><a href={'http://t.shuqi.com/route.php?pagename=#!/bid/'+item.bookid+'/cid//ct/read'}><img style={{width:'.9rem',height:'1.23rem'}} src={item.img} /><p>{item.title}</p></a></li>)
		}
	var img = this.state.img;
		return(

			<div className = "cartContent">		
					<ul style={{width:'100%',height:"100%",minHeight:"3.74rem",overflow:'hidden',paddingLeft:'0.06rem'}}>
					{arr}
					<div className='kong'>
					<img style={{width:'1.67rem',height:'0.92rem',position:'absolute',left:'26%',top:'20%'}} src={img} />
			
					<NavLink to = {'/home'}><button className = 'go' style = {{width:'1.37rem',height:'0.4rem',marginTop:'2.5rem',border:'0',marginLeft:'1.1rem'}}>去书城</button></NavLink>
					</div>
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