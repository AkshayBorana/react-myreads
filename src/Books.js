import React, { Component } from 'react';

class Books extends Component {

    handleChange = (book, e) => {
        const shelf = e.target.value;
        this.props.changeShelf(book, shelf)
    }

    render() {
        const { book } = this.props;

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        { (book.imageLinks && book.imageLinks.thumbnail) ?
                            (<div className="book-cover"
                                style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                            </div>) :

                            (<div className="book-cover"
                                style={{ width: 128, height: 192, backgroundColor: 'black' }}>
                            </div>)

                        }
                        <div className="book-shelf-changer">
                            <select name={book.id}  value={book.shelf} onChange={(e) => this.handleChange(book, e)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}
                    </div>
                    { book.authors && book.authors.map(author =>
                        ( <div key={author} className="book-authors">{author}</div>)
                    )}
                </div>
            </li>
        )
    }
}

export default Books;