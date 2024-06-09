const store = {
    state:{
        num:20
    },
    // 同步方法
    actions:{
        add1(newState:{num:number}){
            newState.num ++ 
        },
        add2(newState:{num:number},action:{type:string,val:number}){
            newState.num += action.val
        },
        add3(newState:{num:number},action:{type:string,val:number}){
            newState.num += action.val
        }
    },
    asyncActions:{
        asyncAdd1(dis:Function){
            setTimeout(() => {
                dis({type:"add1"})
            }, 1000);
        }
    },
    // 名字同一个管理
    // add1:"add1",
    // add2:"add2"
    // actionNames:{
    //     add1:"add1",
    //     add2:"add2"
    // }
    actionNames:{}
}
// action名称自动生成
let actionNames = {}
for(const key in store.actions) {
    actionNames[key] = key;
}
store.actionNames = actionNames;
export default store