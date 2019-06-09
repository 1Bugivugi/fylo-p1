import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Description from './Description';
import SignUp from './SignUp';
import '../css/Wrapper.css';

class Wrapper extends Component {

  state = {
    style: {padding: '0px'}
  }

  render() {
    return (
      <Container>
        <Row>
          <Col style={this.state.style}>
            <Header
              style={this.state.style}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Description />
          </Col>
        </Row>
        <Row>
          <Col>
            <SignUp />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Wrapper;
