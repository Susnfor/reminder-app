import '../styles/App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../pages/Main';
import { AnimatePresence } from 'framer-motion';


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Home/>} />
        <Route path='/main' element={<Main/>} />
      </Routes>
      </AnimatePresence>
  );
}

export default AnimatedRoutes;
