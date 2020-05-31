import React, { Component } from 'react';
import Books from './Books';

class Home extends Component {

    handleChange = (book) => {
        this.props.updateShelf(book);
    }

    render() {

        const { books } = this.props;
        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead  = books.filter(book => book.shelf === 'wantToRead');
        const read  = books.filter(book => book.shelf === 'read');

        return(
            <div>
                <div>
                    <h1>Currently Reading</h1>
                    <hr />
                    {currentlyReading && (
                        <Books
                         books={currentlyReading}
                         changeShelf={this.handleChange} />
                    )}
                </div>

                <div>
                    <h1>Want To Read</h1>
                    <hr />
                    {wantToRead && (
                        <Books
                         books={wantToRead}
                         changeShelf={this.handleChange} />
                    )}
                </div>

                 <div>
                    <h1>Read</h1>
                    <hr />
                    {read && (
                        <Books
                         books={read}
                         changeShelf={this.handleChange} />
                    )}
                </div>
            </div>

        )
    }
}

export default Home;