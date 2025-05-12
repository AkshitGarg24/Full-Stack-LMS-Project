import React from 'react'
import { assets } from '../../assets/assets'
import Search from './Search'

const Hero = () => {
    return (
        <div className='bg-gradient-to-b from-cyan-100/70'>
            <div className='md:w-3/5 w-4/5 m-auto flex justify-center min-h-130 items-center flex-col gap-8'>
                <h1 className='md:text-5xl text-4xl text-center font-extrabold'>Empower your future with the courses designed to <span className='text-blue-600'>fit your choice.</span></h1>
                <div className='text-center md:w-3/4 w-4/5 text-gray-600'>We bring together world-class instructors, interactive content, and a supportive community to help you achive your personal and professional goals.</div>
                <Search />
            </div>
        </div>
    )
}

export default Hero