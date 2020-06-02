import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import Home from './Home';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState(() => ({
        books: books
      }))
    )
  }

  handleChange = (book) => {
  }

  render() {

    const { books } = this.state;

    return (
      <div className="app">

        <Route path="/" exact render={() => (
          <Home
           books={books}
           updateShelf={this.handleChange} />
        )}></Route>

        <Route path="/search" render={() => (
          <SearchBooks books={books}/>
        )}></Route>

      </div>
    )
  }
}

export default BooksApp
