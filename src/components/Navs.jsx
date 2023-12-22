import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navs = () => {
    const [nav, setnav] = useState(true)
    const handleNav = () => {
        setnav(!nav)

    }

    return (
        <div className='text-white  p-8 text-2xl flex justify-around items-center h-24 w-5/6 mx-auto'>
            <h1 className='text-[#ffdf41] md:text-3xl text-4xl  font-bold pr-3'>React.</h1>
            <ul className='hidden md:flex '>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='cursor-pointer block md:hidden'>
                {
                    nav ? <AiOutlineMenu /> : <AiOutlineClose />
                }

            </div>
            <div className={ !nav ? `fixed left-0 top-0 w-[45%] border-r h-screen bg-black border-r-gray-800 ease-out duration-500 right-[100]` : `  ease-out duration-1000 fixed left-[-100%] top-0 w-3/5 border-r h-full border-r-gray-900` }>
                <ul className=' p-4 uppercase bg-[#000300]'>
                    <h1 className='text-[#ffdf41] text-3xl font-bold m-4 w-full'>React</h1>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navs