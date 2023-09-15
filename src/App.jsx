
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const handleAddCourse = course =>{
    const newBookmarks=[...bookmarks,course]
    setBookmarks(newBookmarks)
   
  }
    

  
  return (
    <>
      
      <h1 className='text-3xl font-bold text-center'>Course Registration</h1>
      
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddCourse={handleAddCourse}></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        ></Bookmarks>
        
      </div>
      
    </>
  )
}

export default App
