import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet';

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <script src="https://d3js.org/d3.v5.min.js"></script>
      <title>Michal Jez</title>
    </Helmet>
    <h1>Hi people</h1>
  </React.Fragment>
);

console.log(window.d3);

export default IndexPage
