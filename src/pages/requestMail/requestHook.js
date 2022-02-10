import Axios from "axios";
import { useEffect, useState } from "react";

export const useGetRequestUser = (refresh) => {
  const [requestUser, setRequestUser] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    console.log("Getting Request Data");
    const getData = async () => {
      let newDatas;
      try {
        if (user === "Student") {
          newDatas = await Axios.get(
            "http://52.14.19.229:8080/api/v1/students/requests",
            config
          );
        } else {
          newDatas = await Axios.get(
            "http://52.14.19.229:8080/api/v1/teachers/requests",
            config
          );
        }
      } catch (e) {
        console.error(e);
        if (e.response) {
          console.log(e.response);
          setRequestUser([]);
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
          setRequestUser(newDatas.data.data);
        }
      }
    };
    getData();
  }, [refresh]);
  return { requestUser, errorResponse };
};
