import { useRecoilState_TRANSITION_SUPPORT_UNSTABLE } from 'recoil'
import { previewAtom } from '../../context/atoms/preview.atom.js'
import { dummyCourses } from '../../assets/assets.js'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CourseChapter } from '../../components/student/index.js'
import YouTube from 'react-youtube'

const Player = () => {

  const { pathname } = useLocation()
  const [course, setCourse] = useState(dummyCourses[0])
  const [preview, setPreview] = useRecoilState_TRANSITION_SUPPORT_UNSTABLE(previewAtom)

  useEffect(() => {
    const filter = pathname.replace('/player/', '');
    const x = dummyCourses.find(item => item._id === filter)
    if (x) {
      if (x != course) {
        setCourse(x)
        setPreview(false)
      }

    } else {
      setCourse()
    }
  }, [pathname])

  return (
    <div className='min-h-[80vh] sm:px-10 md:px-25 px-5 py-20'>
      <div className='text-2xl font-semibold mb-12'>Course Structure</div>
      <div className='flex flex-col items-end'>
        <div className='mb-10 w-full min-h-20'>
          {
            preview.preview && pathname.includes('/player') ? <YouTube
              videoId={preview.lecture.lectureUrl.replace('https://youtu.be/', '')}
              opts={{ width: '100%', height: '650px' }}
            /> : <div className='text-2xl flex justify-center items-center'>Select lecture you want to watch</div>
          }
        </div>
        <button className='mb-10 p-5 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded-2xl'>Mark as done</button>
        <div className='w-full'>
          {course.courseContent.map((chapter, index) => (
            <CourseChapter chapter={chapter} key={index} setPreview={setPreview} />
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Player