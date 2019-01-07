import React from 'react';
import { NavLink } from 'react-router-dom'

export default class SearchDHeader extends React.Component {
constructor(props){
    super(props);
    this.state = {
    	name:''
    }
   }
componentDidMount(){
	var that = this;
        console.log(this.props.location.pathname.split('/')[6])
        var name = this.props.location.pathname.split('/')[6]
        that.setState({
        	name:name
        })
}
 click(){
   window.history.go(-1)
  }
    

		render() {
			var name = this.state.name
				return(

						
						<div className = 'header' > 
						    <ul>
						        <li onClick={this.click.bind(this)}><span className='iconfont icon-fanhui'></span></li>
						        <li>{name}</li>
						        <li><NavLink to='/home'><span className='iconfont icon-shouye'></span></NavLink></li>
						    </ul>
						< /div>
			
		)
	}
}