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
import ContentTeacher from "./components/ContentTeacher";
import Layout from "./components/Layout";
import Content from "./components/Content";
import GeneralContextProvider from "./contexts/GeneralContext";
import TeacherCourse from "./pages/teacherCourse/TeacherCourse";
import TeacherProfile from "./pages/teacherProfile/TeacherProfile";
import InternalServerError from "./pages/internalServerError/InternalServerError";
import StudentCourse from "./pages/studentCourse/StudentCourse";
import StudentProfile from "./pages/studentProfile/StudentProfile";
import RequestMail from "./pages/requestMail/RequestMail";
import VideosPage from "./pages/videosPage/VideosPage";

let theme = createTheme({
  palette: {
    primary: {
      300: "#7986CB",
      400: "#5C6BC0",
      main: "#3F51B5",
      600: "#3949ab",
      700: "#303f9f",
      800: "#283593",
      900: "#1a237e",
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
              <Route path="/student/request" element={<RequestMail />} />
              <Route path="/teacher/request" element={<RequestMail />} />
              <Route path="/help-faq" element={<Layout />} />
              <Route
                path="/modules/:moduleId/videos/:videoId"
                element={<Content />}
              />
              <Route path="/server-error" element={<InternalServerError />} />
              <Route
                exact
                path="/modules/:moduleId/readings/:id"
                element={<Content />}
              />
              <Route
                exact
                path="/modules/:moduleId/readings-teacher/:id"
                element={<ContentTeacher />}
              />
              <Route
                exact
                path="/modules/:moduleId/readings-teacher"
                element={<ContentTeacher />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </GeneralContextProvider>
    </ThemeProvider>
  );
}

export default App;
