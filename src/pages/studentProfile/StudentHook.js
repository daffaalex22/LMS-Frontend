import Axios from "axios";
import { useEffect, useState } from "react";

export const useGetStudentData = (refresh) => {
  const [studentData, setStudentData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);

  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    console.log("Getting Data Student");
    const getData = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(
          "https://inedu-backend.onrender.com/api/v1/students/profile",
          config
        );
      } catch (e) {
        console.error(e);
        if (e.response) {
          console.log(e.response);
          setStudentData([]);
          setErrorResponse(e.response.data?.meta);
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
          setStudentData(newDatas.data.data);
        }
      }
    };
    getData();
  }, [refresh]);
  return { studentData, errorResponse };
};
