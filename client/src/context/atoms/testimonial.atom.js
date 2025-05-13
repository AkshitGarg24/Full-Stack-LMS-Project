import { atom } from 'recoil'
import { dummyTestimonial } from '../../assets/assets'

export const testimonials = atom({
    key: 'testimonials',
    default: dummyTestimonial
})