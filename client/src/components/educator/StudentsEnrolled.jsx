import { dummyStudentEnrolled } from "../../assets/assets"

const StudentsEnrolledComponent = () => {

  return (
    <div className="w-full px-20 py-15">
      <table className="w-full text-center tabl;e">
        <thead>
          <tr className="h-15 border-b-2 border-gray-300">
            <th>#</th>
            <th>Student Name</th>
            <th>Course Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {dummyStudentEnrolled.map((student, i) => (<tr key={i} className="h-15 border-b-2 border-gray-300">
            <td>{i + 1}</td>
            <td className="flex h-15 justify-center items-center gap-2"><img src={student.student.imageUrl} alt="Student_Photo" className="h-10 w-10" />{student.student.name}</td>
            <td>{student.courseTitle}</td>
            <td>{new Date(student.purchaseDate).toLocaleString()}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentsEnrolledComponent