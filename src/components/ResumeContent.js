import React from 'react';
import { Timeline } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import briefcaseIcon from '../imgs/briefcase.png';
import collegeIcon from '../imgs/college-graduation.png';

const experiences = [
  {
    title: 'Senior Softeware Engineer Engineer',
    time: 'March 2019 - Present',
    organization: 'Foftinet',
    location: 'Sunnyvale, CA',
    description: [
      {
        type: 'bull',
        content:
          'Responsible for building fortinet analyzer big data web application',
      },
    ],
  },
  {
    title: 'UI Engineer',
    time: 'Sep 2018 - March 2019',
    organization: 'Ellie Mae',
    location: 'Pleasanton, CA',
    description: [
      {
        type: 'bull',
        content: 'Responsible for building Encompass Web Platform UI',
      },
    ],
  },
  {
    title: 'Senior Software Engineer (Front End)',
    time: 'Nov 2017 - Aug 2018',
    organization: 'Centrify Corporation',
    location: 'Santa Clara, CA',
    description: [
      {
        type: 'bull',
        content:
          'Worked as Front End team leader (three persons), responsible for building Centrify Analytics Platform UI',
      },
    ],
  },
  {
    title: 'Software Enginner (Front End)',
    time: 'Nov 2015 - Oct 2017',
    organization: 'Centrify Corporation',
    location: 'Santa Clara, CA',
    description: [
      {
        type: 'title',
        content:
          'Project: Centrify Intellegent Analytics Platform (React.js/Echarts/jQuery/Restful API/WebSocket)',
      },
      {
        type: 'link',
        content: 'https://www.centrify.com/products/analytics-services',
      },
      {
        type: 'bull',
        content: 'Designed and developed UI of Centrify Analytics Service',
      },
      {
        type: 'bull',
        content:
          'Achieved big data visualization and chart based data cross-filtering',
      },
      {
        type: 'bull',
        content:
          'Achieved functions of building custom dashboards, events exploring, real-time events alerting, etc',
      },
      { type: 'bull', content: 'Used WebSocket, Restful API to fetch data' },
      {
        type: 'bull',
        content:
          'Utilized the latest ES6 features in all JavaScript code, such as Classes, Promises, async/await, etc',
      },
      {
        type: 'bull',
        content: 'Used Babel, Gulp, Browserify to translate ES6 to ES5',
      },
      {
        type: 'bull',
        content: 'Used Git, JIRA for code and project management',
      },
    ],
  },
  {
    title: 'Software Enginner Intern',
    time: 'Feb 2015 - Nov 2015',
    organization: 'Mercedes-Benz R&D North America. Inc',
    location: 'Sunnyvale, CA',
    description: [
      {
        type: 'bull',
        content:
          'Developed Responsive Mobile Web App according to the UI/UX design',
      },
      {
        type: 'bull',
        content:
          'Worked with backend team to develop realtime map web app prototype',
      },
    ],
  },
];

const educations = [
  {
    title: 'M.S. in Computer Science and Engineering',
    time: 'Sep 2013 - Jun 2015',
    organization: 'Santa Clara University',
    location: 'Santa Clara, CA',
    description: ['GPA: 3.62'],
  },
  {
    title: 'B.S. in Electronic and Information Engineering',
    time: 'Sep 2009 - Jun 2013',
    organization: 'Hangzhou Dianzi University',
    location: 'Hangzhou, China',
    description: ['GPA: 3.42'],
  },
];

const ResumeContent = () => {
  function generateDescription(des, index) {
    switch (des.type) {
      case 'title':
        return <div key={index}>{des.content}</div>;
      case 'link':
        return (
          <div key={index}>
            Link: <a href={des.content}>{des.content}</a>
          </div>
        );
      case 'bull':
        return <div key={index}>&nbsp; &bull; {des.content}</div>;
      default:
        return <div key={index}>{des.content}</div>;
    }
  }

  return (
    <div
      style={{ margin: '26px 26px 0', minHeight: 860, position: 'relative' }}
      className="resume-content"
    >
      <Timeline>
        <Timeline.Item
          dot={
            <img src={briefcaseIcon} alt="briefcase" style={{ width: 18 }} />
          }
          color="#444"
        >
          <span className="timeline-top">EXPERIENCES</span>
        </Timeline.Item>
        {experiences.map((item, index) => (
          <Timeline.Item color="#444" key={index}>
            <div style={{ fontWeight: 900 }}>
              <span>{item.title}</span>
              <span className="right-most">{item.time}</span>
            </div>
            <div>
              <b>{item.organization}</b>{' '}
              <span className="right-most">
                <EnvironmentOutlined /> {item.location}
              </span>
            </div>
            {item.description
              ? item.description.map((des, idx) =>
                  generateDescription(des, idx)
                )
              : null}
          </Timeline.Item>
        ))}
        <Timeline.Item dot={<span></span>} color="#444" />
      </Timeline>

      <Timeline>
        <Timeline.Item
          dot={<img src={collegeIcon} alt="college" style={{ width: 18 }} />}
          color="#444"
        >
          <span className="timeline-top">EDUCATION</span>
        </Timeline.Item>
        {educations.map((item, index) => (
          <Timeline.Item color="#444" key={index}>
            <div style={{ fontWeight: 900 }}>
              <span>{item.title}</span>
              <span className="right-most">{item.time}</span>
            </div>
            <div>
              <b>{item.organization}</b>{' '}
              <span className="right-most">
                <EnvironmentOutlined /> {item.location}
              </span>
            </div>
            {item.description
              ? item.description.map((des, idx) => <div key={idx}>{des}</div>)
              : null}
          </Timeline.Item>
        ))}
      </Timeline>
      <div style={{ position: 'absolute', right: 0 }}>
        <div>
          The resume is wholly typeset with React.js --{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/HuanxinHu/react-resume"
          >
            https://github.com/HuanxinHu/react-resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
