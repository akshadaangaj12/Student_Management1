

// import { Space, Table, Tag } from 'antd';
// import { Demodata } from '../data/MockData';

// const { Column, ColumnGroup } = Table;


// export default function ScoreScreen() {
//   return (
//    <Table dataSource={Demodata}>
//     <ColumnGroup title="Name">
//       <Column title="First Name" dataIndex="firstName" key="firstName" />
//       <Column title="Last Name" dataIndex="lastName" key="lastName" />
//     </ColumnGroup>
//     <Column title="Age" dataIndex="age" key="age" />
//     <Column title="Address" dataIndex="address" key="address" />
//     <Column
//       title="Tags"
//       dataIndex="tags"
//       key="tags"
//       render={tags => (
//         <>
//           {tags.map(tag => {
//             let color = tag.length > 5 ? 'geekblue' : 'green';
//             if (tag === 'loser') {
//               color = 'volcano';
//             }
//             return (
//               <Tag color={color} key={tag}>
//                 {tag.toUpperCase()}
//               </Tag>
//             );
//           })}
//         </>
//       )}
//     />
//     <Column
//       title="Action"
//       key="action"
//       render={(_, record) => (
//         <Space size="middle">
//           <a>Invite {record.lastName}</a>
//           <a>Delete</a>
//         </Space>
//       )}
//     />
//   </Table>
//   )
// }
import React, { useState } from 'react';
import { Card, Row, Col, Button, Tag, Space, Avatar, Modal, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons';
import { coursesData } from '../data/MockData';
import { LEVEL_COLORS } from '../utils/Constant';

const CoursesScreen = () => {
  const [courses, setCourses] = useState(coursesData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddCourse = () => {
    setIsModalVisible(true);
  };

  const CourseCard = ({ course }) => (
    <Card
      className="course-card dashboard-card"
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{course.title}</span>
          <Tag color={course.status === 'active' ? 'green' : 'orange'}>
            {course.status.toUpperCase()}
          </Tag>
        </div>
      }
      extra={<Button type="link">Manage</Button>}
      actions={[
        <EyeOutlined key="view" onClick={() => console.log('View course:', course.id)} />,
        <EditOutlined key="edit" onClick={() => console.log('Edit course:', course.id)} />,
        <DeleteOutlined key="delete" onClick={() => console.log('Delete course:', course.id)} />,
      ]}
    >
      <div style={{ marginBottom: '16px' }}>
        <p style={{ color: '#666', margin: '0 0 12px 0' }}>{course.description}</p>
        
        <div style={{ marginBottom: '8px' }}>
          <Space>
            <UserOutlined />
            <span><strong>{course.students}</strong> Students</span>
          </Space>
        </div>
        
        <div style={{ marginBottom: '8px' }}>
          <span><strong>Duration:</strong> {course.duration}</span>
        </div>
        
        <div style={{ marginBottom: '8px' }}>
          <span><strong>Instructor:</strong> {course.instructor}</span>
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <span><strong>Price:</strong> {course.price}</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Tag color={LEVEL_COLORS[course.level]} style={{ margin: 0 }}>
            {course.level}
          </Tag>
          <Avatar.Group size="small">
            <Avatar style={{ backgroundColor: '#f56a00' }}>A</Avatar>
            <Avatar style={{ backgroundColor: '#7265e6' }}>B</Avatar>
            <Avatar style={{ backgroundColor: '#87d068' }}>C</Avatar>
            <Avatar>+{course.students - 3}</Avatar>
          </Avatar.Group>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <div>
          <h1 style={{ margin: 0, color: '#1890ff' }}>Courses Management</h1>
          <p style={{ margin: '8px 0 0 0', color: '#666' }}>
            Manage your courses, track enrollment, and monitor course performance.
          </p>
        </div>
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          onClick={handleAddCourse}
        >
          Add Course
        </Button>
      </div>

      <Row gutter={[16, 16]}>
        {courses.map(course => (
          <Col xs={24} sm={12} lg={8} key={course.id}>
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>

      {/* Add Course Modal */}
      <Modal
        title="Add New Course"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={600}
      >
        <div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
              Course Title *
            </label>
            <Input 
              placeholder="Enter course title" 
              size="large"
            />
          </div>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
              Description *
            </label>
            <Input.TextArea 
              placeholder="Enter course description" 
              rows={3}
            />
          </div>
          
          <Row gutter={16}>
            <Col span={12}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                  Duration *
                </label>
                <Input 
                  placeholder="e.g., 8 weeks" 
                  size="large"
                />
              </div>
            </Col>
            <Col span={12}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                  Price *
                </label>
                <Input 
                  placeholder="e.g., ₹299" 
                  size="large"
                />
              </div>
            </Col>
          </Row>
          
          <div style={{ textAlign: 'right', marginTop: '24px' }}>
            <Space>
              <Button onClick={() => setIsModalVisible(false)}>
                Cancel
              </Button>
              <Button type="primary">
                Add Course
              </Button>
            </Space>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CoursesScreen;
