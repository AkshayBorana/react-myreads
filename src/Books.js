import React, { Component } from 'react';

class Books extends Component {

    render() {
        const { books } = this.props;

        return(
            books.map(book => {
              return(
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select>
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
        )
    }
}


export default Books;