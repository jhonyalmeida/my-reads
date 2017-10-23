import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css'

class BooksApp extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
            <Route exact path="/" component={BookList} />
            <Route exact path="/search" component={BookSearch} />
            <ToastContainer 
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                pauseOnHover
            />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
