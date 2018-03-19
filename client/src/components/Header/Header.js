import React from "react";
import {Jumbotron, Grid} from 'react-bootstrap';
import "./Header.css";

const Header = () => (
  <Grid>
    <Jumbotron>
      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> new york times search</strong></h1>
    </Jumbotron>
  </Grid>
);

export default Header;
