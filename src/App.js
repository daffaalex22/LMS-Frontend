import LoginTeacher from "./pages/LoginTeacher";
import RegisterTeacher from "./pages/RegisterTeacher";
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
import Layout from "./components/Layout";
import GeneralContextProvider from "./contexts/GeneralContext";
import TeacherCourse from "./pages/teacherCourse/TeacherCourse";
import TeacherProfile from "./pages/teacherProfile/TeacherProfile";
import InternalServerError from "./pages/internalServerError/InternalServerError";
import { storage } from "./firebase/firebase";
import StudentCourse from "./pages/studentCourse/StudentCourse";
import StudentProfile from "./pages/studentProfile/StudentProfile";

let theme = createTheme({
  palette: {
    primary: {
      300: "#7986CB",
      400: "#5C6BC0",
      main: "#3F51B5",
      800: "#fff",
    },
    secondary: {
      100: "#FFF9C4",
      200: "#FFF59D",
      300: "#FFF176",
      400: "#FFEE58",
      main: "#FFEB3B",
      600: "#FDD835",
      700: "#FBC02D",
    },
    error: {
      main: "#F44336",
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GeneralContextProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={<Navigate to="/student/login" />}
              />
              <Route path="/student/login" element={<LoginStudent />} />
              <Route path="/teacher/login" element={<LoginTeacher />} />
              <Route path="/student/register" element={<RegisterStudent />} />
              <Route path="/teacher/register" element={<RegisterTeacher />} />
              <Route exact path="/home" element={<Layout />} />
              <Route exact path="/courses" element={<Layout />} />
              <Route path="/courses/enroll/:id" element={<Layout />} />
              <Route exact path="/about-us" element={<Layout />} />
              <Route path="/teacher/courses" element={<TeacherCourse />} />
              <Route path="/student/courses" element={<StudentCourse />} />
              <Route path="/teacher/profile" element={<TeacherProfile />} />
              <Route path="/student/profile" element={<StudentProfile />} />
              <Route path="/help-faq" element={<Layout />} />
              <Route path="/server-error" element={<InternalServerError />} />
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
