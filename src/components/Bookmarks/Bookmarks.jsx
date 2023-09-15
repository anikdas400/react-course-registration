


const Bookmarks = ({bookmarks}) => {
    // const{id,credit,course_name}=bookmarks
    return (
        <div className="md:w-1/4">
            <h2 className="text-3xl">Bookmarks:{bookmarks.length}</h2>
            <h2 className=" mb-5 text-2xl font-semibold ">Course Name</h2>
            
            {
                bookmarks.map((bookmark,idx) =>(
                    <li key={idx} className=" list-decimal">{bookmark.course_name}</li>
                ))
            }
            <h2 className="mt-4">Total Credit Hour :</h2>
            
            
        </div>
    );
};

export default Bookmarks;