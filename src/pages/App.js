import '../styles/App.css';
import { HashRouter } from 'react-router-dom';
import AnimatedRoutes from '../components/AnimatedRoutes';


function App() {
  return (
    <HashRouter>
        <AnimatedRoutes/>
    </HashRouter>
  );
}

export default App;
