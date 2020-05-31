import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class Books extends Component {

    handleChange = (e) => {
        const { value, name } = e.target;

        BooksAPI.update({ id:name }, value).then(res => this.props.changeShelf(res));
    }

    render() {
        const { books } = this.props;

        return(
            <ol className="books-grid">
                {
                    books.map(book => {
                    return(
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select name={book.id}  value={book.shelf} onChange={this.handleChange}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                <div className="book-title">{book.title}</div>
                                {book.authors.map(author =>
                                    ( <div key={author} className="book-authors">{author}</div>)
                                )}
                            </div>
                        </li>
                    )
                    })
                }
            </ol>
        )
    }
}


export default Books;