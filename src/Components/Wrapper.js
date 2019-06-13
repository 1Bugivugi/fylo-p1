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
    style: {padding: '0px'},
    height: {height: '100%'}
  }

  render() {
    return (
      <Container className='wrapper' style={this.state.height}>
        <Row>
          <div>
          <Col style={this.state.style}>
            <Header
              style={this.state.style}
            />
          </Col>
          </div>
          <div className='block1'>
            <Col className='respDesc'>
              <Description />
            </Col>
            <Col className='respSignUp'>
              <SignUp />
            </Col>
          </div>
        </Row>
      </Container>
    )
  }
}

export default Wrapper;
