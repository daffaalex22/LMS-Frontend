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
    refresh,
    setRefresh,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
