import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <Router>
    <div className="app">
      <h1>Giovanna shines!</h1>
      <p>React on Rails</p>
      <NavBar />
      <AppRoutes />
    </div>
    </Router>
  )
}

export default App
