import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Categories from './components/Categories';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
