export default {
    state:{
        sarr:[10,20,30]
    },
    actions:{
        sarrpush(newState:{sarr:number[]},action:{type:string,val:number}){
            newState.sarr = [...newState.sarr,action.val]
        }
       
    },
    // 名字同一个管理
    sarrpush:"sarrpush",
    
}