import { dummyCourses, dummyEducatorData } from "../../assets/assets"

const CourseCard = () => {

    let course =dummyCourses[0];
    let educator = dummyEducatorData;

  return (
    <div className="w-1/5 rounded-xl border-gray-500 border-1">
        <img src={course.courseThumbnail} alt={course.courseTitle} className="rounded-t-xl" />
        <div className="p-3">
            <p className="text-base font-semibold">{course.courseTitle}</p>
            <p className="text-gray-500 text-sm">{educator.name}</p>
            <p className="font-medium">$ {course.coursePrice}</p>
        </div>
    </div>
  )
}

export default CourseCard