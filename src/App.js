import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import Home from './Home';

class BooksApp extends React.Component {

  state = {
    books: [],
    queriedBooks: []
  }

  // Initial call to get all books on Home page or shelf...
  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState(() => ({
        books: books
      }))
    )
  }

  // invoked when a book is moved from one shelf to another.
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((res) => {
        if(res) {
          book.shelf = shelf;
          this.setState((prevState) => ({
            books: prevState.books.filter(b => {
              return b.id !== book.id;
            }).concat(book)
          }))
        }
    })
  }

  // to get books results on search page...
  handleQuery = (query) => {
    if(query) {
      BooksAPI.search(query).then(
        res => {
          if(res && res.length) {
            this.handleShelfChange(res);
          } else {
            this.setState(() => ({
              queriedBooks: []
            }))
          }
        }
      )
    }else {
      this.setState(() => ({
        queriedBooks: []
      }))
    }
  }

  // To match books shelf both on home and search page...
  handleShelfChange = (searchedBooks) => {
    this.setState((prevState) => ({
      queriedBooks: searchedBooks.map(searchedBook => {
        for(let book of this.state.books) {
          if (searchedBook.id === book.id) {
            searchedBook.shelf = book.shelf
            break;
          } else {
            searchedBook.shelf = 'none'
          }
        }
        return searchedBook;
      })
    }))
  }


  render() {

    const { books, queriedBooks } = this.state;

    return (
      <div className="app">

        {/* Home page... */}
        <Route path="/" exact render={() => (
          <Home
           books={books}
           updateShelf={this.updateShelf} />
        )}>
        </Route>

        {/* Search page... */}
        <Route path="/search" render={() => (
          <SearchBooks
           queriedBooks={queriedBooks}
           handleQuery={this.handleQuery}
           updateShelf={this.updateShelf}/>
        )}></Route>

      </div>
    )
  }
}

export default BooksApp
