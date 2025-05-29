import { Link, useLocation } from 'react-router-dom'
import { Search, CourseCard } from '../../components/student'
import { useRecoilValue_TRANSITION_SUPPORT_UNSTABLE } from 'recoil'
import { courseAtom } from '../../context/atoms/course.atom';
import { useEffect, useState } from 'react';
import { dummyCourses } from '../../assets/assets';

const CourseList = () => {

  const { pathname } = useLocation()
  const [courses, setCourses] = useState(dummyCourses)
  const [tempCourses, setTempCourses] = useState(courses)

  useEffect(() => {
    if (pathname === '/course-list') {
      setTempCourses(courses);
    } else if (pathname.startsWith('/course-list/') && pathname.split('/').length > 2) {
      const filter = pathname.replace('/course-list/', '');
      setTempCourses(
        courses.filter(item => item.courseTitle.toLowerCase().includes(filter.toLowerCase()))
      );
    }
  }, [pathname, courses])

  return (
    <div className='py-15 md:px-30 px-15 flex flex-col gap-20 min-h-150'>
      <div className='flex justify-between md:flex-row md:gap-0 gap-3 flex-col'>
        <div>
          <p className='text-3xl font-semibold'>Course List</p>
          <p><Link to='/' className='text-blue-600'>Home</Link> / Course List</p>
        </div>
        <Search width='md:w-60/100 w-full' />
      </div>


      <div>
        <div className='flex flex-wrap w-full mx-auto px-4/10 gap-5'>
          {tempCourses.map((course, index) => <CourseCard key={index} course={course} />)}
          {tempCourses.map((course, index) => <CourseCard key={index} course={course} />)}
        </div>
      </div>
    </div>
  )
}

export default CourseList