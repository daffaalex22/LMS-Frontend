import LoginTeacher from "./pages/LoginTeacher";
import RegisterTeacher from "./pages/RegisterTeacher";
import "./App.css";
import LoginStudent from "./pages/LoginStudent";
import RegisterStudent from "./pages/RegisterStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import CourseEnroll from "./pages/courseEnroll/CourseEnroll";
import Layout from "./components/Layout";
import Content from "./components/Content";
import { Navigate } from "react-router";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Layout from "./components/Layout";
import GeneralContextProvider from "./contexts/GeneralContext";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GeneralContextProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Navigate to="/login" />} />
              <Route path="/student/login" element={<LoginStudent />} />
              <Route path="/teacher/login" element={<LoginTeacher />} />
              <Route path="/student/register" element={<RegisterStudent />} />
              <Route path="/teacher/register" element={<RegisterTeacher />} />
              <Route exact path="/home" element={<Layout />} />
              <Route exact path="/courses" element={<Layout />} />
              <Route path="/courses/enroll" element={<Layout />} />
              <Route path="/help-faq" element={<Layout />} />
              <Route exact path="/about-us" element={<Layout />} />
              <Route
                exact
                path="/module/:moduleId/readings/:id"
                element={<Content />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </GeneralContextProvider>
    </ThemeProvider>
  );
}

export default App;
