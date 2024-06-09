import { ChangeEvent, useEffect, useState } from "react"
import styles from "./login.module.scss"
import initLoginBg from "./init"
import { Button, Input, message, Space } from "antd"
import "./login.less"
import {captchaAPI, loginAPI} from "@/request/api"
import { useNavigate } from "react-router-dom"


export default function Login() {
    //生命周期
    // 组件加载完执行，加载一个图片背景
    useEffect(()=>{
        initLoginBg()
        window.onresize = function(){initLoginBg()}
    },[])
    const navigateTo = useNavigate()
    //获取用户信息
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [catcha,setCatcha] = useState('')
    //const codeName:any = useRef('')

    const usernameChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setUserName(e.target.value)
    }
    const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }
    const catchaChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setCatcha(e.target.value)
    }
    const goLogin = async ()=>{
        console.log(username,password,catcha);
        if(username.trim()==='' ||password.trim()===''){
            message.warning('请输入完整信息！')
            return
        }
        // 请求登录接口
       /*  const loginRes = await loginAPI({
            username:username,
            password:password,
            code:catcha })
        console.log(loginRes); */
        const isLogin = true;
        if(/* loginRes.id */isLogin){
            // 1提示登录成功
            message.success("登录成功")
            // 2保存token localStorage
            localStorage.setItem('admin-token','abc123')
            // 3跳转到page1
            navigateTo('/page1')
            // 4.删除本地保存的uuid
        }
        
    }
    const  getCode = async ()=>{
        console.log(username,password,catcha);
        // 实际开发换成获取验证码接口
        const codeRes = await captchaAPI()
        console.log(codeRes);
        // 保存code
        //codeName.current.value = codeRes.author
       setCatcha(codeRes.author)
       

        
    }
  return (
    <div className={styles.loginPage}>
        {/* 背景图片 */}
        <canvas id="canvas" style={{display:"block"}}></canvas>
        <div className={styles.loginBox  + " loginbox"}>
            <div className={styles.title}>
                <h1>yuetman实验室&nbsp;·&nbsp;后台系统</h1>
                <p>Strive Everyday</p>
            </div>
            <div className="form">
                <Space direction="vertical" size="large" style={{display:'flex'}}>
                    <Input placeholder="用户名" onChange={usernameChange}/>
                    <Input.Password placeholder="密码" onChange={passwordChange}/>
                    <div className="captchaBox">
                        <Input placeholder="验证码" onChange={catchaChange} value={catcha}  />
                        <Button onClick={getCode} style={{marginLeft:'5px'}}>验证码获取</Button>
                    </div>
                    <Button type="primary" className="loginBtn" block onClick={goLogin}>登录</Button>
                </Space>

            </div>
        </div>
    </div>
  )
}
