import React from 'react';
import avatar from '../imgs/avatar.png';

export default function Avatar() {
  return (
    <div className="resume-avatar">
      <img src={avatar} alt="HuanxinHu" style={{ width: 120 }} />
      <p className="avatar-name">Huanxin Hu</p>
      <p className="avatar-description">Front End Developer</p>
    </div>
  );
}
