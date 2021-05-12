import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const Contact = () => {
  return (
    <Section id="contact" accent="secondary">
      <Container style={{}}>
        <SectionTitle>
          <h1>Let's talk.</h1>
        </SectionTitle>
        <FormContainer>
          <div className="form-details">
            <form method="post" data-netlify="true" name="contact">
              <input type="hidden" name="contact-us" value="contact" />
              <div className="form-row">
                <label className="first-label">
                  <span>First Name</span>
                  <input type="text" name="first-name" />
                </label>
                <label>
                  <span>Last Name</span>
                  <input type="text" name="last-name" />
                </label>
              </div>
              <div className="form-row">
                <label className="first-label">
                  <span>Email</span>
                  <input type="email" name="email" />
                </label>
                <label>
                  <span>Phone Number</span>
                  <input type="tel" name="telephone" />
                </label>
              </div>
              <div className="userText">
                <span>How can we help you with your website?</span>
                <textarea name="comment" rows="10"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </FormContainer>
      </Container>
    </Section>
  );
};

export default Contact;

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  .form-details {
    font-family: 'Lato', sans-serif;
    span {
      font-weight: bold;
      font-size: 0.75em;
      text-transform: uppercase;
      letter-spacing: 0.01687rem;
      margin-bottom: 10px;
    }

    form {
      width: 748px;

      @media screen and (max-width: 774px) {
        width: 100%;
      }

      .form-row {
        display: flex;
        width: 100%;
        margin-top: 1rem;

        @media screen and (max-width: 774px) {
          flex-direction: column;

          label:not(:last-child) {
            margin-bottom: 20px;
          }
        }

        .first-label {
          margin-right: 20px;
        }

        label {
          display: flex;
          flex-direction: column;
          width: 100%;

          input {
            padding: 0 20px;
            border: 1px solid #8e8e8e;
            height: 52px;
            line-height: 52px;
            width: 100%;
          }
        }
      }

      .userText {
        margin-top: 40px;

        textarea {
          height: 160px;
          width: 100%;
          max-width: 800px;
          resize: none;
          border: 1px solid #8e8e8e;
          margin-top: 10px;
          padding: 16px;
        }
      }

      button {
        color: white;
        padding: 1.3rem 4rem;
        border: 1px solid #ff0000;
        background-color: #ff0000;
        letter-spacing: 0.01687rem;
        text-transform: uppercase;
        margin-top: 20px;
        text-decoration: none;
        transition: all 0.55s ease-out;
      }

      button:hover {
        color: #000;
        background-color: #fff;
      }
    }
  }
`;
