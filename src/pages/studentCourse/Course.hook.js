import Axios from "axios";
import { useEffect, useState } from "react";

export const useTeacherCourseData = (refresh) => {
  const [courseData, setCourseData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);

  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    console.log("Getting Data Course Teacher");
    const getData = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(
          "https://inedu-backend.onrender.com/api/v1/students/courses",
          config
        );
      } catch (e) {
        console.error(e);
        if (e.response) {
          console.log(e.response);
          setCourseData([]);
          setErrorResponse(e.response.data.meta.message);
        } else if (e.request) {
          console.log(e.request);
          setErrorResponse("Server Error");
        }
      }
      if (newDatas) {
        console.log(newDatas);
        if (newDatas.data.meta.status !== 200) {
          setErrorResponse(newDatas.data.meta.message);
        } else {
          setCourseData(newDatas.data.data);
        }
      }
    };
    getData();
  }, [refresh]);
  return { courseData, errorResponse };
};
