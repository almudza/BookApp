import React from 'react';
import BookInfo from './book-info';
import BookReviewContainer from './book-review-container';

let BookContainer = props => {
  return (
    <div className="book-container">
      <div className="book-img">
        <img src="https://placehold.it/250x200" alt="" />
      </div>
      <BookInfo />
      <BookReviewContainer />
    </div>
  );
};

export default BookContainer;
