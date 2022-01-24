import Axios from "axios";
import { useEffect, useState } from "react";

export const useGetJsonData = (url) => {
  const [jsonData, setJsonData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);

  useEffect(() => {
    console.log("Getting Data");
    const getData = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(url);
      } catch (e) {
        console.error(e);
        if (e.response) {
          console.log(e.response);
          setJsonData([]);
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
          setJsonData(newDatas.data.data);
        }
      }
    };
    getData();
  }, []);
  return { jsonData, errorResponse };
};
