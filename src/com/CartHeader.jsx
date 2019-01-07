import React from 'react';
import { NavLink } from 'react-router-dom'
import "./../scss/Home.scss"
import $ from 'jquery'
export default class CartHeader extends React.Component {
constructor(props){
    super(props);
    this.state={
    	xiugai:'iconfont icon-icon-pencil',
    	isxiugai:true
    }
   }
componentDidMount(){
//	this.click()
}

 xiugai(){
 	var that = this;
 	var isxiugai = this.state.isxiugai;
 	if(isxiugai){
 		
 		that.setState({
 		xiugai:'iconfont icon-cuohao1',
 		isxiugai:false
 	})
 		
 	}else{
 	
 		that.setState({
 		xiugai:'iconfont icon-icon-pencil',
 		isxiugai:true
 	})
 	}
 	
	console.log(1)
	$('.datele').toggle()
}
		render() {
			var xiugai = this.state.xiugai;
				return(

						
						<div className = 'header' > 
						    <ul>
						        <li><NavLink to={'/home'}><span className='iconfont icon-shouye'></span></NavLink></li>
						        <li>我的书架</li>
						        <li><span onClick = {this.xiugai.bind(this)} className={xiugai}></span></li>
						    </ul>
						< /div>
			
		)
	}
}