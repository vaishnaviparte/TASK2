'use client';
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import courses from "./components/courses"
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {

const [courses, setCourses] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() =>{
  const fetchCourses = async () =>{
    const res = await fetch('/api/hello/courses');
    const data = await res.json();
    setCourses(data);
    setLoading(false);
  }

fetchCourses();

}, []);

if(loading){
  return <LoadingPage />
}

  return (
   <>
   <h1>Welcome to the NEXT.JS!</h1>
   <CourseSearch getSearchResults={(results) => setCourses(results)}/>
   <courses courses={courses} />
  
   </>
  )
}

export default HomePage