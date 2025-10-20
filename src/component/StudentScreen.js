import React, { useState } from 'react'
import { studentsData } from '../data/MockData';
import { Avatar, Badge, Button, Card, Input, Progress, Space, Table } from 'antd';
import { STATUS_COLORS } from '../utils/Constant';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import {AddStudentModal} from '../component/AddStudentModel';

const { Search } = Input;

const StudentScreen=()=> {
  const [students, setStudents] = useState(studentsData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchText.toLowerCase()) ||
    student.email.toLowerCase().includes(searchText.toLowerCase()) ||
    student.course.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddStudent = (newStudent) => {
    const student = {
      ...newStudent,
      id: students.length + 1,
      progress: 0,
      status: 'active',
      joinDate: new Date().toISOString().split('T')[0]
    };
    setStudents([...students, student]);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Space>
          <Avatar 
            style={{ backgroundColor: '#1890ff' }}
            size="small"
          >
            {text.charAt(0).toUpperCase()}
          </Avatar>
          <div>
            <div style={{ fontWeight: '500' }}>{text}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{record.email}</div>
          </div>
        </Space>
      ),
    },
    {
      title: 'Course',
      dataIndex: 'course',
      key: 'course',
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (progress) => (
        <div style={{ width: '120px' }}>
          <Progress 
        percent={progress} 
            size="small" 
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
          />
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Badge
          status={STATUS_COLORS[status]}
          text={status.toUpperCase()}
        />
      ),
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="small">
          <Button type="primary" icon={<EyeOutlined />} size="small">
            View
          </Button>
          <Button icon={<EditOutlined />} size="small">
            Edit
          </Button>
          <Button danger icon={<DeleteOutlined />} size="small">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <div>
          <h1 style={{ margin: 0, color: '#1890ff' }}>Students Management</h1>
          <p style={{ margin: '8px 0 0 0', color: '#666' }}>
            Manage your students, track their progress, and monitor their performance.
          </p>
        </div>
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          Add Student
        </Button>
      </div>
      
      <Card className="dashboard-card">
        <div style={{ marginBottom: '16px' }}>
          <Search
            placeholder="Search students by name, email, or course"
            allowClear
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 300 }}
            prefix={<SearchOutlined />}
          />
        </div>
        
        <Table 
          dataSource={filteredStudents} 
          columns={columns} 
          rowKey="id"
          pagination={{ 
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => 
              `${range[0]}-${range[1]} of ${total} students`,
          }}
        />
      </Card>

      <AddStudentModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onSubmit={handleAddStudent}
      />
    </div>
  );
};

export default StudentScreen;




