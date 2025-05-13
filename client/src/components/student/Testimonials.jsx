
import { testimonials } from '../../context/atoms/testimonial.atom'
import TestimonialCard from './TestimonialCard'
import {useRecoilValue_TRANSITION_SUPPORT_UNSTABLE} from 'recoil'

const Testimonials = () => {

  const testimonialData = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(testimonials)

  return (
    <div className='pb-10'>
        <p className='text-center text-3xl font-bold'>Testimonials</p>
        <p className='text-center text-gray-600 lg:w-3/5 w-4/5 m-auto mt-2'>Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.</p>
        <div className='flex w-4/5 mx-auto justify-center gap-10 my-15 flex-wrap'>{testimonialData.map((testimonial) => <TestimonialCard testimonial={testimonial} key={testimonial.name}/>)}</div>
    </div>
  )
}

export default Testimonials