import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

import ReactDom from 'react-dom'

import './main.scss'
import App from './App.jsx'


ReactDom.render(
   <Router>
       <Route path='/' component={App} />
   </Router>,
    document.getElementById('app')
)
