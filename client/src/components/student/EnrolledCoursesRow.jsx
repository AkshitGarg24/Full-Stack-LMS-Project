import { calculateCourseTime } from "../../utils/index.js";
import { useNavigate } from "react-router-dom";
import { Line } from 'rc-progress';

const EnrolledCoursesRow = ({ course }) => {

    const navigate = useNavigate()
    function handleClick() {
        navigate('/player/' + course._id)
    }

    return (
        <tr className="h-15 text-gray-500 border-gray-300 border-b-1">
            <td onClick={() => handleClick()} className="flex gap-5 items-center px-5 py-2">
                <img src={course.courseThumbnail} alt="Thumbnail" className="h-12 sm:block hidden" />
                <div className='cursor-pointer hover:text-blue-500 flex flex-col gap-2'>
                    <div>{course.courseTitle}</div>
                    <Line percent={4*100/10} strokeWidth={2} className="w-full"/>
                </div>
            </td>
            <td className="text-center sm:table-cell hidden">{calculateCourseTime(course)}</td>
            <td className="text-center">4/10 lectures</td>
            <td className="text-center">Ongoing</td>
        </tr>
    )
}

export default EnrolledCoursesRow