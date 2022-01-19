import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const useVideoData = () => {
  const { moduleId } = useParams();
  const [videosData, setVideosData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);

  useEffect(() => {
    console.log("Getting Data Video by");
    const getData = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(
          `http://13.59.7.136:8080/api/v1/modules/${moduleId}/videos`);
      } catch (e) {
        console.error(e);
        if (e.response) {
          console.log(e.response);
          setVideosData([]);
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
          setVideosData(newDatas.data.data);
        }
      }
    };
    getData();
  }, []);
  return { videosData, errorResponse, moduleId };
};

export const useReadingData = () => {
  const { moduleId } = useParams();
  const [readingsData, setReadingsData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);

  useEffect(() => {
    console.log("Getting Data Reading by module Id");
    const getData = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(`http://13.59.7.136:8080/api/v1/modules/${moduleId}/readings`);
      } catch (e) {
        console.error(e);
        if (e.response) {
          console.log(e.response);
          setReadingsData([]);
          setErrorResponse(e.response.data.message);
        } else if (e.request) {
          console.log(e.request);
          setErrorResponse("Server Error");
        }
      }
      if (newDatas) {
        console.log(newDatas);
        setReadingsData(newDatas.data.data);
      }
    };
    getData();
  }, []);
  return { readingsData, errorResponse,moduleId };
};

export const useModuleData = () => {
  const [moduleData, setModuleData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);

  useEffect(() => {
    console.log("Getting Module By Id tapi blm ada");
    const getData = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(
          "http://13.59.7.136:8080/api/v1/modules"
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
        setModuleData(newDatas.data.data);
      }
    };
    getData();
  }, []);
  return { moduleData, errorResponse };
};