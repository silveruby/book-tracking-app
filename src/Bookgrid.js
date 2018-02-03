import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

class Bookgrid extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    myReadBooks: PropTypes.array
  }

  getShelf = (book) => {
    const bookInShelf = this.props.myReadBooks ?
        this.props.myReadBooks.find(mybook => {return mybook.id === book.id }) : book
    return bookInShelf ? bookInShelf.shelf : 'none'
  }

  getBackgroundImage = (book) => {
    return book.imageLinks ? book.imageLinks.smallThumbnail : "http://via.placeholder.com/128x193?text=No%20Cover"
  }

  render(){
  	return (
      <ol className="books-grid">
        { this.props.books.sort(sortBy('title')).map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${this.getBackgroundImage(book)} )` }}></div>
                <div className="book-shelf-changer">
                  <select defaultValue={ this.getShelf(book) }
                          onChange={ (event) => this.props.onShelfChange(book, event.target.value) }>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
              </div>
              </div>
              <div className="book-title">{ book.title ? book.title : "Unknown" }</div>
              <div className="book-authors">{ book.authors ? book.authors.join(', ') : "Anonymous" }</div>
            </div>
          </li>
        ))}
      </ol>
  	)
  }
}

export default Bookgrid