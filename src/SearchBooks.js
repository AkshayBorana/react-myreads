import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {

    state = {
        searchQuery: '',
    }

    handleSearchQuery = (e) => {
        const query = e.target.value.trim();

        this.setState((prevState) => {
            return {searchQuery: query}
        }, () => {
            if(this.state.searchQuery.length > 0) {
                this.props.handleQuery(this.state.searchQuery);
            }
        })
    }

    changeShelf = (book, shelf) => {
        this.props.updateShelf(book, shelf);
    }

    render() {
        const { queriedBooks }  = this.props;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.searchQuery}
                            onChange={this.handleSearchQuery}/>
                    </div>
                </div>

                {/* displaying search results */}
                <div className="search-books-results">
                    <div className="bookshelf">
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {
                                        queriedBooks && queriedBooks.map(queriedbook => {
                                        return (
                                            <Books
                                             book={queriedbook}
                                             key={queriedbook.id}
                                             changeShelf={this.changeShelf}
                                            />)
                                        })
                                    }
                                </ol>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBooks;