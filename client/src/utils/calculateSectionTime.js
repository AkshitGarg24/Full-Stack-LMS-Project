export default function calculateSectionTime(chapter) {
    let time = 0;
    chapter.chapterContent.forEach(x => {
        time += x.lectureDuration;
    });
    if (time < 60) {
        return `${time} minutes`
    }
    return `${Math.floor(time / 60)} hours${time % 60 ? ` and ${time % 60} minutes` : ''}`;
}