import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'
import './App.css'

class BooksApp extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
            <Route exact path="/" component={BookList} />
            <Route exact path="/search" component={BookSearch} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
