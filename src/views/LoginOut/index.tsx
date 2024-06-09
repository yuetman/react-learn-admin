
import { DownOutlined,UserOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space ,Avatar} from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginOut = () => {
    const navigateTo = useNavigate()
    const loginout = (e:React.MouseEvent<HTMLAnchorElement>)=>{
      e.preventDefault()
        if(confirm('确定退出')){
          localStorage.setItem('admin-token','')
          navigateTo('/login')
          message.success('退出登录成功')
      }
  }
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a  rel="noopener noreferrer" onClick={loginout} href='#'>
              退出登录
            </a>
          ),
        }
      ];
    
  return (
    <div>
    <Dropdown menu={{ items }}>
        <a>
        <Space>
          <Avatar style={{ backgroundColor: '#87d068' }} size="small" icon={<UserOutlined />} />
            <DownOutlined />
        </Space>
        </a>
    </Dropdown>
    </div>
  )

};

export default LoginOut;