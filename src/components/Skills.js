import React, { useState, useEffect } from 'react';
const mapToWidth = {
  init: 0,
  basic: 50,
  skilled: 82,
  'skilled-plus': 100,
  advanced: 160,
  'advanced-plus': 180,
  expert: 200,
};

const Skills = () => {
  const [skills, setSkills] = useState([
    { name: 'Javascript', level: 'init' },
    { name: 'HTML5', level: 'init' },
    { name: 'CSS3', level: 'init' },
    { name: 'jQuery', level: 'init' },
    { name: 'React', level: 'init' },
    { name: 'Java', level: 'init' },
    { name: 'MySQL', level: 'init' },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setSkills([
        { name: 'Javascript', level: 'advanced-plus' },
        { name: 'HTML5', level: 'advanced' },
        { name: 'CSS3', level: 'skilled-plus' },
        { name: 'jQuery', level: 'advanced' },
        { name: 'React', level: 'advanced-plus' },
        { name: 'Java', level: 'basic' },
        { name: 'MySQL', level: 'basic' },
      ]);
    }, 500);
  }, []);

  return (
    <div className="resume-skill">
      <h1>Skills</h1>
      <table>
        <tbody>
          <tr>
            <th>&nbsp;</th>
            <th>Basic</th>
            <th>Skilled</th>
            <th>Advanced</th>
            <th>Expert</th>
          </tr>
          {skills.map((skill, index) => (
            <tr key={index}>
              <td>{skill.name}</td>
              <td colSpan={4}>
                <div
                  className="skill-bar"
                  style={{ width: mapToWidth[skill.level] }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
