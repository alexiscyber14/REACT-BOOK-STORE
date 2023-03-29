import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<CategoriesComponent />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
