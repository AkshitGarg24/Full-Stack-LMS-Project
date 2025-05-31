import { Link, useLocation } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const { pathname } = useLocation();

  return (
    <div className="grid grid-rows-3 lg:w-75 md:w-45 w-full">
      <Link to='/educator/my-courses'>
        <div className={`flex gap-3 w-full h-18 items-center justify-center ${pathname == '/educator/my-courses' && "bg-blue-100 md:border-r-4 md:border-b-0 border-b-4 border-blue-700"}`}>
          <img src={assets.my_course_icon} alt="my_course_icon" />
          <p>My Courses</p>
        </div>
      </Link>
      <Link to='/educator/add-course'>
        <div className={`flex gap-3 w-full h-18 items-center justify-center ${pathname == '/educator/add-course' && "bg-blue-100 md:border-r-4 md:border-b-0 border-b-4 border-blue-700"}`}>
          <img src={assets.add_icon} alt="add_icon" className='w-6 h-6' />
          <p>Add Course</p>
        </div>
      </Link>
      <Link to='/educator/students-enrolled'>
        <div className={`flex gap-3 w-full h-18 items-center justify-center ${pathname == '/educator/students-enrolled' && "bg-blue-100 md:border-b-0 md:border-r-4 border-b-4 border-blue-700"}`}>
          <img src={assets.person_tick_icon} alt="person_tick_icon" />
          <p>Students Enrolled</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar