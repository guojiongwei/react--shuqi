import React from 'react';
import { NavLink } from 'react-router-dom'

export default class UserHeader extends React.Component {
constructor(props){
    super(props);
   }
componentWillMount(){
//	this.click()
}
 click(){
   window.history.go(-1)
  }
    

		render() {
				return(

						
						<div className = 'header' > 
						    <ul>
						        <li onClick={this.click.bind(this)}><span className='iconfont icon-fanhui'></span></li>
						        <li>用户中心</li>
						        <li><NavLink to='/home'><span className='iconfont icon-shouye'></span></NavLink></li>
						    </ul>
						< /div>
			
		)
	}
}