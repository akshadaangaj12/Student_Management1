import React, { useState } from 'react';
import { Modal, Input, Select, Space, Button, notification, App } from 'antd';

const { Option } = Select;

export const AddStudentModal = ({ visible, onCancel, onSubmit }) => {
  
 const { notification } = App.useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    phone: '',
    address: ''
  });
  
  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.course) {
      notification.error({
        message: 'Validation Error',
        description: 'Please fill in all required fields (Name, Email, Course).',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      notification.error({
        message: 'Validation Error',
        description: 'Please enter a valid email address.',
      });
      return;
    }

    // Phone validation (if provided)
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      notification.error({
        message: 'Validation Error',
        description: 'Phone number must contain only digits.',
      });
      return;
    }

    onSubmit(formData);
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      course: '',
      phone: '',
      address: ''
    });
    
    onCancel();
    
    notification.success({
      message: 'Student Added',
      description: 'Student has been successfully added to the system.',
    });
  };

  const handleCancel = () => {
    // Clear form on cancel
    setFormData({
      name: '',
      email: '',
      course: '',
      phone: '',
      address: ''
    });
    onCancel();
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Only allow digits
    if (value === '' || /^\d+$/.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  return (
    <Modal
      title="Add New Student"
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={600}
    >
      <div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Student Name *
          </label>
          <Input 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter student full name" 
            size="large"
          />
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Email Address *
          </label>
          <Input 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            type="email"
            placeholder="Enter email address" 
            size="large"
          />
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Course *
          </label>
          <Select 
            value={formData.course || undefined}
            onChange={(value) => setFormData({ ...formData, course: value })}
            placeholder="Select a course" 
            style={{ width: '100%' }}
            size="large"
          >
            <Option value="React Development">React Development</Option>
            <Option value="JavaScript Basics">JavaScript Basics</Option>
            <Option value="Node.js">Node.js</Option>
            <Option value="Python Basics">Python Basics</Option>
          </Select>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Phone Number
          </label>
          <Input 
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="Enter phone number (optional, digits only)" 
            size="large"
            maxLength={15}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
            Address
          </label>
          <Input.TextArea 
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Enter address (optional)" 
            rows={3}
          />
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <Space>
            <Button onClick={handleCancel}>
              Cancel
            </Button>
            <Button 
              type="primary" 
              onClick={handleSubmit}
            >
              Add Student
            </Button>
          </Space>
        </div>
      </div>
    </Modal>
  );
};
