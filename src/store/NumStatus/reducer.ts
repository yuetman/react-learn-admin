// 用来管理数据的
import handleNum from "./index";

const defaultState = {
  //num:20
  //num:handleNum.state.num
  ...handleNum.state,
};
const reducer = (
  state = defaultState,
  action: { type: string; val: number }
) => {
  console.log("reducer执行了");

  const newState = JSON.parse(JSON.stringify(state));
  /* switch(action.type){
        case handleNum.add1:
            //newState.num ++
            handleNum.actions.add1(newState)
        break;
        case handleNum.add2:
            //newState.num += action.val
            handleNum.actions.add2(newState,action)
        break;
    } */
  // 优化遍历
  // action.type 和 action对比
  for (const key in handleNum.actionNames) {
    if (action.type === handleNum.actionNames[key]) {
      handleNum.actions[handleNum.actionNames[key]](newState, action);
      break;
    }
  }

  return newState;
};
export default reducer;
