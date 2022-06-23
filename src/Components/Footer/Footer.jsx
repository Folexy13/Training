import React from "react";
import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <div className="footer__container">
      <div className="first__footer py-5">
        <Container>
          <Row className="justify-between align-items-start">
            <Col md={4}>
              <div className="w-100 text-white">
                <h1>TOLTEM INT'L </h1>
                <p className="mt-4">
                  Toltem is considered as ne of the leading and fast growing
                  ICT, <br />
                  Engineering and Project Management Company in Nigeria
                  <br /> especially in southwest region, with offices
                  Abuja,Ekiti,Akure,
                  <br />
                  Owo, including Head office in Ado Ekiti-Ekiti State
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="w-100 text-white text-md-center">
                <h1>Company</h1>
                <p className="mt-4">
                  Locate us at: Peniel Plaza,Beside Ap Oil,Along Ilesha
                  GArage,Akure,Ondo state
                </p>
                <p className="mt-1">
                  <a href="tel:+9031421058">Call Us</a>
                </p>
                <p className="mt-1">
                  <a href="mailto:toltemintl@gmail.com">Send us a mail</a>
                </p>
              </div>
            </Col>
            <Col md={5}>
              <div className="w-100 text-white">
                <h1>Subscribe to our newsletter</h1>
                <div className="footer__form mt-4">
                  <form action="/">
                    <div className="form__container">
                      <input
                        type="text"
                        name="Email"
                        placeholder="Enter email address"
                        className="w-100 h-100"
                      />
                      <button
                        type="submit"
                        className="py-1 px-4 rounded-pill text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
