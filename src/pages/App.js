import '../styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../pages/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/main' element={<Main/>} />
      </Routes>
    </Router>
  );
}

export default App;
