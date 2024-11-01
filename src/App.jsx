import './App.css';
import HeroSection from './components/HeroSection';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ExplorePage from './components/ExplorePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><HeroSection /><Footer /></>,
    },
    {
      path: "/explore/:id",
      element: <><Navbar /><ExplorePage /><Footer /></>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
