import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SoundOutlined,
  UserOutlined,
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
      <Menu.SubMenu key="trainees" icon={<SoundOutlined />} title="Trainees">
        <Menu.Item key="allTrainees">All Trainees</Menu.Item>
        <Menu.Item key="addTrainees">Add Trainees</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="internships" icon={<UserOutlined />} title="Internships">
        <Menu.Item key="allInternships">All Internships</Menu.Item>
        <Menu.Item key="addInternships">Add Internships</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default MenuList;
