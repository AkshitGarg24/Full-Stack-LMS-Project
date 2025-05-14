import { Link } from 'react-router-dom'
import { Search, CourseCard } from '../../components/student'
import { useRecoilValue_TRANSITION_SUPPORT_UNSTABLE } from 'recoil'
import { courseAtom } from '../../context/atoms/course.atom';

const CourseList = () => {

  const courses = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(courseAtom)

  return (
    <div className='py-15 md:px-30 px-15 flex flex-col gap-20'>
      <div className='flex justify-between md:flex-row md:gap-0 gap-3 flex-col'>
        <div>
          <p className='text-3xl font-semibold'>Course List</p>
          <p><Link to='/' className='text-blue-600'>Home</Link> / Course List</p>
        </div>
        <Search width='md:w-60/100 w-full' />
      </div>


      <div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-items-center w-full mx-auto'>
          {courses.map((course)=> <CourseCard course={course} />)}
          {courses.map((course)=> <CourseCard course={course} />)}
        </div>
      </div>
    </div>
  )
}

export default CourseList