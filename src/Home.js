import React, { Component } from 'react';
import Books from './Books';

class Home extends Component {

    handleChange = (updatedBookStatus) => {
        this.props.updateShelf(updatedBookStatus);
    }

    render() {

        const { books } = this.props;
        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead  = books.filter(book => book.shelf === 'wantToRead');
        const read  = books.filter(book => book.shelf === 'read');

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {/* Currently reading book shelf */}
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {currentlyReading &&
                                    currentlyReading.map(book => {
                                        return (
                                        <Books
                                         book={book}
                                         key={book.id}
                                         changeShelf={this.handleChange}
                                        />)
                                    })
                                }
                                </ol>
                            </div>
                        </div>

                        {/* Want to read book shelf */}
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {wantToRead &&
                                    wantToRead.map(book => {
                                        return (
                                        <Books
                                         book={book}
                                         key={book.id}
                                         changeShelf={this.handleChange}
                                        />)
                                    })
                                }
                                </ol>
                            </div>
                        </div>

                        {/* Read book shelf */}
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {read &&
                                    read.map(book => {
                                        return (
                                        <Books
                                         book={book}
                                         key={book.id}
                                         changeShelf={this.handleChange}
                                        />)
                                    })
                                }
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;