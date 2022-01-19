import Axios from "axios";
import { useEffect, useState } from "react";

export const useGetUserData = (refresh) => {
  const [teacherData, setTeacherData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);
  const [url, setUrl] = useState("");

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    if (user === "Student") {
      setUrl("http://13.59.7.136:8080/api/v1/students/profile");
    } else {
      setUrl("http://13.59.7.136:8080/api/v1/teachers/profile");
    }
    console.log("Getting Data User");
    const getData = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(url, config);
      } catch (e) {
        console.error(e);
        if (e.response) {
          console.log(e.response);
          setTeacherData([]);
          setErrorResponse(e.response.data?.meta);
        } else if (e.request) {
          console.log(e.request);
          setErrorResponse("Server Error");
        }
      }
      if (newDatas) {
        console.log(newDatas);
        if (newDatas.data.meta.status !== 200) {
          setErrorResponse(newDatas.data.meta);
        } else {
          setTeacherData(newDatas.data.data);
        }
      }
    };
    getData();
  }, [refresh]);
  return { teacherData, errorResponse };
};
