import React from "react";
import { Jumbotron, Grid, Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./Header.css";

const Header = () => (
  <Grid>
    <Jumbotron className="header">
      <h1><strong><i className="fa fa-newspaper-o"></i> new york times search</strong></h1>
      <ButtonToolbar>
        <LinkContainer to="/search">
          <Button bsStyle="default" bsSize="small">
            <i className="fa fa-search"></i> article search
          </Button>
        </LinkContainer>
        <LinkContainer to="/articles">
          <Button bsStyle="default" bsSize="small">
            <i className="fa fa-floppy-o"></i> saved articles
          </Button>
        </LinkContainer>
      </ButtonToolbar>
    </Jumbotron>
  </Grid>
);

export default Header;
