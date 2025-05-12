import React from 'react'
import { assets } from '../../assets/assets'
import { Link, useMatch } from 'react-router-dom'

const Navbar = () => {

    const isCourseList = useMatch('/course-list/*')

    return (
        <div className={`lg:px-35 py-5 justify-between flex border-b-1 md:px-15 px-5 text-sm lg:text-lg ${!isCourseList && 'bg-cyan-100/70'}`}>
            <Link to='/' className='flex content-center'><img src={assets.logo} alt="Logo" className='cursor-pointer' /></Link>
            <div className='flex  sm:gap-10 gap-5'>
                <div className='items-center sm:gap-2 text-gray-600 flex min-w-auto flex-col sm:flex-row gap-0.5'>
                    <div>Become Educator</div >
                    <div className='sm:inline hidden'> | </div>
                    <div><Link to='/my-enrollments'>My Enrollments</Link></div>
                </div>
                <button className='p-4 bg-blue-600 text-white rounded-full cursor-pointer hidden md:block'>Create Account</button>
                <button className='md:hidden'><img src={assets.user_icon} alt="User_Icon" /></button>
            </div>
        </div>
    )
}

export default Navbar