import { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate,useLocation } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

// 动态数据后接口匹配
const items: MenuItem[] = [
  {
    label: "栏目1",
    key: "/page1",
    icon:<PieChartOutlined />
  },
  {
    label: "栏目2",
    key: "/page2",
    icon:<DesktopOutlined />
  },
  {
    label: "栏目3",
    key: "/page3",
    icon:<UserOutlined />,
    children:[
      {
        label: "Tom",
        key: "page3/page301"
      },
      {
        label: "Tom2",
        key: "5"
      }
    ]
  },
  {
    label: "Team",
    key: "/page4",
    icon:<TeamOutlined />,
    children:[
      {
        label: "Tom",
        key: "6"
      },
      {
        label: "Tom2",
        key: "7"
      }
    ]
  },
  {
    label: "栏目6",
    key: "/page5",
    icon:<FileOutlined />
  },
]

const MainMenu: React.FC = () => {
  const navigateTo = useNavigate();
  const currentRouter = useLocation()
  const menuClick = (e: { key: string }) => {
    console.log("点击了", e.key);
    navigateTo(e.key);
    console.log('-----',currentRouter.pathname);
    
  };
  // 默认打开菜单设置
  // currentRouter的path和items每一项对比
  let firstOpenKey:string = '';
  function findKey(obj:{key:string}){
    return obj.key === currentRouter.pathname
  }
  for(let i=0;i<items.length -1;i++ ) {
    if(items[i]!['children'] && items[i]!['children'].length>0 && items[i]!['children'].find(findKey)){
      firstOpenKey = items[i]!.key as string
      break
    }
  }
  console.log(firstOpenKey);
  
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  const handleOpenChange = (keys: string[]) => {
    console.log(keys);
    setOpenKeys([keys[keys.length - 1]]);
  };
  return (
    <Menu
      theme="dark"
      // 当前选中样式
      defaultSelectedKeys={[currentRouter.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
    />
  );
};
export default MainMenu;
