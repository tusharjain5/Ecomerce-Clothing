import React from 'react';
import './page.css';
import { Games } from './Games'

export const Pagenotfound = () => {
  return (
    <div className="page-not-found">
      <div className="not-found-content">
      <br />
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page Not Found</h2>
        <p className="error-description">
          It looks like the page you are looking for doesn't exist. You might have mistyped the URL or the page has been moved.
        </p>
        <a href="/" className="home-button">Go to Homepage</a>
      </div>
     <Games/>
    <br />
    <br />
    </div>
  );
};
