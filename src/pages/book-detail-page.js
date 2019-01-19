import React from 'react';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';
import BookDetail from '../component/book-detail/book-detail';

let BookDetailPage = props => {
  return (
    <div className="has-fixed-footer">
      <Header />
      <BookDetail />
      <Footer />
    </div>
  );
};

export default BookDetailPage;
