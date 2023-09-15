import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks}) => {
    const{credit}=bookmarks
    return (
        <div className="md:w-1/4">
            <h2 className="text-3xl">Bookmarks:{bookmarks.length}</h2>
            <h2 className=" mb-5 text-2xl font-semibold ">Course Name</h2>
            
            {
                bookmarks.map(bookmark => <Bookmark 
                    bookmark={bookmark}
                    ></Bookmark>)
            }
            <h2 className="mt-4">Total Credit Hour :</h2>
            
            
        </div>
    );
};

export default Bookmarks;