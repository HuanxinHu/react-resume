import React from 'react';
import './App.css';
import ResumeSider from './components/ResumeSider';
import ResumeContent from './components/ResumeContent';
import { Layout } from 'antd';
const { Content, Sider } = Layout;

export default function App() {
  return (
    <Layout className="resume-layout">
      <Sider width={320}>
        <ResumeSider />
      </Sider>
      <Layout>
        <Content>
          <ResumeContent />
        </Content>
      </Layout>
    </Layout>
  );
}
