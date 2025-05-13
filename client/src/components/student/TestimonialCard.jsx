import { assets } from "../../assets/assets"

const TestimonialCard = ({testimonial}) => {
  return (
    <div className='w-75 rounded-2xl border-gray-300 border-1 pb-10 shadow-xl hover:scale-110 transition-all min-w-65'>
        <div className='w-full h-[75px] bg-gray-300 flex gap-7 rounded-t-2xl p-3'>
          <img src={testimonial.image} alt="profile_pic" />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-medium">{testimonial.name}</p>
            <p className="text-sm">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-5 py-8">
          <div className="flex gap-1.5">{[...Array(5)].map((_,i) => (<img src={i < testimonial.rating ? assets.star : assets.star_blank} alt="star" key={i} />))}</div>
          <p className="text-gray-500">{testimonial.feedback}</p>
        </div>
    </div>
  )
}

export default TestimonialCard