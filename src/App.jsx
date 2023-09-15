
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const [remaining,setRemaining] =useState(20)
  const [totalCredit,setTotalCredit]=useState(0)
  const [totalPrice,setTotalPrice]=useState(0)

  const handleAddCourse = course =>{

    const isExist = bookmarks.find((item)=>item.id == course.id)
    let count = course.credit
    let price =course.price
    if(isExist){
     return alert('this item has been already exist')
    }
    else{
      bookmarks.forEach((item)=>{
        count=count +item.credit
        price=price +item.price
      })

      
      const totalremaining = 20-count;

      if(count > 20){
        return alert("your credit hours has been finished")
      }

      
      setTotalPrice(price)
      setTotalCredit(count)
      setRemaining(totalremaining)
      const newBookmarks=[...bookmarks,course]
      setBookmarks(newBookmarks)
    }
    
   
  }
    

  
  return (
    <>
      
      <h1 className='text-3xl font-bold text-center'>Course Registration</h1>
      
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddCourse={handleAddCourse}></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        remaining={remaining}
        totalCredit={totalCredit}
        totalPrice={totalPrice}
        ></Bookmarks>
        
      </div>
      
    </>
  )
}

export default App
