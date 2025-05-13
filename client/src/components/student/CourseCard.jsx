import { Link } from "react-router-dom";
import { assets } from "../../assets/assets"
import { useEffect, useState } from "react";

const CourseCard = ({course}) => {

  const [ratings, setRatings] = useState(0);

  useEffect(()=> {
    if(course.courseRatings.length == 0){
      setRatings(0);
      return;
    }
    let totalRatings = 0;
    course.courseRatings.forEach(ratings => {
      totalRatings += ratings.rating
    });

    setRatings(Math.floor(totalRatings/course.courseRatings.length))

  }, []);

  return (
    <Link to={'/course/' + course._id} className="w-65 rounded-xl border-gray-300 border-1 pb-5 hover:scale-110 transition-all">
        <img src={course.courseThumbnail} alt={course.courseTitle} className="rounded-t-xl" />
        <div className="p-3 flex flex-col gap-1">
            <p className="text-base font-medium">{course.courseTitle}</p>
            <p className="text-gray-500 text-sm">{course.educator}</p>
            <div className="flex text-sm">
              <p className="mr-1">{ratings}</p>
              {[...Array(5)].map((_, i)=>(<img key={i} src={i<ratings ? assets.star : assets.star_blank} />))}
              <p className="text-gray-500 ml-1">({course.courseRatings.length})</p>
            </div>
            <p className="font-medium">{import.meta.env.VITE_CURRENCY} {course.coursePrice}</p>
        </div>
    </Link>
  )
}

export default CourseCard