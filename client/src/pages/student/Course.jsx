import { useState } from 'react'
import { dummyCourses, assets } from './../../assets/assets.js'
import { calculateCourseLessons, calculateCourseRatings } from '../../utils/index.js'
import { CourseChapter } from '../../components/student/index.js'

const Course = () => {

  const course = dummyCourses[3];
  const ratings = calculateCourseRatings(course)
  

  

  return (
    <div className='px-20 py-30 flex gap-10 bg-gradient-to-b from-cyan-100/70'>
      <div className='h-10 w-full'>
        <div className='flex flex-col gap-5 mb-15'>
          <div className='text-4xl font-bold'>{course.courseTitle}</div>
          <div className='text-gray-600'>{course.courseDescription}</div>
          <div className="flex text-sm">
            <p className="mr-1">{ratings}</p>
            {[...Array(5)].map((_, i) => (<img key={i} src={i < ratings ? assets.star : assets.star_blank} />))}
            <p className="text-gray-500 ml-1">({course.courseRatings.length} ratings)</p>
          </div>
          <div className='text-gray-600'>Course by <span className='text-blue-500'>{course.educator}</span></div>
        </div>

        <div className='mb-15'>
          <div className='text-2xl font-semibold mb-10'>Course Structure</div>
          {course.courseContent.map((chapter, index) => (
            <CourseChapter chapter={chapter} key={index} />
          ))}
        </div>
      </div>


      <div className='w-200 border-1 rounded-2xl border-gray-300 shadow-lg pb-10'>
        <img src={course.courseThumbnail} alt="Course_Thumbnail" className='rounded-t-2xl' />
        <div className='px-10 py-5 flex flex-col gap-6'>
          <div className='flex gap-3 items-center'>
            <div className='text-2xl font-medium'>{import.meta.env.VITE_CURRENCY} {(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</div>
            <div className='line-through text-gray-600 text-lg'>{import.meta.env.VITE_CURRENCY} {course.coursePrice}</div>
            <div className='text-gray-600 text-lg'>{course.discount}% off</div>
          </div>
          <div className='flex gap-2'>
            <div className='flex items-center gap-1'>
              <img src={assets.star} alt="Star" />
              <div>{ratings}</div>
            </div>
            |
            <div className='flex gap-1'>
              <img src={assets.lesson_icon} alt='lesson_icon' />
              <div>{calculateCourseLessons(course)} lessons</div>
            </div>
          </div>
          <div className='w-full px-5'>
            <button className='bg-blue-500 text-white p-5 rounded-2xl w-full cursor-pointer hover:bg-blue-600'>Enroll Now</button>
          </div>
          <div>
            <div className='text-xl font-medium mb-2'>What's in this course</div>
            <div className='flex flex-col gap-1 text-gray-500'>
              <li>Lifetime access with free updates.</li>
              <li>Step-by-Step hands on project guidance.</li>
              <li>Downloadable resources and source code.</li>
              <li>Quizess to test your knowledge.</li>
              <li>Certificate of Completion.</li>
              <li>Quizzes to test your knowledge.</li>
            </div>
          </div>
        </div>



      </div>


    </div>
  )
}

export default Course