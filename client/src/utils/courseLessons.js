export default function calculateCourseLessons(course) {
    let courseLessons = 0;
    let courseContent = course.courseContent
    courseContent.forEach(x => {
        courseLessons += x.chapterContent.length;
    });
    return courseLessons;
}