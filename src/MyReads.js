import React, { Component } from 'react'; // grab component property off react
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class MyReads extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookUpdate: PropTypes.func.isRequired
  }

  render() {

    const currentlyReading = this.props.books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = this.props.books.filter((book) => book.shelf === 'wantToRead')
    const read = this.props.books.filter((book) => book.shelf === 'read')

  	return (
  		<div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf
                books={ currentlyReading }
                shelf="currentlyReading"
                onBookUpdate={ this.props.onBookUpdate } />
              <Bookshelf
                books={ wantToRead }
                shelf="wantToRead"
                onBookUpdate={ this.props.onBookUpdate } />
              <Bookshelf
                books={ read }
                shelf="read"
                onBookUpdate={ this.props.onBookUpdate } />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
      </div>
  	)

  }
}

export default MyReads