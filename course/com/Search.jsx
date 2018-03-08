import React from 'react';
import './../scss/Search.scss';
import $ from 'jquery';
import { NavLink } from 'react-router-dom'
export default class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [],
			aladdin: '',
			data: [],
			name: ''
		}
	}

	componentDidMount() {
		var that = this;
		$('.lis1').hide();
		$('.ul1').hide();
		var ipt = document.getElementsByClassName('schInner')[0];
		console.log(ipt);
		ipt.onkeyup = function() {
			console.log(ipt.value);
			var ipts = ipt.value;
			if(ipts) {
				$.ajax({
					url: 'http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sugs&q=' + ipts + '&_=1511331243984',
					success: function(data) {
						console.log(data)
						var datas = data.data;
						that.setState({
							list: datas
						})
					}
				})
			} else {
				$('.lis').hide();
			}
		}
	}
	click(index) {
		var that = this;
		console.log(index);
		
		var lis = $('.lis')
		console.log(lis[index].innerHTML)
		var name = lis[index].innerHTML;
		that.setState({
			name: name
		})
		$.ajax({
			url: "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=10&q=" + name + "&filterMigu=1&p=3&shuqi_h5=&_=1511331271715",
			success: function(data1) {
				console.log(data1.aladdin);
				console.log(data1.data);
				if(data1) {
					that.setState({
						aladdin: data1.aladdin,
						data: data1.data
					})
				} else {
					console.log(1111111111111111111111111)
				}
			}
		})
		$('.lis').hide();
		$('.lis1').show();
		$('.ul1').show();
		var ipt = document.getElementsByClassName('schInner')[0];
		ipt.value = name
	}
	render() {
		var list = this.state.list;
		console.log(list);
		var arr = [];
		if(list) {
			for(var i = 0; i < list.length; i++) {
				var lists = list[i];
				list.index = i;
				console.log(list[i])
				arr.push(<li style={{width:'100%',height:'0.36rem',borderBottom:'0.02rem solid #eee',lineHeight:'0.36rem',textIndex:'0.1rem'}} onClick = {this.click.bind(this,i)} className = 'lis' key={lists}>{lists}</li>)
			}
		}
		var data = this.state.data;
		var arr1 = [];
		var name = this.state.name;
		for(let j = 1; j < data.length; j++) {
			var item1 = data[j];
			item1.index = j;
			console.log(item1)
			arr1.push(<NavLink key = {item1.words} to={'/searchD/'+item1.category+'/'+j+'/'+item1.authorid+'/'+item1.bid+'/'+item1.title}><li ><img src = {item1.cover} />
			<span>{item1.title}</span><br/>
			<em>{item1.author}</em>
			<p className='pp'>{item1.desc}</p>
			<time>{item1.tags}</time></li></NavLink>)
		}

		var arr2 = [];
		var aladdin = this.state.aladdin;
		console.log(aladdin)
		arr2.push(<NavLink key = 'aladdin.words' to={'/searchD/'+aladdin.category+'/'+aladdin.base+'/'+aladdin.authorid+'/'+aladdin.bid+'/'+aladdin.title}><li className = 'lis1' style = {{marginTop:'-0.2rem'}}><img src = {aladdin.cover} />
			<span>{aladdin.title}</span><br/>
			<em>{aladdin.author}</em>
			<p className='pp'>{aladdin.desc}</p>
			<time>{aladdin.tags}</time></li></NavLink>)
		return(

			<div className = 'searchContent'> 
						   <div className="schHead">
        <div className="schBlock">
        <input type="search" className="schInner" placeholder="书名/作者/关键词" />
        <button></button>
	    	</div>
		</div>
		<ul style={{width:'100%',height:"auto",overflow:'auto',padding:'0.1rem 0.2rem 0.1rem 0.2rem'}}>
		{arr}
		</ul>
		<ul>{arr2}</ul>
		<ul className='ul1' style={{borderTop:'0.1rem solid #eee'}}>
		
		{arr1}
		</ul>
	</div>

		)
	}
}