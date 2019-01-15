import React from 'react';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';

let BooksSection = props => {
  return (
    <div class="has-fixed-footer">
      <Header />
      <section id="book-section">
        <div className="container">
          <div className="section-title">
            <h1>Html Books</h1>
          </div>
          <div className="books-container">
            <div className="book">
              <div className="book-image">
                <img src="https://placehold.it/250x200" alt="" />
              </div>
              <div className="book-info">
                <div className="book-title">
                  <h3>Book Title</h3>
                </div>
                <div className="book-author">
                  <p>
                    By <em>Author</em>
                  </p>
                </div>
                <div className="book-call-to-action">
                  <button className="btn btn-highlight">Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
              <div className="book-image">
                <img src="https://placehold.it/250x200" alt="" />
              </div>
              <div className="book-info">
                <div className="book-title">
                  <h3>Book Title</h3>
                </div>
                <div className="book-author">
                  <p>
                    By <em>Author</em>
                  </p>
                </div>
                <div className="book-call-to-action">
                  <button className="btn btn-highlight">Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
              <div className="book-image">
                <img src="https://placehold.it/250x200" alt="" />
              </div>
              <div className="book-info">
                <div className="book-title">
                  <h3>Book Title</h3>
                </div>
                <div className="book-author">
                  <p>
                    By <em>Author</em>
                  </p>
                </div>
                <div className="book-call-to-action">
                  <button className="btn btn-highlight">Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
              <div className="book-image">
                <img src="https://placehold.it/250x200" alt="" />
              </div>
              <div className="book-info">
                <div className="book-title">
                  <h3>Book Title</h3>
                </div>
                <div className="book-author">
                  <p>
                    By <em>Author</em>
                  </p>
                </div>
                <div className="book-call-to-action">
                  <button className="btn btn-highlight">Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
              <div className="book-image">
                <img src="https://placehold.it/250x200" alt="" />
              </div>
              <div className="book-info">
                <div className="book-title">
                  <h3>Book Title</h3>
                </div>
                <div className="book-author">
                  <p>
                    By <em>Author</em>
                  </p>
                </div>
                <div className="book-call-to-action">
                  <button className="btn btn-highlight">Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
              <div className="book-image">
                <img src="https://placehold.it/250x200" alt="" />
              </div>
              <div className="book-info">
                <div className="book-title">
                  <h3>Book Title</h3>
                </div>
                <div className="book-author">
                  <p>
                    By <em>Author</em>
                  </p>
                </div>
                <div className="book-call-to-action">
                  <button className="btn btn-highlight">Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BooksSection;
