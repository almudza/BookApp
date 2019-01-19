import React from 'react';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';
import BooksSection from '../component/books-section/books-section';

let BooksSectionPage = props => {
  let books = [1, 2, 3, 4, 5];
  return (
    <div className="has-fixed-footer">
      <Header />

      <BooksSection title={props.categoryName} books={books} />

      <Footer />
    </div>
  );
};

BooksSectionPage.defaultProps = {
  categoryName: 'HTML'
};

export default BooksSectionPage;
