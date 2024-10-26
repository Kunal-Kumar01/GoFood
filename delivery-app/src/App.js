import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
    
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path = "/Login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
