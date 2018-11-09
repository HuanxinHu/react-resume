import React, { Component } from 'react';
import './App.css';
import ResumeSider from './components/ResumeSider';
import ResumeContent from './components/ResumeContent';
import { Layout } from 'antd';
const { Content, Sider } = Layout;

export default class App extends Component {

  render() {
    return (
      <Layout className="resume-layout">
        <Sider width={320}>
          <ResumeSider/>
        </Sider>
        <Layout>
          <Content>
            <ResumeContent/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

