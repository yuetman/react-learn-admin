import { Button } from "antd"
import {UpCircleOutlined} from "@ant-design/icons"
import styles from "./comp1.module.scss"
function Comp() {
  return (
    <div className={styles.box}>
      <p>这个是comp1的内容</p>
      <Button type="primary">按钮</Button>
      <UpCircleOutlined style={{fontSize:"40px",color:"#ffff"}}/>
    </div>
  )
}
export default  Comp
