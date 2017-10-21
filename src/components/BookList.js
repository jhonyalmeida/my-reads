import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import * as Books from './../tools/BooksAPI'

class BookList extends Component {

    constructor(props) {
        super(props)
        this.changeShelf = this.changeShelf.bind(this)
        this.state = Books.shelves.reduce(
            (prev, cur) => Object.assign(prev, {[cur.id]: []}), {})
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks() {
        Books.getAll().then(books => {
            this.setState(
                Books.shelves.reduce(
                    (prev, cur) => Object.assign(prev, {
                        [cur.id]: books.filter(b => b.shelf === cur.id)
                    })
                , {})
            )
        })
    }

    changeShelf(book, shelf) {
        Books.update(book, shelf)
            .then(res => this.loadBooks())
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Books.shelves.map(
                            shelf => <Shelf title={shelf.label} key={shelf.id}
                                        books={this.state[shelf.id]} 
                                        onShelfChange={this.changeShelf} />
                        )}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }

}

export default BookList