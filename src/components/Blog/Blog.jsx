

const Blog = ({blog}) => {
    const{id,course_name,img,credit,price,details} =blog;
    return (
        <div className="mt-6 p-1">
            <img src={img} alt="" />
            <h2 className="text-xl font-semibold">{course_name}</h2>
            <p className="text-sm font-normal text-slate-500">{details}</p>
            <div className="flex gap-8 items-center mt-3">
                <span></span><h2 className="text-base font-medium text-slate-600">price: {price}</h2>
                <span></span><h3 className="text-base font-medium text-slate-600">credit: {credit} hr</h3> 
            </div>
            <div className="text-center mt-4">
            <button className="p-3 rounded-lg bg-sky-600 w-full">Select</button>
            </div>
            
        </div>
    );
};

export default Blog;