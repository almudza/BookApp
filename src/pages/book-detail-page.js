import React from 'react';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';

let BookDetailPage = props => {
  return (
    <div className="has-fixed-footer">
      <Header />
      <section id="book-detail">
        <div className="container">
          <div className="book-container">
            <div className="book-img">
              <img src="https://placehold.it/250x200" alt="" />
            </div>
            <div className="book-info">
              <div className="book-title">
                <h1>Book Title</h1>
              </div>
              <div className="book-author">
                <h3>Book Author</h3>
              </div>
              <div className="book-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore eveniet voluptatem dicta deleniti provident dolore,
                  fugiat ducimus, eum vero nostrum quisquam et obcaecati odio
                  illo optio magni commodi. Molestiae, perferendis.
                </p>
              </div>
            </div>
            <div className="book-review-container">
              <div className="book-stars">
                <i className="fas fa-star" /> <i className="fas fa-star" />
                <i className="fas fa-star" /> <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="book-review">(12)</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookDetailPage;
