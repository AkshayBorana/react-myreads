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

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState(() => ({
        books: books
      }))
    )
  }

  // invoked when a book is moved from one shelf to another.
  update = (book) => {
  }

  handleQuery = (query) => {
    if(query) {
      BooksAPI.search(query).then(
        res => {
          console.log(res);
          if(res && res.length) {
            this.handleShelfChange(res)
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

  handleShelfChange = (queriedBooks) => {
    for(let queriedBook of queriedBooks) {
      for(let book of this.state.books) {
        queriedBook.shelf = book.id === queriedBook.id ? book.shelf : 'none';
      }
    }

    this.setState(() => ({
      queriedBooks: queriedBooks
    }))
  }

  render() {

    const { books, queriedBooks } = this.state;

    return (
      <div className="app">

        <Route path="/" exact render={() => (
          <Home
           books={books}
           updateShelf={this.update} />
        )}></Route>

        <Route path="/search" render={() => (
          <SearchBooks
           queriedBooks={queriedBooks}
           handleQuery={this.handleQuery}
           updateShelf={this.update}/>
        )}></Route>

      </div>
    )
  }
}

export default BooksApp
