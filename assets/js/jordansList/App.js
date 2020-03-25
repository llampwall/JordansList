import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './includes/Header.js'
import Home from './pages/Home.js'
// import Listings from './pages/Listings.js'
import Category from './pages/Category.js'
import Item from './pages/Item.js'

export default class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Router>
        <div>
          <Route path="/:city" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/:city" component={Home} />
          <Route exact path="/:city/:cat" component={Category} />
          <Route exact path="/:city/:cat/:listings" component={Category} />
          <Route exact path="/:city/:cat/:listings/:item" component={Item} />
        </div>
      </Router>
    )
  }
}
