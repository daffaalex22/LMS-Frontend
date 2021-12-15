import './App.css';
import LoginStudent from './pages/LoginStudent';
import RegisterStudent from './pages/RegisterStudent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginStudent />} />
            <Route path="/register" element={<RegisterStudent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
