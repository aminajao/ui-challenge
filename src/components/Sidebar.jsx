import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../styles/sidebar.css';
import logo from '../assets/Vector.svg';
import home from '../assets/Home.svg';
import users from '../assets/3 User.svg';
import folder from '../assets/Folder.svg';
import setting from '../assets/Setting.svg';
import message from '../assets/rename.svg';
import kyc from '../assets/kyc.svg';
import reports from '../assets/Document.svg';
import arrowDownCircles from '../assets/arrowDown.svg';

const Aside = ({ toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div className="sidebar-logo">
          <img src={logo} alt="" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          <MenuItem icon={<img src={home} alt="" />} className="active">
            dashboard
          </MenuItem>
          <MenuItem icon={<img src={message} alt="" />} className="menu-item">
            Requests
          </MenuItem>
          <MenuItem icon={<img src={kyc} alt="" />} className="menu-item">
            KYCs
          </MenuItem>
          <MenuItem icon={<img src={reports} alt="" />}>Reports</MenuItem>
          <MenuItem icon={<img src={folder} alt="" />} className="menu-item">
            <div className="sub-menu-container">
              <span>Audit trial</span> <img src={arrowDownCircles} alt="" />
            </div>
          </MenuItem>
          <MenuItem icon={<img src={users} alt="" />} className="menu-item">
            users
          </MenuItem>
          <MenuItem icon={<img src={setting} alt="" />} className="menu-item">
            settings
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ padding: '50px 10px', borderTop: 'none' }}>
        <div className="sidebar-footer-container">
          <div className="img"></div>

          <div className="text">
            <p className="name">Nafisa Sh.</p>
            <p className="title">Support manager</p>
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
