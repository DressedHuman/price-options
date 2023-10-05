import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import PriceOptions from './components/PriceOptions/PriceOptions';
import LineChart from './components/LineChart/LineChart';
import Phones from './components/Phones/Phones';
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '/products', name: 'Products' },
    { id: 6, path: '/blog', name: 'Blog' },
    { id: 7, path: '/dashboard', name: 'Dashboard' }
  ];

  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  }

  return (
    <>
      <NavBar routes={routes} handleOpenMenu={handleOpenMenu} open={open} />
      {/* <h1 className='text-7xl text-sky-500'>Farhana Humayara</h1>
      <PriceOptions />
      <LineChart/> */}
      <Phones />
    </>
  )
}

export default App
