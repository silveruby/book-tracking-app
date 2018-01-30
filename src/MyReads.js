import React, { Component } from 'react'; // grab component property off react
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookgrid from './Bookgrid'

class MyReads extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <Bookgrid
                  books={currentlyReading}
                  onShelfChange={this.props.onShelfChange} />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <Bookgrid
                  books={wantToRead}
                  onShelfChange={this.props.onShelfChange} />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <Bookgrid
                  books={read}
                  onShelfChange={this.props.onShelfChange} />
              </div>
            </div>
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