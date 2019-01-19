import React from 'react';

let BookInfo = props => {
  return (
    <div className="book-info">
      <div className="book-title">
        <h1>Book Title</h1>
      </div>
      <div className="book-author">
        <h3>Book Author</h3>
      </div>
      <div className="book-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eveniet voluptatem dicta deleniti provident dolore, fugiat ducimus,
          eum vero nostrum quisquam et obcaecati odio illo optio magni commodi.
          Molestiae, perferendis.
        </p>
      </div>
    </div>
  );
};

export default BookInfo;
