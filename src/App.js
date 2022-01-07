import LoginStudent from "./pages/LoginStudent";
import LoginTeacher from "./pages/LoginTeacher";
import RegisterStudent from "./pages/RegisterStudent";
import RegisterTeacher from "./pages/RegisterTeacher";
import CourseEnroll from "./pages/courseEnroll/CourseEnroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Layout from "./components/Layout";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route path="/student/login" element={<LoginStudent />} />
            <Route path="/teacher/login" element={<LoginTeacher />} />
            <Route path="/student/register" element={<RegisterStudent />} />
            <Route path="/teacher/register" element={<RegisterTeacher />} />
            <Route exact path="/home" element={<Layout />} />
            <Route exact path="/courses" element={<Layout />} />
            <Route path="/courses/enroll" element={<Layout />} />
            <Route exact path="/about-us" element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
