import { useState } from "react"
import { dummyCourses } from "../../assets/assets.js"
import { EnrolledCoursesRow } from "../../components/student/index.js";

const MyEnrollments = () => {

  const [enrolledCourses, setEnrolledCourses] = useState(dummyCourses);
  

  return (
    <div className='lg:px-25 sm:px-10 px-5 py-15 min-h-[80vh]'>
      <div className='text-3xl font-semibold mb-12'>My Enrollments</div>
      <table className='w-full'>
        <thead>
          <tr className='h-15'>
            <th>Course</th>
            <th className="sm:table-cell hidden">Duration</th>
            <th>Completed</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map((course, index) => (
            <EnrolledCoursesRow course={course} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyEnrollments