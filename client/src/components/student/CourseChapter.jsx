import { assets } from "../../assets/assets"
import { useState } from "react";

const CourseChapter = ({ chapter }) => {

    const [visible, setVisible] = useState(false)

    function calculateSectionTime(chapter) {
        let time = 0;
        chapter.chapterContent.forEach(x => {
            time += x.lectureDuration;
        });
        if (time < 60) {
            return `${time} minutes`
        }
        return `${Math.floor(time / 60)} hours${time % 60 ? ` and ${time % 60} minutes` : ''}`;
    }

    function calculateLectureTime(time) {
        if (time < 60) {
            return `${time} minutes`
        }
        return `${Math.floor(time / 60)} hours${time % 60 ? ` and ${time % 60} minutes` : ''}`;
    }

    function handleClick() {
        setVisible(e => !e)
        console.log(visible)
    }

    return (
        <>
            <div className='w-full h-15 bg-gray-100 border-1 border-gray-400 px-5 flex items-center justify-between cursor-pointer' onClick={() => handleClick()}>
                <div className='flex gap-3'>
                    <img src={assets.down_arrow_icon} alt="Down_Arrow_Icon" className='w-3' />
                    <div>{chapter.chapterTitle}</div>
                </div>
                <div>{chapter.chapterContent.length} lectures - {calculateSectionTime(chapter)}</div>
            </div>
            {visible && <div className='py-5 px-10 bg-white border-1 border-gray-300'>
                {chapter.chapterContent.map((lecture, index) =>
                (<div key={index} className='flex items-center justify-between text-black h-10'>
                    <div className='flex items-center gap-3'>
                        <img src={assets.play_icon} alt="Play_Icon" />
                        <div>{lecture.lectureTitle}</div>
                    </div>
                    <div>{calculateLectureTime(lecture.lectureDuration)}</div>
                </div>)
                )}
            </div>}
        </>
    )
}

export default CourseChapter