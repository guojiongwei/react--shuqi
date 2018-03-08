import React from 'react';
import { NavLink } from 'react-router-dom'
import "./../scss/Home.scss"

export default class RanlistkHeader extends React.Component {
constructor(props){
    super(props);
    this.state = {
    	title:''
    }
   }
componentWillMount(){
console.log(this.props.location.pathname.split('/')[3])
var title = this.props.location.pathname.split('/')[3]
var that = this.setState({
	title:title
})
}
 click(){
   window.history.go(-1)
  }
    

		render() {
			var title = this.state.title
			console.log(title)
				return(

						
						<div className = 'header' > 
						    <ul>
						        <li onClick={this.click.bind(this)}><span className='iconfont icon-fanhui'></span></li>
						        <li style={{fontSize:'0.16rem'}}>{title}</li>
						        <li><NavLink to='/home'><span className='iconfont icon-shouye'></span></NavLink></li>
						    </ul>
						< /div>
			
		)
	}
}