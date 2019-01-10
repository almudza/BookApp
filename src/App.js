import React, { Component } from 'react';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import BooksSection from './pages/books-section';
import BookDetail from './pages/book-detail';
import PageNotFound from './pages/page-not-found';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <BooksSection />

        <BookDetail />

        <PageNotFound />

        <Footer />
      </div>
    );
  }
}

export default App;
