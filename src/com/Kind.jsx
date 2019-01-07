import React from 'react';
import MyAjax from "./../md/MyAjax.js";
import {Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import "./../scss/Kind.scss"
import List from "./List.jsx"




export default class Kind extends React.Component {

constructor(props){
	super(props);
	this.state={
		body:[],
		girl:[]
	}
}
componentWillMount(){
	var that = this
	     var data1 = '{"state":"200","message":"success","data":{"girl":[{"cid":21,"relatedName":"现代言情","list":["豪门总裁","高干","婚姻","都市情感","宝宝","军婚"]},{"cid":20,"relatedName":"古代言情","list":["穿越","架空","宫斗宅斗","情仇爱恨","女尊","种田"]},{"cid":224,"relatedName":"幻想言情","list":["仙侣奇缘","江湖奇缘"]},{"cid":18,"relatedName":"校园青春","list":["青春年华","校园魔幻","青春校园","学生"]}],"boy":[{"cid":51,"relatedName":"都市小说","list":["生活","异能","重生","热血","人生","美女","极道江湖"]},{"cid":1,"relatedName":"玄幻小说","list":["东方玄幻","异界大陆","转世重生","远古神话"]},{"cid":133,"relatedName":"仙侠小说","list":["现代修真","奇幻修真","洪荒封神","凡人","丹药"]},{"cid":41,"relatedName":"灵异推理","list":["灵异鬼怪","恐怖惊悚","悬疑探险","侦探推理"]},{"cid":125,"relatedName":"历史架空","list":["架空历史","两宋元明","秦汉三国","权谋","乱世"]},{"cid":32,"relatedName":"军事小说","list":["战争幻想","军旅生活","军事战争","抗日烽火"]},{"cid":40,"relatedName":"游戏竞技","list":["虚拟网游","游戏异界","游戏人生","系统"]},{"cid":62,"relatedName":"科幻小说","list":["未来","进化变异","末世","星际","机甲","时空穿梭"]},{"cid":8,"relatedName":"武侠小说","list":["传统武侠","新派武侠","幻武异侠","江湖风波"]},{"cid":135,"relatedName":"奇幻小说","list":["领主贵族","亡灵异族","西方奇幻","魔法","召唤"]},{"cid":12,"relatedName":"竞技体育","list":["电子竞技","体坛风云","球类运动"]},{"cid":263,"relatedName":"其他","list":["动漫","影视","武侠","小说"]}]}}'
	      
	        var data2 = JSON.parse(data1)
	        var data = data2.data
	        console.log(data)
	        that.setState({
             boy:data.boy,
             girl:data.girl
	        })
}

		render() {
			
			console.log(this.state.girl)
			console.log(this.state.boy)
			var arr = [];
			var arr1=[]
		for(var item of this.state.girl){
			console.log(item)
			arr.push(<h3 key={item.cid}>{item.relatedName}</h3>)
			for(var item1 of item.list){
			arr.push(<span key={item1}><NavLink to={'/list/'+item1}>{item1}&nbsp;&nbsp;|</NavLink></span>)
			    	}
		}
		for(var items of this.state.boy){
			console.log(items)
			arr1.push(<h3 key={items.cid}>{items.relatedName}</h3>)
			for(var item3 of items.list){
			arr1.push(<span key={item3}><NavLink to={'/list/'+item3}>{item3}&nbsp;&nbsp;|</NavLink></span>)
			    	}
		}
				return(
					
						<div id = 'kindContent' > 
						<div className='girlKind'>女生分类</div>
						
					<div className='girl'>{arr}</div>
					<div className='girlKind'>男生分类</div>
				<div className='boy'>{arr1}</div>
				<Route path="/list" component = {List}/>
						< /div>
			
		)
	}
}