export default function calculateCourseRatings(course){
    if(course.courseRatings.length == 0){
      return 0;
    }
    let totalRatings = 0;
    course.courseRatings.forEach(ratings => {
      totalRatings += ratings.rating
    });

    return (Math.floor(totalRatings/course.courseRatings.length))
}