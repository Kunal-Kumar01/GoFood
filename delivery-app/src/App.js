import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screens/SignUp';

function App() {
  return (
    <Router>
    
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path = "/Login" element={<Login/>}/>
          <Route path = "/SignUp" element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
