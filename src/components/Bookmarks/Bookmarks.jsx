


const Bookmarks = ({bookmarks,remaining,totalCredit,totalPrice}) => {
    // const{id,credit,course_name}=bookmarks
    return (
        <div className="md:w-1/4">
            <h2 className="text-3xl">Bookmarks:{bookmarks.length}</h2>
            <h3>Credit Hour Remaining:{remaining}</h3>
            <h2 className=" mb-5 text-2xl font-semibold ">Course Name</h2>
            
            {
                bookmarks.map((bookmark,idx) =>(
                    <li key={idx} className=" list-decimal">{bookmark.course_name}</li>
                ))
            }
            <h2 className="mt-4">Total Credit Hour : {totalCredit}</h2>
            <h4>Total Price: {totalPrice} USD</h4>
            
            
        </div>
    );
};

export default Bookmarks;