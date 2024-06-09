import { Button, message } from 'antd'
import {useSelector,useDispatch} from 'react-redux'
import NumStatus from "../store/NumStatus"
//import { useNavigate } from 'react-router-dom'


const View = () => {
    //const navigateTo = useNavigate()
    const {num,sarr} = useSelector((state:RootState)=>({
        num:state.handleNum.num,
        sarr:state.handleArr.sarr //对sar操作
    }))
    const dispatch = useDispatch()
    const changeNum = ()=>{
        dispatch({type:"add1"})
    }
    const changeNum2 = ()=>{
        // dispatch({type:"add2",val:200})
        dispatch(NumStatus.asyncActions.asyncAdd1)
    }
    const changeNum3 = ()=>{
        dispatch({type:"add2",val:3})
    }
 
    return (
        <div className="home">
            这里是page1首页
            <p>值{num}</p>
            <Button type='primary' onClick={changeNum}>点击变化</Button>
            <Button type='primary' onClick={changeNum2}>点击异步变化2</Button>
            <Button type='primary' onClick={changeNum3}>点击变化3</Button>
        
            数组{sarr}
        </div>
    )
}
export default View