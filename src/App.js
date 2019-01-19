import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageNotFound from './pages/page-not-found';
import BooksSectionPage from './pages/books-section-page';
import BookDetailPage from './pages/book-detail-page';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksSectionPage} />
          <Route
            path="/books/category/:categoryName"
            exact
            render={props => {
              let { categoryName } = props.match.params;
              return <BooksSectionPage categoryName={categoryName} />;
            }}
          />
          <Route path="/book/:bookID" component={BookDetailPage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
