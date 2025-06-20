import React from 'react'
// import Navbar from '../components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Login from '../authentication/login'
import SignUp from '../authentication/signup'
import Home from '../pages/home/home'


const routes=[
    {path:"/",  element:<Home/>},
    {path:"/login", element:<Login/>},
    {path:"/signup", element:<SignUp/>},
   
]
const Routing = () => {
  return (
    <div>
      <Routes>
        {routes.map(({element, path},index) => (
            <Route key={index} path={path} element={element}></Route>
        ))}
      </Routes>
    </div>
  )
}

export default Routing;
