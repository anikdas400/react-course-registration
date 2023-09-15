import { FaDollarSign } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({course,handleAddCourse}) => {
    const{course_name,img,credit,price,details} =course;
    return (
        <div className="mt-6 p-1 space-y-3">
            <img src={img} alt="" />
            <h2 className="text-xl font-semibold">{course_name}</h2>
            <p className="text-sm font-normal text-slate-500">{details}</p>
            <div className="flex gap-2 items-center mt-3">
            <span className='ml-6'><FaDollarSign></FaDollarSign></span><h2 className="text-base mr-2 font-medium text-slate-600">price: {price}</h2>
            <span className='ml-6'><FaBookOpen></FaBookOpen></span><h3 className="text-base  font-medium text-slate-600">credit: {credit} hr</h3> 
            </div>
            <div className="text-center mt-4 p-3">
            <button onClick={()=>handleAddCourse(course)} className="p-3 rounded-xl bg-sky-600 w-full text-white">Select</button>
            </div>
            
        </div>
    );
};

Blog.propTypes={
    handleAddCourse: PropTypes.func,
    course: PropTypes.object.isRequired
}

export default Blog;