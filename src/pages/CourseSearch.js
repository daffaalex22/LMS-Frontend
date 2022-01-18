import FilterFields from "../components/FilterFields";
import Box from "@mui/material/Box";
import CourseCardList from "../components/listCard/CourseCardList";
import { useNavigate } from "react-router";
import { GeneralContext } from "../contexts/GeneralContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { createSearchParams, useSearchParams, useLocation } from "react-router-dom";

const CourseSearch = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    searchQuery,
    difficultyQuery,
    categoryQuery,
    queryString,
    setQueryString
  } = useContext(GeneralContext)

  useEffect(() => {
    if (searchQuery || difficultyQuery || categoryQuery) {
      navigate({
        search: `?${createSearchParams({
          category: categoryQuery,
          search: searchQuery,
          difficulty: difficultyQuery,
        })}`
      })
    }
  }, [searchQuery, difficultyQuery, categoryQuery])

  useEffect(() => {
    setQueryString(location.search)
  }, [searchParams])

  useEffect(() => {
    console.log("querystring", queryString)
  }, [queryString])

  return (
    <Box sx={{ padding: "70px 0" }}>
      <FilterFields />
      <CourseCardList />
    </Box>
  );
};

export default CourseSearch;
