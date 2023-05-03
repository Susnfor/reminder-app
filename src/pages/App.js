import '../styles/App.css';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import AnimatedRoutes from '../components/AnimatedRoutes';


function App() {
  return (
    // <Router basename='/'>
       <HashRouter basename="/">
        <AnimatedRoutes/>
       </HashRouter>
    // </Router>
  );
}

export default App;
