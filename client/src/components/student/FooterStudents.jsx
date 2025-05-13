import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const FooterStudents = () => {
    return (
        <div className='bg-blue-950 px-5 pb-5 pt-10 flex flex-col gap-10 text-center'>
            <div className='flex lg:w-9/10 w-fit m-auto justify-around lg:flex-nowrap flex-wrap gap-5 sm:flex-row flex-col items-center'>
                <div className='md:w-2/5 w-4/5 px-5 flex flex-col items-center'>
                    <Link to='/'><img src={assets.logo_dark} alt="logo" /></Link>
                    <div className='mt-5 text-white font-light'>We bring together world-class instructors, interactive content, and a supportive community to help you achive your personal and professional goals.</div>
                </div>
                <div className='px-5 flex flex-col gap-3 text-white'>
                    <p className='text-lg font-semibold'>Company</p>
                    <Link to='/'>Home</Link>
                    <Link>About Us</Link>
                    <Link>Contact Us</Link>
                    <Link>Privacy Policy</Link>
                </div>
                <div className='text-white md:flex hidden flex-col gap-3 w-2/5'>
                    <p className='text-lg font-semibold'>Subscribe to our newsletter</p>
                    <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form className='flex gap-2 justify-center'>
                        <input type="email" placeholder='Enter Your Email' className='bg-gray-500 border-1 p-3 rounded-2xl focus:bg-gray-600' />
                        <button type='submit' className='bg-blue-600 p-2 rounded-2xl cursor-pointer hover:bg-blue-700'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='w-4/5 border-t-1 text-center m-auto border-gray-400 text-gray-400 py-2'>
                Copyright 2024 © Edemy. All Rights Reserved.
            </div>
        </div>
    )
}

export default FooterStudents