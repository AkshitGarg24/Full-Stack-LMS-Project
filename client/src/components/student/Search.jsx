import { useRef } from "react";
import { useNavigate } from "react-router-dom"

const Search = () => {

    const navigate = useNavigate();
    const searchText = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/course-list/'+ searchText.current.value)
        searchText.current.value = '';
    }

  return (
    <form onSubmit={handleSubmit} className='flex gap-3 rounded-full md:w-3/4 w-9/10 md:text-lg text-sm'>
        <input type="search" ref={searchText} placeholder='Search For Courses' className='p-3 rounded-2xl w-full border-gray-600 border-1 bg-white'/>
        <button type='submit' className='bg-blue-600 text-white w-25 h-13 rounded-2xl cursor-pointer hover:bg-blue-700'>Search</button>
    </form>
  )
}

export default Search