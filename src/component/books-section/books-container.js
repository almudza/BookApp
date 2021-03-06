import React from 'react';
import Book from './book';

let BooksContainer = props => {
  return (
    <div className="books-container">
      {/* <Book /> */}
      {props.books.map((e, i) => {
        return <Book key={i} />;
      })}
    </div>
  );
};

export default BooksContainer;
