import React from "react";
import {Grid, Jumbotron, Row, Col} from 'react-bootstrap';

const NoMatch = () => (
  <Grid>
    <Row>
      <Col md={12}>
        <Jumbotron>
          <h1 className="text-center">404 Page Not Found</h1>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
);

export default NoMatch;
