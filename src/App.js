import React from 'react'
import * as BooksAPI from './BooksAPI'
import MyReads from './MyReads'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  setBooks = (books) => {
    this.setState({ books : books })
  }

  getBooks = () => BooksAPI.getAll().then(books => {
   this.setBooks(books)
  })

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(book => {
      console.log('updatebook')
      this.getBooks()
    })
  }

  componentDidMount() {
    this.getBooks()
  }

  render() {
    return (
      <div className="app">
        { this.state.showSearchPage ?
          <BookSearch /> :
          <MyReads
            onBookUpdate={this.updateBook}
            books={this.state.books}
          /> }
      </div>
    )
  }
}

export default BooksApp
