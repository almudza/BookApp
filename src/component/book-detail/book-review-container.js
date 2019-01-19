import React from 'react';

let BookReviewContainer = props => {
  return (
    <div className="book-review-container">
      <div className="book-stars">
        <i className="fas fa-star" /> <i className="fas fa-star" />
        <i className="fas fa-star" /> <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
      <div className="book-review">(12)</div>
    </div>
  );
};

export default BookReviewContainer;
