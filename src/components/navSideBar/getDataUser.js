import Axios from "axios";
import { useEffect, useState } from "react";

export const useGetUserData = (refresh) => {
  const [userData, setUserData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);
  const [getLink, setGetLink] = useState("");

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    console.log("Getting Data User");
    const getData = async () => {
      let newDatas;
      try {
        if (user === "Student") {
          newDatas = await Axios.get(
            "http://13.59.7.136:8080/api/v1/students/profile",
            config
          );
        } else {
          newDatas = await Axios.get(
            "http://13.59.7.136:8080/api/v1/teachers/profile",
            config
          );
        }
      } catch (e) {
        console.error(e);
        if (e.response) {
          // console.log(e.response);
          setUserData([]);
          setErrorResponse(e.response.data?.meta);
        } else if (e.request) {
          // console.log(e.request);
          setErrorResponse("Server Error");
        }
      }
      if (newDatas) {
        // console.log(newDatas);
        if (newDatas.data.meta.status !== 200) {
          setErrorResponse(newDatas.data.meta);
        } else {
          setUserData(newDatas.data.data);
        }
      }
    };
    getData();
  }, [refresh]);
  return { userData, errorResponse };
};
