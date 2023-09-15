import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


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
Blogs.propTypes={
    handleAddCourse: PropTypes.func
    
}

export default Blogs;