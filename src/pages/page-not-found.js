import React from 'react';
import Footer from '../component/footer/footer';
import Header from '../component/header/header';

let PageNotFound = props => {
  return (
    <div className="has-fixed-footer">
      <Header />
      <section id="page-not-found">
        <div className="container">
          <h3>Page not found</h3>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PageNotFound;
