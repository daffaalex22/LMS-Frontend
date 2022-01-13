import Axios from "axios";
import { useEffect, useState } from "react";

export const useGetCourseData = (refresh) => {
  const [courseData, setCourseData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);

  useEffect(() => {
    console.log("Getting Data Course Teacher");
    const getData = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get("http://13.59.7.136:8080/api/v1/courses");
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
