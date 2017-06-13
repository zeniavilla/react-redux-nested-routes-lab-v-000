import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PetsPage from '../containers/PetsPage';

export default (props) => {
  return (
    <Router>
      <div>
        <Link to="pets">See All The Pets!</Link>
      </div>
    </Router>
  )
};
