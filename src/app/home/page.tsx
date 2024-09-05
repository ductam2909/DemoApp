'use client';
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CheckCircleOutlined,
  ScheduleOutlined,
  FileOutlined,
  CalendarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Badge, Avatar, Table, Tag } from 'antd';

const { Header, Sider, Content } = Layout;

// Định nghĩa kiểu dữ liệu cho các hàng trong bảng
interface DataType {
  key: string;
  project: string;
  lastAssessed: string;
  tags: string[];
}

// Định nghĩa kiểu dữ liệu cho các cột bảng
interface ColumnType {
  title: string;
  dataIndex?: string;
  key: string;
  render?: (text: any, record?: DataType) => React.ReactNode;
}

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Định nghĩa các cột bảng với các kiểu dữ liệu cụ thể
  const columns: ColumnType[] = [
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
      render: (text: string) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircleOutlined style={{ color: '#7CFC00', marginRight: '8px' }} />
          {text}
        </div>
      ),
    },
    {
      title: 'Last Assessed',
      dataIndex: 'lastAssessed',
      key: 'lastAssessed',
    },
    {
      title: 'License Use',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => {
            const color = tag === 'Active' ? 'green' : tag === 'Admin' ? 'red' : 'gold';
            return (
              <Tag color={color} key={tag} style={{ marginRight: '8px' }}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  // Định nghĩa dữ liệu bảng với kiểu dữ liệu cụ thể
  const data: DataType[] = [
    {
      key: '1',
      project: 'Sisyphus',
      lastAssessed: '22 Jan 2022',
      tags: ['Active', 'Customer data', 'Admin'],
    },
    {
      key: '2',
      project: 'Sisyphus',
      lastAssessed: '20 Jan 2022',
      tags: ['Active', 'Customer data', 'Admin'],
    },
    {
      key: '3',
      project: 'Sisyphus',
      lastAssessed: '24 Jan 2022',
      tags: ['Active', 'Customer data', 'Admin'],
    },
    {
      key: '4',
      project: 'Sisyphus',
      lastAssessed: '26 Jan 2022',
      tags: ['Active', 'Customer data', 'Admin'],
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#111314' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#1A1A1D' }}>
        <div className="logo" style={{ color: '#F77F00', padding: '16px', fontSize: '24px', fontWeight: 'bold' }}>
          Digital Fortress
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ backgroundColor: '#1A1A1D' }}
          items={[
            {
              key: '1',
              icon: <CheckCircleOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <FileOutlined />,
              label: 'Task',
            },
            {
              key: '3',
              icon: <ScheduleOutlined />,
              label: 'Projects',
            },
            {
              key: '4',
              icon: <CalendarOutlined />,
              label: 'Schedule',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={{ backgroundColor: '#111314' }}>
        <Header
          style={{
            padding: 0,
            background: '#1A1A1D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: '#F77F00',
            }}
          />
          <div style={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
            <Badge count={2} offset={[10, 0]} style={{ backgroundColor: '#F77F00' }}>
              <Avatar shape="circle" size="large" icon={<UserOutlined />} />
            </Badge>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#1A1A1D',
            borderRadius: '8px',
            color: 'white',
          }}
        >
          <h2>Dashboard</h2>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 10 }}
            style={{ backgroundColor: '#1A1A1D', color: 'white' }}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
