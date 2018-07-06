import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default function(props) {
  return (
    <Grid fluid>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          {props.children}
        </Col>
      </Row>
    </Grid>
  );
}