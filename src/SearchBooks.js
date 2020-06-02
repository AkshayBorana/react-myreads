import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {

    state = {
        searchQuery: '',
        searchResults: [],
        isResultesPresent: null
    }

    handleQuerySearch = (e) => {
        const {value} = e.target;
        const search = value.trim();

        this.setState({searchQuery: search})
        console.log(this.state.searchQuery);

        if(this.state.searchQuery) {
            BooksAPI.search(this.state.searchQuery).then(
                res => {
                    if(res && res.length){
                        this.setState(() => ({
                            searchResults: res
                        }))
                    } else {
                        this.setState(() => ({
                            searchResults: []
                        }))
                    }
                }
            )
        }else {
            this.setState(() => ({
                searchResults: []
            }))
        }
    }

    render() {
        const { searchResults }  = this.state;

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
                       {searchResults.length > 0 && (<Books books={searchResults} />)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;