export default function calculateLectureTime(time) {
    if (time < 60) {
        return `${time} minutes`
    }
    return `${Math.floor(time / 60)} hours${time % 60 ? ` and ${time % 60} minutes` : ''}`;
}