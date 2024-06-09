//import { useState } from 'react'
import { useRoutes, useLocation, useNavigate } from "react-router-dom";

import router from "./router";
import { useEffect } from "react";
import { message } from "antd";

function ToPage1() {
  const navigateTo = useNavigate();
  useEffect(() => {
    // 组件加载完跳转
    navigateTo("/page1");
    message.warning("你已经登录了")

  }, [navigateTo]);
  return <div></div>;
}
function ToLogin() {
  const navigateTo = useNavigate();
  useEffect(() => {
    // 组件加载完跳转
    navigateTo("/login");
    message.warning("你还没有登录请登录后访问")
  }, [navigateTo]);

  return <div></div>;
}
// 路由守卫 控制菜单显示

function BeforeRouter() {
  const outlet = useRoutes(router);

  //两种经典跳转
  // 1.访问是登录页面且有token 跳转首页
  // 2.访问的不是登录页面且没有token 跳转值登录页
  // 3.其余的都可以正常放行
  const location = useLocation();
  const token = localStorage.getItem("admin-token") || "";
  if (location.pathname == "/login" && token) {
    return <ToPage1 />;
  }
  if (location.pathname !== "/login" && !token) {
    return <ToLogin />;
  }

  return outlet;
}

function App() {
  //const [count, setCount] = useState(0)
  // const outlet = useRoutes(router)
  return (
    <div className="App">
      {/* 顶级组件 */}
      {/*  <h2>默认app首页</h2>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link> */}
      {/* <Outlet></Outlet>    */}
      {/* {outlet} */}
      <BeforeRouter />
    </div>
  );
}

export default App;
