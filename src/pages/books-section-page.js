import React, { Component } from 'react';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';
import BooksSection from '../component/books-section/books-section';

class BooksSectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [1, 4, 5],
      isLoading: true
    };
  }
  render() {
    return (
      <div className="has-fixed-footer">
        <Header />
        {this.state.isLoading ? (
          <p>Is Loading</p>
        ) : (
          <BooksSection
            title={this.props.categoryName}
            books={this.state.books}
          />
        )}

        <Footer />
      </div>
    );
  }
}

BooksSectionPage.defaultProps = {
  categoryName: 'HTML'
};

export default BooksSectionPage;
