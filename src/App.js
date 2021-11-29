import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navBar/index';
import IndexRoutes from './components/routes/index';

function App() {
  return (
    <Router>
      <div className="App">
      
        <NavBar />

        <IndexRoutes />

      </div>
    </Router>
  );
}

export default App;
