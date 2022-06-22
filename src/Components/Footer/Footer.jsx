import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
  return (
    <div className='footer__container'>
        <div className="first__footer py-5">
            <Container>
                <Row className='justify-between align-items-start'>
                    <Col md={4}>
                        <div className="w-100 text-white">
                            <h1>BNW WORLD</h1>
                            <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Morbi est turpis adipiscing nunc, eget.<br/> Condimentum mattis sed enim, ultrices nisi, ultrices. Viverra morbi aliquam amet, eleifend risus <br/>mauris. Rhoncus in mattis commodo pharetra a<br/> massa, arcu non.
                            </p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="w-100 text-white text-md-center">
                            <h1>Company</h1>
                            <p className="mt-4">
                            Home
                            </p>
                            <p className="mt-1">
                            About
                            </p>
                            <p className="mt-1">
                            Contact Us
                            </p>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="w-100 text-white">
                            <h1>Subscribe to our newsletter</h1>
                            <div className="footer__form mt-4">
                                <form action="/">
                                    <div className="form__container">
                                        <input type="text" name='Email' placeholder='Enter email address' className='w-100 h-100' />
                                        <button type='submit' className='py-1 px-4 rounded-pill text-white'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}
