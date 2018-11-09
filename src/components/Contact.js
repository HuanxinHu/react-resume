import React, { Component } from 'react';
import emailIcon from '../imgs/email.png';
import phoneIcon from '../imgs/phone.png';
import githubIcon from '../imgs/github-logo.png';
import linkedinIcon from '../imgs/social-linkedin.png';

export default class Contact extends Component {

  render() {
    return (
      <div className="resume-contact">
        <h1>Contact</h1>
        <ul style={{textAlign: 'left'}}>
          <li>
            <img src={phoneIcon} alt="phone"/> 
            <span className="contact-text">408.637.8436</span>
          </li>
          <li>
            <img src={emailIcon} alt="email"/>
            <span className="contact-text">huanxinhu@gmail.com</span>
          </li>
          <li>
            <a href="https://github.com/HuanxinHu" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github"/>
              <span className="contact-text">https://github.com/HuanxinHu</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/huanxinhu" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="linkedin"/>
              <span className="contact-text">https://www.linkedin.com/in/huanxinhu</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

