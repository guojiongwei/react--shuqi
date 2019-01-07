import React from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import './../scss/List.scss'
import { Toast } from 'antd-mobile';

function showToast() {
  Toast.info('加载中。。。')
}
export default class List extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			lists: [],
			pages:1
		}
	}
	componentWillMount() {

	}
	componentDidMount() {
		var that = this;
		var gid = this.props.location.pathname.split('/')[2];
		var page = 1;
		//console.log(gid)
		$.ajax({
			url: "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=" + page + "&words=&shuqi_h5=&onlyCpBooks=1&secondCate=" + gid + "&sort=monthHot&_=1510843580965",
			success: function(data) {
				console.log(data.data)
				if(data.data.length!=0){
					that.setState({
					list: data.data
				})
				}else{
			   $.ajax({
			url: "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page="+page+"&words=&shuqi_h5=&onlyCpBooks=1&tag="+gid+"&sort=monthHot&_=1511417327097",
			success: function(data) {
			console.log(data.data)
					that.setState({
					list: data.data
				})
			}
			})
				}
				
			}

		})

		var content = document.getElementById('content')
		//console.log(content)
		var isRequest = false;
		$("#listContent").on("scroll", function() {
			var $scrollTop = $("#listContent").scrollTop();
			var $scrollTop3 = $(".container")[0].clientHeight;
			var $scrollTop2 = $("#listContent")[0].scrollHeight;
//			console.log($scrollTop)
//			console.log($scrollTop2)
//			console.log($scrollTop3)
			if(isRequest == true) {
				return;
			}
			if($scrollTop + $scrollTop3 > $scrollTop2 + 43.5) {

			console.log('滚动到底部')
				loadMore()
				showToast()
			}
		})

		function loadMore() {
			page++
			//console.log(page)
			$.ajax({
				url: "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=" + page + "&words=&shuqi_h5=&onlyCpBooks=1&secondCate=" + gid + "&sort=monthHot&_=1510843580965",
				success: function(data) {
					//console.log(data.data)
					var datas = data.data
					//console.log(datas)
					that.setState({
						lists: datas,
						pages:page
					})
				}
			})
		}
	}

	render() {
		var arr = [];
//		console.log(this.state.lists)
		var lists = this.state.lists
		var data = this.state.list;
var pages = this.state.pages;
//console.log(pages)
		for(var j = 0; j < lists.length; j++) {

			data.push(lists[j]);
		}
		for(var i = 0; i < data.length; i++) {
//			console.log(data[i])
			var item = data[i]
			item.index = i;
//			console.log(i)
			arr.push(<NavLink to={'/details/'+item.category+'/'+i+'/'+item.authorid+'/'+item.bookid+'/'+pages} key={i}><li>
			<img src = {item.cover} />
			<span>{item.title}</span><br/>
			<em>{item.author}</em>
			<p className='pp'>{item.desc}</p>
			<time>{item.tags}</time>
			</li></NavLink>)
		}
		return(
			<div id='listContent' style={{width:'100%',height:'100%',overflow: "auto"}}>
			<ul>
        {arr}
      </ul>
      </div>
		)
	}
}