import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Modal } from "../Modal/Modal";
import "./styles.scss";

export const About = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const close = () => {
    setShow(false);
  };

  return (
    <>
      <Modal click={show} toggle={close} />
      <div className="about">
        <Container className="main">
          <h1>About the training</h1>
          <p>
            Toltem Training Program is for people who are interested in pursuing
            a career in web development, and web design. The program will equip
            you with the basic programing skills needed for your dream job in
            technology company. Our professional tutors teach web development
            and design through professionally written curriculum, provide high
            quality teaching, learning materials and real life examples. With
            our team of experienced tutors as well as structured and standard
            training curiculum, you will have a remarkable training experience.
          </p>
          <h2>Training fee</h2>
          <p>
            <b>Training fee has been waived</b> for this training program as you
            will only be required to pay for registration.
          </p>
          <h2>Registration fee</h2>
          <p>The registration fee the training is N15, 000 only </p>
          <h2>Benefits</h2>
          <ul>
            <li>Free training materials for self-learning. </li>
            <li>Topnotch training by experienced tutors. </li>
            <li>
              You will be trained using the latest web standards, to design
              websites from scratch, or modify existing ones.
            </li>
            <li>
              You'll learn how to design all kinds of artwork, including but not
              limited to, flyers, banners, posters, and logos.
            </li>
            <li>Learning friendly environment for training. </li>
            <li>
              You stand the chance of being mentored by an expert after the
              trainning
            </li>
          </ul>
          <h2>Requirements For Training</h2>
          <ul>
            <li>
              Get registered online by filling the registration form and paying
              a token fee of N15, 000 only.
            </li>
            <li>Have a good laptop</li>
            <li>
              Download and study the training materials that will be sent to
              your mail after payment
            </li>
            <li>
              Candidates must have studied the training material for one month{" "}
            </li>
            <li>
              Candidates must be prepared to take the assessment test that will
              be based on the training materials
            </li>
            <li>Candidates must participate in the assessment test.</li>
            <li>Perform excellently in the assessment test </li>
            <li>
              Candidates must have excellent performance in the pre-training
              assessment test
            </li>
            <li>
              Only the candidates with good performance in the pre-training
              assessment test will proceed to commence training,{" "}
              <b>
                while registered candidates with poor performance in the
                assessment test can re- apply at no cost to join the next
                training cohort.
              </b>
            </li>
          </ul>

          <button onClick={handleShow}>Proceed to register</button>
        </Container>
      </div>
    </>
  );
};
