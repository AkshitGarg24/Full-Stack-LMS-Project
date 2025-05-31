import { dummyStudentEnrolled } from "../../assets/assets"

const StudentsEnrolledComponent = () => {

  return (
    <div className="w-full lg:px-20 px-5 py-15 md:text-base text-sm">
      <div className="text-2xl font-semibold mb-10">Students Enrolled</div>
      <table className="w-full text-center table-auto">
        <thead>
          <tr className="h-15 border-b-2 border-gray-300">
            <th className="lg:table-cell hidden">#</th>
            <th>Student Name</th>
            <th>Course Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {dummyStudentEnrolled.map((student, i) => (<tr key={i} className="h-15 border-b-2 border-gray-300 overflow-x-auto">
            <td className="lg:table-cell hidden">{i + 1}</td>
            <td className="flex h-15 justify-center items-center gap-2"><img src={student.student.imageUrl} alt="Student_Photo" className="h-10 w-10 md:block hidden" />{student.student.name}</td>
            <td className="px-3">{student.courseTitle}</td>
            <td>{new Date(student.purchaseDate).toLocaleString()}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentsEnrolledComponent