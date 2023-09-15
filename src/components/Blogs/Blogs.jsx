import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddCourse}) => {
    const [courses,setCourses] =useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="md:w-3/4 grid md:grid-cols-3 sm:grid-cols-2 sm:px-2 gap-2 ">
            
            {
                courses.map(course => <Blog 
                    key={course.id}
                    course={course}
                    handleAddCourse={handleAddCourse}
                    ></Blog>)
            }
            
        </div>
    );
};

export default Blogs;