import React from 'react'
import { Sidebar } from '../../components/educator'

const AddCourse = () => {
  return (
    <form className='sm:px-30 px-10 py-10 border-l-2 border-gray-300 flex flex-col gap-7 w-full justify-center'>
      <div className='text-2xl font-semibold'>Add Course</div>
      <div className='flex flex-col gap-2'>
        <p className='text-lg font-semibold'>Course Title</p>
        <input className='border-1 border-gray-300 p-3 rounded-2xl' type="text" placeholder='Enter Course Title' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-lg font-semibold'>Course Headings</p>
        <input className='border-1 border-gray-300 p-3 rounded-2xl' type="text" placeholder='Enter Course Headings' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-lg font-semibold'>Course Description</p>
        <textarea className='border-1 border-gray-300 p-3 rounded-2xl min-h-30' placeholder='Enter Course Description' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-lg font-semibold'>Course Price</p>
        <input className='border-1 border-gray-300 p-3 rounded-2xl' type="number" placeholder='Enter Course Price in dollars' />
      </div>
      <div className='flex justify-start flex-col gap-2'>
        <p className='text-lg font-semibold'>Upload Thumnail Photo</p>
        <input type='file' className='file:bg-blue-500 file:text-white file:p-5 file:rounded-2xl cursor-pointer hover:file:bg-blue-600' />
      </div>
      
      <div className='flex justify-center'>
        <button className='p-2 bg-gray-400 w-20 h-15 rounded-2xl text-white cursor-pointer hover:bg-gray-500 mt-10' type='submit'>Add</button>
      </div>  
    </form>
  )
}

export default AddCourse