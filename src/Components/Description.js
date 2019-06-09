import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Description.css';

class Description extends Component {

  state = {
    width: {width: '295px'},
    weight1: {fontWeight: '800'}
  }

  render() {
    return (
      <Container className='descContainer' style={this.state.width}>
        <Row>
          <Col>
            <div className='descColH'>
              <h4 style={this.state.weight1}>
                All your files in one secure location, accessible anywhere.
              </h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='descColp'>
              <p>
                Fylo stores all your most important files in one secure location.
  Access them wherever you need, share and collaborate with friends,
  family and co-workers.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Description;
