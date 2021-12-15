import './App.css';
import LoginStudent from './pages/LoginStudent';
import RegisterStudent from './pages/RegisterStudent'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginStudent />} />
          <Route path="/register" element={<RegisterStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
