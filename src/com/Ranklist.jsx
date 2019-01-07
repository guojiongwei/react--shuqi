import React from 'react';
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import './../scss/Racklist.scss'
import { Toast } from 'antd-mobile';

function showToast() {
  Toast.info('加载中。。。');
}
export default class Rankslist extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			ranklist: [],
			lists: [],
			type: '',
			pages:1
		}
	}

	componentDidMount() {
		console.log(this)
		var type = this.props.location.pathname.split('/')[2]
		console.log(type)

		var that = this;
		that.setState({
			type: type
		})
		var page = 1;
		$.ajax({
			url: 'http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page=' + page + '&size=10&onlyCpBooks=1&gender=1&type=' + type + '&shuqi_h5=&_=1510929033295',
			success: function(data) {
				console.log(data.data)
				that.setState({
					ranklist: data.data
				})
			}
		})
		var isRequest = false;
		$("#ranklistContent").on("scroll", function() {
			var $scrollTop = $("#ranklistContent").scrollTop();
			var $scrollTop3 = $(".container")[0].clientHeight;
			var $scrollTop2 = $("#ranklistContent")[0].scrollHeight;
			if(isRequest == true) {
				return;
			}
			if($scrollTop + $scrollTop3 > $scrollTop2 + 43.5) {
				//console.log('滚动到底部')
				loadMore()
				
			}
		})

		function loadMore() {
			page++
			//console.log(page)
			$.ajax({
				url: 'http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page=' + page + '&size=10&onlyCpBooks=1&gender=1&type=' + type + '&shuqi_h5=&_=1510929033295',
				success: function(data) {
					//console.log(data.data)
					var datas = data.data
					that.setState({
						lists: datas,
						pages:page
					})
				}
			})
			showToast()
		}
	}
	render() {
		var arr = [];
		var data = this.state.ranklist;
		console.log(this.state.type)
		var type = this.state.type
		var lists = this.state.lists;
		var pages = this.state.pages;
		for(var j = 0; j < lists.length; j++) {
			data.push(lists[j]);
		}
		for(var i = 0; i < data.length; i++) {
			//console.log(data[i])
			var item = data[i];
			item.index = i;
			var num = i + 1;
			//console.log(num)
			arr.push(<NavLink to={'/ranks/'+item.category+'/'+i+'/'+item.authorid+'/'+item.bookid+'/'+type+'/'+pages} key={i}><li style={{position:'relative'}}>
			<div className='mask' style={{position:'absolute',zIndex:'999',width:'0.18rem',height:'0.22rem',background:'orange',color:'#fff',fontSize:'0.14rem',textAlign:'center',lineHeight:'0.22rem'}}>{num}</div><img src = {item.cover} />
			<span>{item.title}</span><br/>
			<em>{item.author}</em>
			<p className='pp'>{item.desc}</p>
			<time>{item.tags}</time>
			</li></NavLink>)
		}
		return(
			<div id ='ranklistContent' style={{width:'100%',height:'100%',overflow: "auto"}}>
			<ul>{arr}</ul>
			</div>
		)
	}
}