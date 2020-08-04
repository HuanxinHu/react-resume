import React from 'react';
import Avatar from './Avatar';
import Divider from './Divider';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Skills from './Skills';

const ResumeSider = () => (
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

export default ResumeSider;
