import React, { useState } from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import MainMenu from "@/componets/MainMenu";
import LoginOut from "./LoginOut";

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左边侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <MainMenu />
      </Sider>
      {/* 右边内容 */}
      <Layout>
        <Header
          style={{
            paddingLeft: "16px",
            lineHeight: "64px",
            background: colorBgContainer,
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between"
          }}
        >
          {/* 头部面包屑 */}
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill1</Breadcrumb.Item>
          </Breadcrumb>
          <LoginOut/>
        </Header>
        <Content
          style={{ margin: "16px 16px 0", background: colorBgContainer }}
        >
          {/* 窗口部分 */}
          <Outlet />
        </Content>
        {/* 也叫 */}
        <Footer style={{ textAlign: "center", padding: 0, lineHeight: "48px" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
