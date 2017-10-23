import React, { Component } from 'react'
import { shelves } from './../tools/BooksAPI'
import PropTypes from 'prop-types'

const styles = {
    book: (thumbnail) => ({ 
        width: 128, 
        height: 194,
        backgroundImage: `url("${thumbnail}")` 
    }),
    moving: {
        width: '100%', 
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)'
    }
}

class Book extends Component {

    static propTypes = {
        book: PropTypes.object,
        onShelfChange: PropTypes.func
    };

    state = {
        moving: false
    }

    onChange(event) {
        this.setState({ moving: true })
        try {
            this.props.onShelfChange(this.props.book, event.target.value)
        } catch (error) {
            this.setState({moving: false})
        }
    }

    renderOptions(book) {
        return (
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={this.onChange.bind(this)}>
                    <option value="" disabled>Move to...</option>
                    {shelves.map(shelf => (
                        <option key={shelf.id} value={shelf.id}>{shelf.label}</option>
                    ))}
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

    render() {
        const book = this.props.book
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={styles.book(book.imageLinks.thumbnail)}>
                        {this.state.moving && <div style={styles.moving} />}
                    </div>
                    {!this.state.moving && this.renderOptions(book)}
                </div>
                <div className="book-title">{`${book.title}`}</div>
                {book.authors &&
                    <div className="book-authors">
                        {book.authors.reduce((acc, name) => (`${acc}${name} `), '')}
                    </div>
                }
            </div>
        )
    }

}

export default Book