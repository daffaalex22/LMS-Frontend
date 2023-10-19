import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs({
  courseName,
  moduleName,
  readingName,
  videoName,
  courseId
}) {
  return (
    <div role="presentation" onClick={handleClick} >
      <Breadcrumbs aria-label="breadcrumb">
        <Link 
          underline="hover" 
          color="inherit" 
          to={`/courses/enroll/${courseId}`}
        >
          {courseName}
        </Link>
        <Link
          underline="hover"
          color="inherit"
          to={`/courses/enroll/${courseId}#modules`}
        >
          {moduleName}
        </Link>
        <Typography color="text.primary">{window.location.href.includes("readings") ?readingName : videoName}</Typography>
      </Breadcrumbs>
    </div>
  );
}
