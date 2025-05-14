import { Courses } from "../../components/educator"

const MyCourses = () => {
  return (
    <div className="w-full lg:px-20 px-10 py-10 border-l-2 border-gray-300">
      <p className="text-2xl font-semibold">My Courses</p>
      <Courses />
    </div>
  )
}

export default MyCourses