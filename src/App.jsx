import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import Left from './components/Left'
import Right from './components/Right'
import Cursor from './components/Cursor'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ExplorePage from './components/ExplorePage'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      // element: <><Navbar/><Test/></>,
      element: <><HeroSection/></>,
    },
    {
      path: "/explore/:id",
      element: <ExplorePage/>,
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
