import React, { Component } from 'react'; // grab component property off react
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

class Bookgrid extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    onBookUpdate: PropTypes.func.isRequired
  }

  render(){
  	return (
      <ol className="books-grid">
        { this.props.books.sort(sortBy('title')).map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${book.imageLinks.smallThumbnail} )` }}></div>
                <div className="book-shelf-changer">
                  <select defaultValue={ book.shelf }>
                          onChange={ (event) => this.props.onUpdate(book, event.target.value) }>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
              </div>
              </div>
              <div className="book-title">{ book.title }</div>
              <div className="book-authors">{ book.authors.join(', ') }</div>
            </div>
          </li>
        ))}
      </ol>
  	)
  }
}

export default Bookgrid