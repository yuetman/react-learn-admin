import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化一般放到最上面
import 'rest-css'
// ui框架的样式

// 全局样式
import '@/assets/styles/global.scss' //绝对路径
// 组件的样式

import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom' 
import {Provider} from 'react-redux'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
