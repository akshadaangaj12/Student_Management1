import { BookOutlined, DashboardOutlined, SettingOutlined, UserOutlined ,LogoutOutlined, HomeFilled, FileOutlined, ProfileFilled, WalletFilled, CarFilled} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
const { Sider } = Layout;
export default function Sidebar() {
const [collapsed, setCollapsed] = useState(false);
const navigate = useNavigate();
const location = useLocation();

  // Get current route without leading slash
const currentPath = location.pathname.replace('/', '') || 'dashboard';

const menuItems = [
    {
        key: 'dashboard',
        icon: <DashboardOutlined />,
        label: 'Dashboard',
    },
    {
        key: 'students',
        icon: <UserOutlined />,
        label: 'Students',
    },
    {
        key: 'courses',
        icon: <BookOutlined />,
        label: 'Courses',
    },
    {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
    },

    {
    key:"Logout",
    icon:<LogoutOutlined/>,
    label:'Logout',
},

{
    key:"Demo1screen",
    icon:<HomeFilled/>,
    label:'Demo1screen',
},
{
    key:"Newscreen",
    icon:<FileOutlined/>,
    label:'Newscreen',
},
{
    key:"Profile",
    icon:<ProfileFilled/>,
    label:'Peofile',
},
{
    key:"From",
    icon:<CarFilled/>,
    label:'From',
},
{
    key:"Carousel",
    icon:<WalletFilled/>,
    label:'Carousel',
},
];

const handleMenuClick = ({ key }) => {
    navigate(`/${key}`);
};

return (
    <Sider
    collapsible
    collapsed={collapsed}
    onCollapse={setCollapsed}
    style={{
        background: '#fff',
        boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)'
    }}
    >
    <div className="sidebar-logo">
        <h3 style={{ margin: 0, color: '#1890ff', fontSize: collapsed ? '16px' : '18px' }}>
        {collapsed ? 'TLA' : 'Tech Learning Academy'}
        </h3>
    </div>
    <Menu
    /*mode is by deflaut vertical*/ 
        mode="inline"
        selectedKeys={[currentPath]}
        items={menuItems}
        onClick={handleMenuClick}
        style={{ borderRight: 0, marginTop: '16px' }}
    />
</Sider>
)
}
