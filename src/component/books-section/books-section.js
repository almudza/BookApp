import React from 'react';
import BooksContainer from './books-container';

let BooksSection = props => {
  if (props.books.length === 0) {
    return (
      <section id="book-section">
        <div className="container">
          <div className="section-title">
            <h1>{'No Book is Found for ' + props.title}</h1>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="book-section">
        <div className="container">
          <div className="section-title">
            <h1>{props.title + ' Books'}</h1>
          </div>

          <BooksContainer books={props.books} />
        </div>
      </section>
    );
  }
};

export default BooksSection;
