import './App.css';
import LoginStudent from './pages/LoginStudent';
import RegisterStudent from './pages/RegisterStudent';
import CourseSearch from './pages/CourseSearch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import CourseEnroll from './pages/courseEnroll/CourseEnroll';
import Layout from './components/Layout';

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
            <Route exact path="/home" element={<Layout />} />
            <Route exact path="/courses" element={<Layout />} />
            <Route path="/courses/enroll" element={<Layout />} />
            <Route exact path="/about-us" element={<Layout />} />
            <Route exact path="/reading" element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
