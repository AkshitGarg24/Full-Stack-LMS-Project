import React from 'react'
import { assets } from '../../assets/assets'
import { Link, useMatch } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

    const isCourseList = useMatch('/course-list/*')
    const { openSignIn } = useClerk();
    const { user } = useUser();

    return (
        <div className={`lg:px-35 py-5 justify-between flex border-b-1 md:px-15 px-5 text-sm lg:text-lg ${!isCourseList && 'bg-cyan-100/70'}`}>
            <Link to='/' className='flex content-center'><img src={assets.logo} alt="Logo" className='cursor-pointer' /></Link>
            <div className='flex  sm:gap-10 gap-5 items-center'>
                <div className='items-center sm:gap-2 text-gray-600 flex min-w-auto flex-col sm:flex-row gap-0.5'>
                    <div>Become Educator</div >
                    <div className='sm:inline hidden'> | </div>
                    <div><Link to='/my-enrollments'>My Enrollments</Link></div>
                </div>
                <div className='hidden md:flex'>{user? <UserButton /> : <button onClick={()=> openSignIn()} className='p-4 bg-blue-600 text-white rounded-full cursor-pointer'>Create Account</button>}</div>
                <div className='md:hidden'>{user? <UserButton /> : <button onClick={()=> openSignIn()}><img src={assets.user_icon} alt="User_Icon" /></button>}</div>
            </div>
        </div>
    )
}

export default Navbar