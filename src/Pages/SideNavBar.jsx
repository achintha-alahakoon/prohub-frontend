import React, { useState } from "react";
import { Button, Layout, theme } from "antd";
import Logo from "../components/Logo";
import MenuList from "../Components/MenuList";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ToggleThemeButton from "../Components/ToggleThemeButton";
import Dashboard from "./Dashboard";
import AdminPanel from "./AdminPanel";
import AllTrainees from "./AllTrainees";
import AddTrainnes from "./AddTrainnes";
import AllInternships from "./AllInternships";
import AddInternships from "./AddInternships";
import Attendance from "./Attendance";
import TopHeader from "../Components/TopHeader";
import AvatarComponent from "../Components/AvatarComponent";
import { NotificationsOutlined } from "@mui/icons-material";

const { Header, Sider, Content } = Layout;

const SideNavBar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    background: darkTheme ? "#001529" : colorBgContainer,
    color: darkTheme ? "#fff" : "#000",
  };

  const collapseButtonStyle = {
    color: darkTheme ? "#fff" : "#000",
  };

  const menuTitles = {
    dashboard: "Dashboard",
    admin: "Admin Panel",
    allTrainees: "All Trainees",
    addTrainees: "Add Trainees",
    allInternships: "All Internships",
    addInternships: "Add Internships",
    attendance: "Attendance",
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <Dashboard />;
      case "admin":
        return <AdminPanel />;
      case "allTrainees":
        return <AllTrainees />;
      case "addTrainees":
        return <AddTrainnes />;
      case "allInternships":
        return <AllInternships />;
      case "addInternships":
        return <AddInternships />;
      case "attendance":
        return <Attendance />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout>
      <Sider
        theme={darkTheme ? "dark" : "light"}
        collapsible
        trigger={null}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="sidebar"
      >
        <Logo collapsed={collapsed} />
        <MenuList
          darkTheme={darkTheme}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>

      <Layout>
        <Header style={headerStyle}>
          <Button
            style={collapseButtonStyle}
            type="text"
            className="toggle"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
    
          <div style={{ marginLeft: "20px" }}>
            <TopHeader title={menuTitles[activeMenu] || "Header"}/>
          </div>

          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
            <NotificationsOutlined style={{ width: "30px", height: "30px", color: '#969393'}}/>
            <AvatarComponent />
          </div>

          
        </Header>

        <Content style={{ padding: "24px", background: "#f9f9f9" }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideNavBar;
