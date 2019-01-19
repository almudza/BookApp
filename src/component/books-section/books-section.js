import React from 'react';
import BooksContainer from './books-container';

let BooksSection = props => {
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
};

export default BooksSection;
