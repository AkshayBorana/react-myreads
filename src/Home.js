import React, { Component } from 'react';
import Books from './Books';

class Home extends Component {

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
                        <Books books={currentlyReading} />
                    )}
                </div>

                <div>
                    <h1>Want To Read</h1>
                    <hr />
                    {wantToRead && (
                        <Books books={wantToRead} />
                    )}
                </div>

                 <div>
                    <h1>Read</h1>
                    <hr />
                    {read && (
                        <Books books={read} />
                    )}
                </div>
            </div>

        )
    }
}

export default Home;