import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/SignUp.css';

class SignUp extends Component {

  state = {
    width: {width: '295px'}
  }

  render() {
    return (
      <Container className='signUpGrp' style={this.state.width}>
        <Row>
          <Col>
            <div>
              <Row>
                <Col>
                  <p className='callToA'>Sign up for early access</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p><input></input></p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p><Button variant='success' className='colorMe1'>Sign Up</Button></p>
                </Col>
              </Row>
              <Row>
                <Col xs={{span: 5, offset: 8}}>
                  <p className='pp'><a href='#' className='pp'>Privacy Policy</a></p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignUp;
