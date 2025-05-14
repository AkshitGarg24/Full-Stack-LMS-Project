import { dummyCourses } from "../../assets/assets"
import CourseRow from "./CourseRow"

const Courses = () => {
    return (
        <div className='py-10 w-full'>
            <table className='w-full text-center'>
                <thead className='h-15'>
                    <tr className='border-b-2 border-gray-300'>
                        <th className='w-1/2'>All Courses</th>
                        <th>Earnings</th>
                        <th>Students</th>
                        <th>Course Status</th></tr>
                </thead>
                <tbody>
                    {dummyCourses.map((course,i)=> <CourseRow course={course} key={i}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Courses