import React, { Component } from 'react'
import Book from './Book'

export default (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.books.map(book => (
                    <li key={book.id}>
                        <Book book={book} onShelfChange={props.onShelfChange} />
                    </li>
                ))}
            </ol>
        </div>
    </div>
)
