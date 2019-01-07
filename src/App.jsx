import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import asyncComponent from './router/asyncComponent'
const _import_com = file => asyncComponent(() => import(`com/${file}`))
export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <BrowserRouter>
        <div className='container'>
            <header>
            <Route exact  path="/" component={_import_com("HomeHeader")}/>
                <Route path='/home' component={_import_com("HomeHeader")} />
                <Route path='/kind' component={_import_com("KindHeader")} />
                <Route path='/cart' component={_import_com("CartHeader")} />
                <Route path='/user' component={_import_com("UserHeader")} />
                <Route path='/login' component={_import_com("LoginHeader")} />
                <Route path='/register' component={_import_com("RegisterHeader")} />
                 <Route path='/list' component={_import_com("ListHeader")} />
                 <Route path='/details' component={_import_com("DetailsHeader")} />
                 <Route path='/details1' component={_import_com("DetailsHeader1")} />
                 <Route path='/rank' component={_import_com("RankHeader")} />
                 <Route path='/ranklist' component={_import_com("RanklistHeader")} />
                 <Route path='/ranks' component={_import_com("RanksHeader")} />
                  <Route path='/search' component={_import_com("SearchHeader")} />
                  <Route path='/searchD' component={_import_com("SearchDHeader")} />
            </header>
            <div id='content'>
            <Route exact  path="/" component={_import_com("Home")} />
                <Route path='/home' component={_import_com("Home")} />
                <Route path='/kind' component={_import_com("Kind")} />
                <Route path='/cart' component={_import_com("Cart")} />
                <Route path='/user' component={_import_com("User")} />
                 <Route path='/login' component={_import_com("Login")} />
                <Route path='/register' component={_import_com("Register")} />
                <Route path='/list' component={_import_com("List")} />
                <Route path='/details' component={_import_com("Details")} />
                <Route path='/details1' component={_import_com("Details1")} />
                <Route path='/rank' component={_import_com("Rank")} />
                <Route path='/search' component={_import_com("Search")} />
                <Route path='/ranklist' component={_import_com("Ranklist")} />
                <Route path='/ranks' component={_import_com("Ranks")} />
                <Route path='/searchD' component={_import_com("SearchDetail")} />
            </div>
        </div>
        </BrowserRouter>
        )
    }
}
