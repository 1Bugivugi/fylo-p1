import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Header.css'
import illustration from '../img/illustration-main.svg';
import logo1 from '../img/logo1.svg';
import logo2 from '../img/logo2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col style={this.props.style}>
            <div className='header'>
              <Row className='contact'>
                <Col xs={4}>
                  <img src={logo2} className='logo'></img>
                </Col>
                <Col xs={{span: 6, offset: 2}} className='icons'>
                  <a href='https://www.twitter.com'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                  <a href='https://www.facebook.com'><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                  <a href='mailto:***@gmail.com'><FontAwesomeIcon icon='envelope' /></a>
                </Col>
              </Row>
              <img src={illustration} className='illustration'></img>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Header;
