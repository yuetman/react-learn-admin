// 懒加载
import { lazy,Suspense} from "react"
import About from "@/views/About"

const Home = lazy(()=>import("../views/Home"))
const User = lazy(()=>import("../views/User"))

const Page1 = lazy(()=>import("../views/Page1"))
const Page2 = lazy(()=>import("../views/Page2"))
import Page301 from "@/views/Page301"
import { Navigate} from "react-router-dom"
import Login from "@/views/Login"

// 懒加载需要增加一个loading
const withLoadingComponet = (comp:JSX.Element)=> (
    <Suspense fallback={<div>loading...</div>}>
        {comp}
    </Suspense>
)

const routes =[ 
    // 嵌套路由
    /* {
        path:"/",
        element:<Navigate to="/page1"/>
    }, */
    {
        path:"/",
        element:<Home/>,
        children:[
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/user",
            element:<User/>
        },
        {
            path:"/page1",
            element:withLoadingComponet(<Page1/>)
        },
        {
            path:"/page2",
            element:withLoadingComponet(<Page2/>)
        },
        {
            path:"/page3/page301",
            element:withLoadingComponet(<Page301/>)
        },
        
       ]

    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"*",
        element:<Navigate to="/page1"/>
    }
  /*   {
        path:"/home",
        element:<Suspense fallback={<div>loading...</div>}>
        <Home/>
        </Suspense>
    }, */
    
]
export default routes