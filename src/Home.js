import React, { Component } from 'react';
import Books from './Books';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {

        const shelves = [
            { title: 'Want To Read', key: 'wantToRead'},
            { title: 'Currently Reading', key: 'currentlyReading'},
            { title: 'Read', key: 'read'}
        ]

        const { books, updateShelf } = this.props;

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {
                            shelves.map((shelfBook, i) => {
                                const shelvesBooks = books.filter(book => book.shelf === shelfBook.key);

                                    return (

                                        <div className="bookshelf" key={i}>
                                            <h2 className="bookshelf-title">{shelfBook.title}</h2>
                                            <div className="bookshelf-books">
                                                <ol className="books-grid">
                                                    {   shelvesBooks.map(book => {
                                                        return (
                                                            <Books
                                                            book={book}
                                                            key={book.id}
                                                            changeShelf={updateShelf}
                                                            />
                                                        )
                                                    })
                                                    }
                                                </ol>
                                            </div>
                                        </div>
                                    )
                            })
                        }

                     <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Home;