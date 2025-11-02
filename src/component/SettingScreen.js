import React, { useState } from 'react';
import { Card, Input, Select, Button, Switch, Row, Col, Divider, notification, Avatar } from 'antd';
import { UserOutlined, MailOutlined, BellOutlined, SecurityScanOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const SettingsScreen = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSaveSettings = () => {
    notification.success({
      message: 'Settings Saved',
      description: 'Your settings have been successfully updated.',
    });
  };

  const handleSaveProfile = () => {
    notification.success({
      message: 'Profile Updated',
      description: 'Your profile information has been successfully updated.',
    });
  };

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <div>
          <h1 style={{ margin: 0, color: '#1890ff' }}>Settings</h1>
          <p style={{ margin: '8px 0 0 0', color: '#666' }}>
            Manage your account settings, preferences, and application configuration.
          </p>
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {/* Profile Settings */}
        <Col xs={24} lg={12}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <UserOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                Profile Information
              </div>
            }
            className="dashboard-card"
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <Avatar size={80} icon={<UserOutlined />} />
              <div style={{ marginTop: '12px' }}>
                <Button type="link">Change Avatar</Button>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                Full Name
              </label>
              <Input 
                defaultValue="Teacher Admin" 
                size="large"
              />
            </div>
            
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                Email Address
              </label>
              <Input 
                defaultValue="admin@academy.com" 
                size="large"
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                Phone Number
              </label>
              <Input 
                defaultValue="+91-9876543210" 
                size="large"
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                Bio
              </label>
              <TextArea 
                defaultValue="Experienced educator specializing in web development and programming languages."
                rows={3}
              />
            </div>
            
            <Button 
              type="primary" 
              onClick={handleSaveProfile}
              style={{ width: '100%' }}
            >
              Update Profile
            </Button>
          </Card>
        </Col>

        {/* Application Settings */}
        <Col xs={24} lg={12}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <SecurityScanOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                Application Settings
              </div>
            }
            className="dashboard-card"
            style={{ marginBottom: '16px' }}
          >
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                School/Institution Name
              </label>
              <Input 
                defaultValue="Tech Learning Academy" 
                size="large"
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                Time Zone
              </label>
              <Select 
                defaultValue="UTC+5:30" 
                style={{ width: '100%' }}
                size="large"
              >
                <Option value="UTC+5:30">India Standard Time (UTC+5:30)</Option>
                <Option value="UTC-8">Pacific Time (UTC-8)</Option>
                <Option value="UTC-7">Mountain Time (UTC-7)</Option>
                <Option value="UTC-6">Central Time (UTC-6)</Option>
                <Option value="UTC-5">Eastern Time (UTC-5)</Option>
              </Select>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                Language
              </label>
              <Select 
                defaultValue="en" 
                style={{ width: '100%' }}
                size="large"
              >
                <Option value="en">English</Option>
                <Option value="es">Spanish</Option>
                <Option value="fr">French</Option>
                <Option value="de">German</Option>
              </Select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                Theme
              </label>
              <Select 
                defaultValue="light" 
                style={{ width: '100%' }}
                size="large"
              >
                <Option value="light">Light Mode</Option>
                <Option value="dark">Dark Mode</Option>
                <Option value="auto">System Default</Option>
              </Select>
            </div>

            <Button 
              type="primary" 
              onClick={handleSaveSettings}
              style={{ width: '100%' }}
            >
              Save Settings
            </Button>
          </Card>

          {/* Notification Settings */}
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BellOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                Notification Preferences
              </div>
            }
            className="dashboard-card"
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '16px' 
            }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                  Email Notifications
                </div>
                <div style={{ color: '#666', fontSize: '12px' }}>
                  Receive updates via email
                </div>
              </div>
              <Switch 
                checked={emailNotifications}
                onChange={setEmailNotifications}
              />
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '16px' 
            }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                  Push Notifications
                </div>
                <div style={{ color: '#666', fontSize: '12px' }}>
                  Receive browser notifications
                </div>
              </div>
              <Switch 
                checked={pushNotifications}
                onChange={setPushNotifications}
              />
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                  Student Progress Updates
                </div>
                <div style={{ color: '#666', fontSize: '12px' }}>
                  Get notified when students complete milestones
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsScreen;