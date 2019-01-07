import React from 'react';
import { NavLink } from 'react-router-dom'
import "./../scss/Home.scss"

export default class ListHeader extends React.Component {
constructor(props){
    super(props);
    this.state={
    	title:''
    }
   }
componentDidMount(){
	var that = this;
          console.log(this.props.location.pathname)
          var title = this.props.location.pathname.split('/')[2]
          console.log(title)
		  that.setState({
		  	title:title
		  })
}
 click(){
   window.history.go(-1)
  }
    

		render() {
			var title = this.state.title;
				return(

						
						<div className = 'header' > 
						    <ul>
						        <li onClick={this.click.bind(this)}><span className='iconfont icon-fanhui'></span></li>
						        <li>{title}</li>
						        <li><NavLink to='/home'><span className='iconfont icon-shouye'></span></NavLink></li>
						    </ul>
						< /div>
			
		)
	}
}