import { useNavigate } from 'react-router-dom'
import CourseCard from './CourseCard';
import { dummyCourses } from '../../assets/assets';

const CoursesSection = () => {

    const navigate = useNavigate();

    const handleCourses = () => {
        navigate('/course-list')
    }

  return (
    <div className='py-25 w-4/5 m-auto flex flex-col gap-5 items-center'>
        <p className='text-center text-3xl font-bold'>Learn from the best</p>
        <p className='text-center text-gray-600 md:w-3/5 w-4/5 m-auto'>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>
        
        <div className='grid xl:grid-rows-1 xl:grid-cols-4 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-4 gap-10 my-5'>{dummyCourses.slice(2,6).map((course) => <CourseCard course={course} key={course._id}/>)}</div>

        <button className='text-gray-500 border-gray-500 border-1 w-max p-3 rounded-full cursor-pointer hover:bg-gray-100' onClick={handleCourses}>Show All Courses</button>
    </div>
  )
}

export default CoursesSection