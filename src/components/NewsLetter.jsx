import React from 'react'

const NewsLetter = () => {
    return (
        <>
            <div className="w-full py-10 text-white ">
                <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 px-5 ">
                    <div className="lg:p-0 ">
                        <h1 className='text-md sm:text-xl md:text-2xl lg:text-3xl font-semi-bold'>Lorem ipsum dolor consectetur amet adipisicing elit.</h1>
                        <h1 className='text-md sm:text-md md:text-xl lg:text-2xl'>Lorem ipsum dolor sit consectetur adipisicing elit.</h1>
                    </div>
                    <div className="my-8 flex  md:flex-col md:gap-4 gap-0">
                        <input type="email" placeholder='enter your email' className='p-2 shadow-none border-none w-1/3 md:w-full flex rounded-full' />
                        <button className='md:px-10 px-5 rounded-lg py-2   bg-black shadow-md shadow-[#ffdf41] text-[#ffdf41] font-medium md:text-2xl  w-max mx-auto'>Click ME</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter