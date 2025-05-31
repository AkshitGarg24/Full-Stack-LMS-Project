export default function calculateCourseTime(course){
    let time = 0;
    course.courseContent.forEach(content => {
        content.chapterContent.forEach(chapter => {
            time += chapter.lectureDuration;
        })
    });
    if (time < 60) {
        return `${time} minutes`
    }
    return `${Math.floor(time / 60)} hours${time % 60 ? ` and ${time % 60} minutes` : ''}`;
}