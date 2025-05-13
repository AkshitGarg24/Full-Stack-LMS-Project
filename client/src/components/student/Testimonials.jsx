
import { dummyTestimonial } from '../../assets/assets'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  console.log(dummyTestimonial)
  return (
    <div className='pb-10'>
        <p className='text-center text-3xl font-bold'>Testimonials</p>
        <p className='text-center text-gray-600 lg:w-3/5 w-4/5 m-auto mt-2'>Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.</p>
        <div className='flex w-4/5 mx-auto justify-center gap-10 my-15 flex-wrap'>{dummyTestimonial.map((testimonial) => <TestimonialCard testimonial={testimonial} key={testimonial.name}/>)}</div>
    </div>
  )
}

export default Testimonials