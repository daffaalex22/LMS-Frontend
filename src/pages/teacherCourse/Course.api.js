import { useState } from "react";
import Axios from "axios";

export const useInsertNewCourse = async (data) => {
  const [response, setResponse] = useState(null);
  let feedback;
  try {
    feedback = await Axios.post(
      "http://localhost:8080/api/v1/students/login",
      data
    );
  } catch (e) {
    console.error(e);
    if (e.response) {
      console.log(e.response);
      setResponse(e.response.data.message);
    } else if (e.request) {
      console.log(e.request);
      setResponse("Server Error");
    }
  }
  if (feedback) {
    console.log(feedback);
    setResponse(feedback.data.data);
  }
  return { response };
};
