import React from 'react';

let Header = props => {
  return (
    <header id="header">
      <div className="container">
        <nav>
          <a className="logo" href="#">
            <i className="fas fa-book-open" />{' '}
          </a>
          <ul className="categories">
            <li className="active">
              <a href="#">HTML</a>
            </li>
            <li>
              <a href="#">JavaScript</a>
            </li>
            <li>
              <a href="#">React</a>
            </li>
            <li>
              <a href="#">Node.JS</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
