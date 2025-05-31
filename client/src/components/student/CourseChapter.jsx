import { assets } from "../../assets/assets"
import { useState } from "react";
import { calculateSectionTime, calculateLectureTime } from "../../utils/index.js";
import { useLocation } from "react-router-dom";

const CourseChapter = ({ chapter, setPreview }) => {

    const [visible, setVisible] = useState(false)
    const { pathname } = useLocation()

    function handleClick() {
        setVisible(e => !e)
    }

    function handlePreviewVideo(lecture){
        setPreview({
            preview: true,
            lecture
        })
    }

    return (
        <>
            <div className='sm:text-base text-sm w-full h-15 bg-gray-100 border-1 border-gray-400 px-5 flex items-center justify-between cursor-pointer' onClick={() => handleClick()}>
                <div className='flex gap-3'>
                    <img src={assets.down_arrow_icon} alt="Down_Arrow_Icon" className='w-3' />
                    <div>{chapter.chapterTitle}</div>
                </div>
                <div className="sm:block hidden">{chapter.chapterContent.length} lectures - {calculateSectionTime(chapter)}</div>
            </div>
            {visible && <div className='py-5 px-10 bg-white border-1 border-gray-300 sm:text-base text-sm'>
                {chapter.chapterContent.map((lecture, index) =>
                (<div key={index} className='flex items-center justify-between text-black h-10'>
                    <div className='flex items-center gap-3'>
                        <img src={assets.play_icon} alt="Play_Icon" />
                        <div>{lecture.lectureTitle}</div>
                    </div>
                    <div className="flex gap-3">
                        {pathname.includes('/course') && <div onClick={()=> handlePreviewVideo(lecture)} className={`text-blue-600 cursor-pointer ${index==0 ? "block": "hidden"}`}>Preview</div>}
                        {pathname.includes('/player') && <div onClick={()=> handlePreviewVideo(lecture)} className={`text-blue-600 cursor-pointer`}>Watch</div>}
                        <div className="sm:block hidden">{calculateLectureTime(lecture.lectureDuration)}</div>
                    </div>
                    
                </div>)
                )}
            </div>}
        </>
    )
}

export default CourseChapter