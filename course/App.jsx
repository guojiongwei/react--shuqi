import React from 'react'

import {Route} from 'react-router-dom'

import Home from './com/Home.jsx'
import HomeHeader from './com/HomeHeader.jsx'
import Kind from './com/Kind.jsx'
import KindHeader from './com/KindHeader.jsx'
import Cart from './com/Cart.jsx'
import CartHeader from './com/CartHeader.jsx'
import User from './com/User.jsx'
import UserHeader from './com/UserHeader.jsx'
import Login from './com/Login.jsx'
import LoginHeader from './com/LoginHeader.jsx'
import Register from './com/Register.jsx'
import RegisterHeader from './com/RegisterHeader.jsx'
import List from './com/List.jsx'
import ListHeader from './com/ListHeader.jsx'
import Details from './com/Details.jsx'
import DetailsHeader from './com/DetailsHeader.jsx'

import Details1 from './com/Details1.jsx'
import DetailsHeader1 from './com/DetailsHeader1.jsx'

import  Rank from './com/Rank.jsx'
import RankHeader from './com/RankHeader.jsx'
import Search from './com/Search.jsx'
import SearchHeader from './com/SearchHeader.jsx'
import SearchDHeader from './com/SearchDHeader.jsx'
import Ranklist from './com/Ranklist.jsx'
import RanklistHeader from './com/RanklistHeader.jsx'
import Ranks from './com/Ranks.jsx'
import RanksHeader from './com/RanksHeader.jsx'
import SearchDetail from './com/SearchDetail.jsx'


export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className='container'>
            <header>
            <Route exact  path="/" component = {HomeHeader}/>
                <Route path='/home' component={HomeHeader} />
                <Route path='/kind' component={KindHeader} />
                <Route path='/cart' component={CartHeader} />
                <Route path='/user' component={UserHeader} />
                <Route path='/login' component={LoginHeader} />
                <Route path='/register' component={RegisterHeader} />
                 <Route path='/list' component={ListHeader} />
                 <Route path='/details' component={DetailsHeader} />
                 <Route path='/details1' component={DetailsHeader1} />
                 <Route path='/rank' component={RankHeader} />
                 <Route path='/ranklist' component={RanklistHeader} />
                 <Route path='/ranks' component={RanksHeader} />
                  <Route path='/search' component={SearchHeader} />
                  <Route path='/searchD' component={SearchDHeader} />
            </header>
            <div id='content'>
            <Route exact  path="/" component = {Home}/>
                <Route path='/home' component={Home} />
                <Route path='/kind' component={Kind} />
                <Route path='/cart' component={Cart} />
                <Route path='/user' component={User} />
                 <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/list' component={List} />
                <Route path='/details' component={Details} />
                <Route path='/details1' component={Details1} />
                <Route path='/rank' component={Rank} />
                <Route path='/search' component={Search} />
                <Route path='/ranklist' component={Ranklist} />
                <Route path='/ranks' component={Ranks} />
                <Route path='/searchD' component={SearchDetail} />
            </div>
           
        </div>
        )
    }
}
