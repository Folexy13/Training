import React, { useState } from "react";
import "./styles.scss";
import { Cart, Star, X } from "react-bootstrap-icons";

import { check } from "../../Assets";
export const Modal = ({ click, toggle }) => {
  return (
    <>
      {click && <div className="backdrop" onClick={toggle}></div>}
      {click && (
        <div
          className="modal__container"
          style={{ display: click ? "flex" : "none" }}
        >
          <div className="modal__content">
            <div className="close__button">
              <X size={30} fill="red" onClick={toggle} />
            </div>
            {/* Modal Inner Content */}
            <div className="pt-2 px-5 pb-4">
              <div className="w-100 modal__header">
                <h3>Grab this lesson Opportunity now...</h3>
                <p className="text-muted">
                  Albert Einstein — 'If you can't explain it to a six year old,
                  you don't understand it yourself.'
                </p>
                <div className="Modal__form__container mt-2">
                  <form action="/">
                    <div className="form__flex">
                      <div className="form__flex1">
                        <div className="label__flex">
                          <label htmlFor="Name">First Name</label>
                          <span>
                            <Star size={12} fill="black" />
                          </span>
                        </div>
                        <input
                          required
                          type="text"
                          name="firstname"
                          placeholder="First Name"
                          className="p-2 mt-1"
                        />
                      </div>
                      <div className="form__flex1">
                        <div className="label__flex">
                          <label htmlFor="Name">Last Name</label>
                          <span>
                            <Star size={12} fill="black" />
                          </span>
                        </div>
                        <input
                          required
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          className="p-2 mt-1"
                        />
                      </div>
                      <div className="form__flex1">
                        <div className="label__flex">
                          <label htmlFor="Name">Date of Birth</label>
                          <span>
                            <Star size={12} fill="black" />
                          </span>
                        </div>
                        <input
                          required
                          type="Date"
                          name="age"
                          placeholder="Age"
                          className="p-2 mt-1"
                        />
                      </div>
                      <div className="form__flex1">
                        <div className="label__flex">
                          <label htmlFor="Name">Gender</label>
                          <span>
                            <Star size={12} fill="black" />
                          </span>
                        </div>
                        <select name="level" id="level" className="p-2 mt-1">
                          <option value="Student">Male</option>
                          <option value="Working">Female</option>
                        </select>
                      </div>
                      <div className="form__flex1">
                        <div className="label__flex">
                          <label htmlFor="Name">Email Address</label>
                          <span>
                            <Star size={12} fill="black" />
                          </span>
                        </div>
                        <div className="phone__section w-100">
                          <input
                            required
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            className="py-2 pe-2 mt-1 w-100 h-100"
                          />
                        </div>
                      </div>
                      <div className="form__flex1">
                        <div className="label__flex">
                          <label htmlFor="Name">Phone Number</label>
                          <span>
                            <Star size={12} fill="black" />
                          </span>
                        </div>
                        <div className="phone__section w-100">
                          <div style={{ display: "flex" }}>
                            <select
                              style={{ width: "unset" }}
                              name="level"
                              id="level"
                              className="p-2 mt-1"
                            >
                              <option value="level">🇳🇬&emsp;</option>
                            </select>
                            <input
                              required
                              type="text"
                              name="phone"
                              placeholder="eg:+2347067903042"
                              className="py-2 pe-2 mt-1 w-100 h-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* FULL WIDTH INPUTGROUP */}

                    <div className="form__full w-100">
                      <div className="form__full__content">
                        <div className="label__flex">
                          <label htmlFor="Name">Your Address</label>
                          <span>
                            <Star size={12} fill="black" />
                          </span>
                        </div>
                        <input
                          required
                          type="text"
                          name="address"
                          placeholder="Enter Your Address"
                          className="py-2 pe-2 mt-1 w-100 h-100"
                        />
                      </div>
                      <div className="form__full__content">
                        <div className="label__flex">
                          <label htmlFor="Name">Occupation</label>
                          <span>
                            <Star size={12} fill="black" />
                          </span>
                        </div>
                        <select name="level" id="level" className="p-2 mt-1">
                          <option value="" disabled>
                            Select Occupation
                          </option>
                          <option value="Student">Student</option>
                          <option value="Working">Working Class</option>
                        </select>
                      </div>
                      <div className="form__full__content">
                        <div className="label__flex">
                          <label htmlFor="Name">Highest Degree Obtain</label>
                          <span>
                            <Star size={12} fill="black" />
                          </span>
                        </div>
                        <select name="level" id="level" className="p-2 mt-1">
                          <option value="" disabled>
                            Select Degree
                          </option>
                          <option value="OLevel">O Level equivalent</option>
                          <option value="B.SC">B.SC./B.Tech. equivalent</option>
                          <option value="M.SC">M.SC./M.Tech equivalent</option>
                        </select>
                      </div>

                      <div className="form__full__content">
                        <div className="label__flex">
                          <label htmlFor="Name">
                            Upload Your Passport(file must not be more than 3mb)
                          </label>
                          <span>
                            <Star size={12} fill="black" />
                          </span>
                        </div>
                        <input
                          required
                          type="file"
                          name="passport"
                          className="py-2 pe-2 mt-1 w-100 h-100"
                        />
                      </div>

                      {/* THREE COLUMNS SECTION */}

                      <div className="form__flex__three">
                        <div className="form__flex3">
                          <div className="label__flex">
                            <label htmlFor="Name">Course of Choice</label>
                            <span>
                              <Star size={12} fill="black" />
                            </span>
                          </div>
                          <select name="course" id="level" className="p-2 mt-1">
                            <option value="" disabled>
                              Select Course
                            </option>
                            <option value="training">Training</option>
                            <option value="mentorship">Mentorship</option>
                            <option value="internship">Internship</option>
                          </select>
                        </div>
                        <div className="form__flex3">
                          <div className="label__flex">
                            <label htmlFor="Name">Level of knowledge</label>
                            <span>
                              <Star size={12} fill="black" />
                            </span>
                          </div>
                          <select
                            name="levelOfKnowledge"
                            id="level"
                            className="p-2 mt-1"
                          >
                            <option value="" disabled>
                              Select Level of knoweldge in Web Dev/Design
                            </option>
                            <option value="training">Beginner</option>
                            <option value="mentorship">Intermediate</option>
                            <option value="internship">Professional</option>
                          </select>
                        </div>
                        <div className="form__flex3">
                          <div className="label__flex">
                            <label htmlFor="Name">Availabilty</label>
                            <span>
                              <Star size={12} fill="black" />
                            </span>
                          </div>
                          <select
                            name="availability"
                            id="level"
                            className="p-2 mt-1"
                          >
                            <option value="" disabled>
                              When will you be available?
                            </option>
                            <option value="training">Everyday</option>
                            <option value="mentorship">Twice a Week</option>
                            <option value="internship">Weekend classes</option>
                          </select>
                        </div>
                      </div>
                      <div className="form__flex__three">
                        <div className="form__flex3">
                          <div className="label__flex">
                            <label htmlFor="Name">Guardian's Name</label>
                            <span>
                              <Star size={12} fill="black" />
                            </span>
                          </div>
                          <input
                            required
                            type="text"
                            name="guardianName"
                            placeholder="Guardian's name"
                            className="py-2 pe-2 mt-1 w-100 h-100"
                          />
                        </div>
                        <div className="form__flex3">
                          <div className="label__flex">
                            <label htmlFor="Name">Guardian's Phone</label>
                            <span>
                              <Star size={12} fill="black" />
                            </span>
                          </div>
                          <input
                            required
                            type="text"
                            name="guardianNum"
                            placeholder="eg:+2347067903042"
                            className="py-2 pe-2 mt-1 w-100 h-100"
                          />
                        </div>
                        <div className="form__flex3">
                          <div className="label__flex">
                            <label htmlFor="Name">Guardian Address</label>
                            <span>
                              <Star size={12} fill="black" />
                            </span>
                          </div>
                          <input
                            required
                            type="text"
                            name="guardianAddress"
                            placeholder="Guardian's Address"
                            className="py-2 pe-2 mt-1 w-100 h-100"
                          />
                        </div>
                      </div>
                      {/* THREE COLUMNS END */}
                      <div className="form__full__content">
                        <div className="label__flex">
                          <label htmlFor="Name">
                            In three sentences, tell us about yourself
                          </label>
                          <span>
                            <Star size={12} fill="black" />
                          </span>
                        </div>
                        <textarea
                          name="about"
                          id="about"
                          cols="30"
                          rows="5"
                          required
                        >
                          About you
                        </textarea>
                      </div>
                      {/* CHECK TERM AND CONDITIONS */}
                      {/* <div className="mt-4">
                        <div className="term">
                          <div className="term__check">
                            <img
                              src={check}
                              alt="img.jpg"
                              className="w-100 h-100"
                            />
                          </div>
                          <p>
                            I have read the <a href="/">TERMS AND CONDITION</a>
                          </p>
                        </div>
                      </div> */}
                    </div>
                    <div className="form__footer">
                      <button type="submit">Start Learning</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
