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
  update = (book) => {
  }

  // to get books results on search page...
  handleQuery = (query) => {
    if(query) {
      BooksAPI.search(query).then(
        res => {
          if(res && res.length) {
            this.setState(() => ({
              queriedBooks: res
            }))
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

  // handleShelfChange = (queriedBooks) => {
  //   for(let queriedBook of queriedBooks) {
  //     for(let book of this.state.books) {
  //       queriedBook.shelf = book.id === queriedBook.id ? book.shelf : 'none';
  //     }
  //   }

  //   this.setState(() => ({
  //     queriedBooks: queriedBooks
  //   }))
  // }

  render() {

    const { books, queriedBooks } = this.state;

    return (
      <div className="app">

        {/* Home page... */}
        <Route path="/" exact render={() => (
          <Home
           books={books}
           updateShelf={this.update} />
        )}>
        </Route>

        {/* Search page... */}
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
