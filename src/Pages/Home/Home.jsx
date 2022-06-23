import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ava1, ava2, ava3, img11, img5, img7, img8, img9 } from "../../Assets";
import { Footer, Modal } from "../../Components";
import "./style.scss";

export default function Home() {
  const [dot, setDots] = useState([]);
  const [slide, setSlide] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const close = () => {
    setShow(false);
  };
  const image1 = useRef();
  const image2 = useRef();
  const image3 = useRef();
  const dot1 = useRef();
  const dot2 = useRef();
  const dot3 = useRef();
  // console.log(image2)
  useEffect(() => {
    setDots([dot1.current, dot2.current, dot3.current]);
    setSlide([image1.current, image2.current, image3.current]);
  }, []);

  return (
    <>
      <Modal click={show} toggle={close} />

      <div
        className="home bg-light"
        style={{ overflow: show ? "hidden" : "unset" }}
      >
        <div ref={image2} className="homeMain">
          <Container>
            <Row className="justify-between">
              <Col md={12}>
                <div className="middle__container text-center w-100">
                  <h1 className="main__header">
                    Welcome to Toltem Training Center
                  </h1>
                  <h1>
                    Where we teach you <br />
                    The in-demand Technology skill
                  </h1>
                  <p>
                    It's Evident that the world is revolving around technology
                    today and amazignly at a higher rate <br />
                    Grab this Offer now
                  </p>
                  <div className="w-100 link mt-2 d-flex align-items-center gap-3 justify-content-center m-auto">
                    <a
                      href="/#"
                      onClick={handleShow}
                      className="text-decoration-none bg-white rounded-pill"
                    >
                      Learn a skill
                    </a>
                    <div className="arrow mb-4">
                      <img src={img5} alt="img.jpg" className=" w-100" />
                    </div>
                  </div>
                  <div className="mt-3 avatar">
                    <div className="img1">
                      <img src={ava1} alt="img.jpg" className="w-100 " />
                    </div>
                    <div className="img1">
                      <img src={ava2} alt="img.jpg" className="w-100 " />
                    </div>
                    <div className="img1">
                      <img src={ava3} alt="img.jpg" className="w-100 " />
                    </div>
                    <div className="d-flex align-items-center gap-2 text-white ms-3">
                      <span className="me-2 skyBlue">100 +</span>
                      <span className="text-white">Professionals</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(2, 2, 29)"
            fill-opacity="1"
            d="M0,288L60,288C120,288,240,288,360,277.3C480,267,600,245,720,224C840,203,960,181,1080,192C1200,203,1320,245,1380,266.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className="homeSecond pt-5">
          <Container>
            <h1 className="main__header">About Us</h1>
            <div></div>
          </Container>

          <Container>
            <div className="border border-2 border-dark rounded py-5 px-4 px-lg-0 bg-white">
              <Row className="justify-content-between align-items-start gy-5 gy-md-0">
                <Col xs={12} md={5} className="text-center">
                  <div className="homeSecond__img mb-2 m-auto">
                    <img src={img7} alt="img.jpg" className="h-100 w-100" />
                  </div>
                  <h2>Mission</h2>
                  <div className="text-center w-100">
                    <small>
                      To build long term reltionship with our customers and
                      clients,and <br />
                      provide exceptional customer services by pursuring
                      business through innovation and
                      <br />
                      advanced technology.
                      <br /> choice anytime any day.
                    </small>
                  </div>
                </Col>
                <Col xs={12} md={5} className="text-center">
                  <div className="homeSecond__img mb-2 m-auto">
                    <img src={img8} alt="img.jpg" className="h-100 w-100" />
                  </div>
                  <h2>Vision</h2>
                  <div className="text-center w-100">
                    <small>
                      To Provide quality services and value that exceeds <br />{" "}
                      the expectation of our esteemed customers.
                    </small>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <h1 className="main__header">Why Choose Us?</h1>
          <div className="community mt-5">
            <div className="community__text text-center text-white">
              <h5>
                We have seasoned and exceptional tutors and mentors with <br />
                decades of vast experience in bespoke software development,
                system <br />
                integration, and deployment as well as well crafted curriculum
                and <br />
                training materials
              </h5>
              <div className="community__link mt-5">
                <a href="/#" onClick={handleShow} className="enrolBtn">
                  <button
                    type="button"
                    className="diff"
                    style={{ width: "50%", padding: "15px 0" }}
                  >
                    Start Learning !
                  </button>
                </a>
              </div>
            </div>
          </div>
          <Container>
            <div className="card-3 mt-5">
              <h1 className="main__header">Courses</h1>

              <Row
                xs={1}
                md={2}
                lg={3}
                className="justify-content-between align-items-start gy-4 gy-lg-0"
              >
                <Col className="h-100 align-self-stretch">
                  <div className="p-3 w-100 text-center rounded card-3__container">
                    <div className="card__image p-3">
                      <img src={img9} alt="img.jpg" className="h-100 w-100" />
                    </div>
                    <h6 className="mt-2">Training</h6>
                    <p>
                      Are you new to web development/design? We gat you covered{" "}
                      <br />
                      <br />
                      Enrol for our training In Web Development <br />
                      and web design using the latest technology,
                      <br />
                      <br></br>
                      Learn From the best,experienced and seasonal developers
                    </p>

                    <a href="/#" onClick={handleShow} className="enrolBtn">
                      <button type="button">Enrol Now</button>
                    </a>
                  </div>
                </Col>
                <Col className="align-self-stretch">
                  <div className="p-3 w-100 text-center rounded card-3__container card__container2">
                    <div className="card__image p-3">
                      <img src={img9} alt="img.jpg" className="h-100 w-100" />
                    </div>
                    <h6 className="mt-2">Mentorship</h6>
                    <p>
                      Already learnt Web development or Web design?
                      <br />
                      <br />
                      But still felt a void as to where to go next or what to do
                      <br />
                      Enrol for our Mentorship In Web Development <br />
                      and web design as we guide you in the right path with
                      hand-on experiences
                      <br />
                    </p>
                    <a href="/#" onClick={handleShow} className="enrolBtn">
                      <button type="button" className="diff">
                        Enrol Now
                      </button>
                    </a>
                  </div>
                </Col>
                <Col className="align-self-stretch">
                  <div className="p-3 w-100 h-100 text-center rounded card-3__container card__container3">
                    <div className="card__image p-3">
                      <img src={img9} alt="img.jpg" className="h-100 w-100" />
                    </div>
                    <h6 className="mt-2">Internship</h6>
                    <p>
                      Looking for where to observe your compulsory SIWES/IT?
                      <br />
                      <br />
                      We have the best tutor who will hold your hand
                      <br />
                      as you learn/unlearn/relearn Web development/Web Design{" "}
                      <br />
                      using latest technology
                    </p>
                    <a href="/#" onClick={handleShow} className="enrolBtn">
                      <button type="button">Enrol Now</button>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>

          <div className="team mt-5">
            <Container>
              <h1 className="text-center">OUR INESTIMABLE TEAM</h1>
              <div className="mt-4 team__container">
                <div ref={image1} className="team__img">
                  <img src={img11} alt="img.jpg" className="w-100" />
                  <h6 className="mt-4">Adedapo Tiamiyu</h6>
                  <p className="mt-1">Founder</p>
                </div>
                <div ref={image2} className="team__img">
                  <img src={img11} alt="img.jpg" className="w-100" />
                  <h6 className="mt-4">Adedapo Tiamiyu</h6>
                  <p className="mt-1">Founder</p>
                </div>
                <div ref={image3} className="team__img">
                  <img src={img11} alt="img.jpg" className="w-100" />
                  <h6 className="mt-4">Adedapo Tiamiyu</h6>
                  <p className="mt-1">Founder</p>
                </div>
                <div className="team__img">
                  <img src={img11} alt="img.jpg" className="w-100" />
                  <h6 className="mt-4">Adedapo Tiamiyu</h6>
                  <p className="mt-1">Founder</p>
                </div>
                <div className="team__img">
                  <img src={img11} alt="img.jpg" className="w-100" />
                  <h6 className="mt-4">Adedapo Tiamiyu</h6>
                  <p className="mt-1">Founder</p>
                </div>
                <div className="team__img">
                  <img src={img11} alt="img.jpg" className="w-100" />
                  <h6 className="mt-4">Adedapo Tiamiyu</h6>
                  <p className="mt-1">Founder</p>
                </div>
              </div>
              {/* The dots/circles */}
              <div className="mt-4" style={{ textAlign: "center" }}>
                <span ref={dot1} className="dot"></span>
                <span ref={dot2} className="dot"></span>
                <span ref={dot3} className="dot"></span>
              </div>
            </Container>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
