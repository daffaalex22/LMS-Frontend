import Axios from "axios";
import { useEffect, useState } from "react";

export const useTeacherCourseData = (refresh) => {
  const [courseData, setCourseData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);

  useEffect(() => {
    console.log("Getting Data Course Teacher");
    const getData = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(
          "http://localhost:8080/api/v1/teachers/courses"
        );
      } catch (e) {
        console.error(e);
        if (e.response) {
          console.log(e.response);
          setErrorResponse(e.response.data.message);
        } else if (e.request) {
          console.log(e.request);
          setErrorResponse("Server Error");
        }
      }
      if (newDatas) {
        console.log(newDatas);
        setCourseData(newDatas.data.data);
      }
    };
    getData();
  }, [refresh]);
  return { courseData, errorResponse };
};

export const useGetAllCategoryData = (refresh) => {
  const [categoryData, setCategoryData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);

  useEffect(() => {
    console.log("Getting Data Categories");
    const getData = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get("http://localhost:8080/api/v1/categories");
      } catch (e) {
        console.error(e);
        if (e.response) {
          console.log(e.response);
          setErrorResponse(e.response.data.message);
        } else if (e.request) {
          console.log(e.request);
          setErrorResponse("Server Error");
        }
      }
      if (newDatas) {
        console.log(newDatas);
        setCategoryData(newDatas.data.data);
      }
    };
    getData();
  }, [refresh]);
  return { categoryData, errorResponse };
};
