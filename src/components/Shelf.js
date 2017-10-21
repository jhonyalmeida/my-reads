import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

    render() {
        const title = this.props.title
        const books = this.props.books
        const onShelfChange = this.props.onShelfChange
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.id}>
                                <Book book={book} onShelfChange={onShelfChange} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf
