import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SoundOutlined,
  UserOutlined,
  AuditOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

const MenuList = ({ darkTheme, activeMenu, setActiveMenu }) => {
  return (
    <Menu
      className="menu-bar"
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      selectedKeys={[activeMenu]}
      onClick={({ key }) => setActiveMenu(key)}
    >
      <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="admin" icon={<AuditOutlined />}>
        Admin Panel
      </Menu.Item>
      <Menu.SubMenu key="trainees" icon={<UserOutlined />} title="Trainees">
        <Menu.Item key="allTrainees">All Trainees</Menu.Item>
        <Menu.Item key="addTrainees">Add Trainees</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="internships"
        icon={<SoundOutlined />}
        title="Internships"
      >
        <Menu.Item key="allInternships">All Internships</Menu.Item>
        <Menu.Item key="addInternships">Add Internships</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="attendance" icon={<IdcardOutlined />} title="Attendance">
        Attendance
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
