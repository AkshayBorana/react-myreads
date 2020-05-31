import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {

    state = {
        searchQuery: ''
    }

    handleQuerySearch = (e) => {
        const {value} = e.target;
        const search = value.trim();
        BooksAPI.search(search).then(
            (books) => {

                this.setState(() => ({
                    searchQuery: search
                }))

                const searchResults = books.length ?  books.filter(book => {
                    return (
                            book.title.toLowerCase().includes(search.toLowerCase()) ||
                            book.authors.toString().toLowerCase().includes(search.toLowerCase())
                        );
                }) : [];
            },
            (err) => {
                console.log(err);
            }
        )

    }

    render() {
        const { books }  = this.props;
        const { searchQuery } = this.state;

        // const searchResults = searchQuery === '' ? books : books.filter(book => {
        //     return(
        //         book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        //         book.authors.toString().toLowerCase().includes(searchQuery.toLowerCase())
        //     );
        // })

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.searchQuery}
                            onChange={this.handleQuerySearch}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {/* {searchResults && (<Books books={searchResults} />)} */}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;