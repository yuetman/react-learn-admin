// 用来管理数据的
import handleArr from "./index"


const reducer = (state = {...handleArr.state},action:{type:string,val:number})=> {
    console.log('reducer执行了');
    
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case handleArr.sarrpush:
            //newState.num ++
            handleArr.actions.sarrpush(newState,action)
        break;
     
    }
    return newState
}
export default reducer