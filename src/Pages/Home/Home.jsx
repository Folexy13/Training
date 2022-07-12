import React, { useRef } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import {
  ava1,
  ava2,
  ava3,
  img5,
  img7,
  img8,
  img9,
  logo,
  training,
  training2,
} from "../../Assets";
import { Accordion, Footer } from "../../Components";
import { ROUTES } from "../../Routes";
import "./style.scss";

export default function Home() {
  const image2 = useRef();

  return (
    <>
      {/* <Loader2 /> */}
      <div className="home bg-light">
        <div ref={image2} className="homeMain">
          <div className="flex">
            <img src={logo} alt="" width={150} style={{ marginLeft: "30px" }} />

            <a
              href="https://res.cloudinary.com/folajimidev/image/upload/v1656262328/pdf/training_ctui9r.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button>Download Brochure</button>
            </a>
          </div>
          <Carousel variant="dark" fade>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={training} alt="First slide" />
              <Carousel.Caption>
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
                    Learn Web Development/Design For free at our Hub <br /> Grab
                    this Offer now.
                  </p>
                  <div className="w-100 link mt-2 d-flex align-items-center gap-3 justify-content-center m-auto">
                    <a
                      href={ROUTES.ABOUT}
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
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={training2}
                alt="Second slide"
              />

              <Carousel.Caption>
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
                    Learn Web Development/Design For free at our Hub <br /> Grab
                    this Offer now.
                  </p>
                  <div className="w-100 link mt-2 d-flex align-items-center gap-3 justify-content-center m-auto">
                    <a
                      href={ROUTES.ABOUT}
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
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={training} alt="Third slide" />

              <Carousel.Caption>
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
                    Learn Web Development/Design For free at our Hub <br /> Grab
                    this Offer now.
                  </p>
                  <div className="w-100 link mt-2 d-flex align-items-center gap-3 justify-content-center m-auto">
                    <a
                      href={ROUTES.ABOUT}
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
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Container>
            <Row className="justify-between">
              <Col md={12}></Col>
            </Row>
          </Container>
        </div>
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
                      To build long term reltionship with our customers <br />{" "}
                      and clients,and provide exceptional customer <br />{" "}
                      services by pursuring business through innovation and
                      <br />
                      advanced technology. choice anytime any day.
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
                <a href={ROUTES.ABOUT} className="enrolBtn">
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
                      Enrol for our training in Web Development <br />
                      and web design using the latest technology
                      <br />
                      <br></br>
                      Learn From the best,experienced and seasonal developers
                    </p>

                    <a href={ROUTES.ABOUT} className="enrolBtn">
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
                    <a href={ROUTES.ABOUT} className="enrolBtn">
                      <button type="button" className="diff" disabled>
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
                    <a href={ROUTES.ABOUT} className="enrolBtn">
                      <button type="button">Enrol Now</button>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>

          <div className="team mt-5">
            <Container>
              <h1 className="text-center">Frequently Asked Questions</h1>
              <Accordion
                title={"How can I register?"}
                label="To register, click on the Enroll Now  button. You will be required to input your accurate details on the application form. Proceed to make payment after registration "
              />
              <Accordion
                title={"After registration what next?"}
                label="Once you have successfully registered and made payment , your payment will be confirmed within 48 hours. After confirmation a home study kit with all the materials you need for the assessment will be sent to you via your email. Please make sure you provide a valid email address while applying and check your spam for emails from us. Also endeavor to thoroughly study the materials provided in the home study kit as your assessment test will be based on the materials."
              />
              <Accordion
                title="How much is the registration fee?"
                label={"Registration fee is N15, 000 naira only"}
              />
              <Accordion
                title="When will the classes start?"
                label={
                  "Training  will commence in August, 2022. The actual date will be communicated with applicants."
                }
              />
              <Accordion
                title="What is the duration of the course?"
                label={"The duration of the course is 12 months."}
              />
              <Accordion
                title="Will I get a Certificate at the end of the training?"
                label={
                  "Yes, you will. At the  end of the 12 weeks  training and post training assessment, participants will be given a certificate"
                }
              />
              <Accordion
                title="What qualifies me to get accepted into the program?"
                label={
                  "To get accepted into the program, you need to have a minimum of a HighSchool/Secondary School certificate, be computer literate and pass our pre- training assessment tests. If you are about to complete your high school or secondary education, you can apply as well."
                }
              />
              <Accordion
                title="How much is the tuition fee?"
                label={
                  "Tuition fee has been waived for this training. All you need to pay for as far as the training program is concerned  is pay for  registration which is N15,000 naira only. "
                }
              />
              <Accordion
                title="Why  is the training free?"
                label={
                  "Toltem training is free because we are not just interested in giving you this rare opportunity to learn web development but also to enable you to register for our mentorship program which will require a subsidized fee. "
                }
              />
              <Accordion
                title="Is the certificate recognisable anywhere?"
                label={
                  "Yes, it is. We have partnered with reputable higher institutions to ensure credibility."
                }
              />
              <Accordion
                title="Where will the classes take place?"
                label={
                  "Majority of the classes will be held in our training centers."
                }
              />
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
