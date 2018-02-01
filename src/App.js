import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MyReads from './MyReads'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  setBooks = (books) => {
    this.setState({ books : books })
  }

  getBooks = () => BooksAPI.getAll().then(books => {
   this.setBooks(books)
  })

  updateShelf = (book, shelf) => {
    console.log(shelf)
    BooksAPI.update(book, shelf).then(book => {
      this.getBooks()
    })
  }

  componentDidMount() {
    this.getBooks()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyReads
            onShelfChange={this.updateShelf}
            myReadBooks={this.state.books} />
        )}/>

        <Route exact path='/search' render={() => (
          <BookSearch
            onShelfChange={this.updateShelf}
            myReadBooks={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
