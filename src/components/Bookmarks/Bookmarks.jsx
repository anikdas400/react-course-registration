import PropTypes, { number } from 'prop-types';


const Bookmarks = ({bookmarks,remaining,totalCredit,totalPrice}) => {
    // const{id,credit,course_name}=bookmarks
    return (
        <div className="md:w-1/4 mt-3 p-3 rounded-lg bg-slate-100">
            
            <h3 className='text-lg font-bold text-sky-600 mb-3'>Credit Hour Remaining: {remaining} hr</h3>
            <h2 className=" mb-4 text-2xl font-semibold ">Course Name</h2>
            
            {
                bookmarks.map((bookmark,idx) =>(
                    <li key={idx} className=" list-decimal text-slate-500 mb-6">{bookmark.course_name}</li>
                ))
            }
            <hr />
            <h2 className="mb-5 mt-2 font-semibold">Total Credit Hour : {totalCredit} hr</h2>
            <hr />
            <h4 className='mt-2 font-semibold'>Total Price: {totalPrice} USD</h4>
            
            
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.func,
    remaining: number,
    totalCredit: number,
    totalPrice: number
    
}
export default Bookmarks;