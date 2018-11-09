import React, { Component } from 'react';
import Avatar from './Avatar';
import Divider from './Divider';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Skills from './Skills';

export default class ResumeSider extends Component {

  render() {
    return (
      <div className="resume-sider">
        <Avatar />
        <Divider />
        <AboutMe />
        <Divider />
        <Contact />
        <Divider />
        <Skills />
      </div>
    );
  }
}

