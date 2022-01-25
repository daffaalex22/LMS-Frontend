import { useState } from "react";
import { createContext } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [openEnrollment, setOpenEnrollment] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyQuery, setDifficultyQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [queryString, setQueryString] = useState("");
  const [refresh, setRefresh] = useState(1);

  //For Page Modules
  const [video, setVideo] = useState({
    title: "",
    moduleId: 0,
    url: "",
    caption: "",
    order: 0,
    attachment: "",
    quiz: ""
  });

  const [errorInput, setErrorInput] = useState({
    title: false,
  });

  const handleVideo = (e) => {
    const { name, value } = e.target;
    setVideo({ ...video, [name]: value });
    if (value !== "") {
      setErrorInput({ ...errorInput, [name]: false });
    }
    if (value === "") {
      setErrorInput({ ...errorInput, [name]: true });
    }
  };

  // Video Form Handler
  const [openVideoForm, setOpenVideoForm] = useState(false);
  const handleOpenVideoForm = () => {
    setOpenVideoForm(true);
  };
  const handleCloseVideoForm = () => {
    setOpenVideoForm(false);
    setIsEditingVideo(false)
  };
  const [isEditingVideo, setIsEditingVideo] = useState(false);
  const [error, setError] = useState(null);

  const value = {
    openEnrollment,
    setOpenEnrollment,
    searchQuery,
    setSearchQuery,
    difficultyQuery,
    setDifficultyQuery,
    categoryQuery,
    setCategoryQuery,
    queryString,
    setQueryString,
    video,
    setVideo,
    openVideoForm,
    setOpenVideoForm,
    handleOpenVideoForm,
    handleCloseVideoForm,
    errorInput,
    setErrorInput,
    handleVideo,
    isEditingVideo,
    setIsEditingVideo,
    error,
    setError
  }

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
