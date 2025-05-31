import { useState } from "react";
import Switch from "react-switch";

const CourseRow = ({ course }) => {

    const [switchValue, setSwitchValue] = useState(true)

    const handleChange = () => {
        setSwitchValue(e=> !e)
    }

    return (
        <tr className="h-20 border-b-2 border-gray-300">
            <td className="flex gap-3 h-20 items-center pl-5">
                <img className="w-17 sm:block hidden" src={course.courseThumbnail} alt="Course_Thumbnail" />
                <p className="min-[450px]:block hidden px-3">{course.courseTitle}</p>
                <p className="max-[450px]:block hidden">{course.courseTitle.slice(0,10)}...</p>
            </td>
            <td>{import.meta.env.VITE_CURRENCY} {(course.coursePrice * course.enrolledStudents.length).toFixed(2)}</td>
            <td>{course.enrolledStudents.length}</td>
            <td><Switch checked={switchValue} onChange={handleChange} /></td>
        </tr>
    )
}

export default CourseRow