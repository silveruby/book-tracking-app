import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Bookgrid from './Bookgrid'

class BookSearch extends Component {

  static propTypes = {
    onShelfChange: PropTypes.func.isRequired,
    myReadBooks: PropTypes.array.isRequired
  }

  state = {
    books: []
  }

  updateQuery = (query) =>{
    query ? BooksAPI.search(query).then((books) => {
        books.error === "empty query" ? this.setState({books: []}) : this.setState({books: books})
    }) : this.setState({books: []})
  }

  render() {
    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                  onChange={(event) => this.updateQuery(event.target.value)}
                  type="text"
                  placeholder="Search by title or author" />

              </div>
            </div>
            <div className="search-books-results">
              <Bookgrid
                books={this.state.books}
                myReadBooks={this.props.myReadBooks}
                onShelfChange={this.props.onShelfChange} />
            </div>
        </div>
    )

  }
}

export default BookSearch