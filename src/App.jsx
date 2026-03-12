import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import SignIn from './component/Signup';
import Home from './component/Home/Home';
function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path:'/home',
    element:<Home/>
  }
]);


  return <RouterProvider router={router} />;
}

export default App
