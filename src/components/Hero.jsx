import React from 'react'
import Typed from 'react-typed'


const Hero = () => {
    return (
        <>

            <div className='text-white'>
                <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col gap-3 justify-center">
                    <p className='text-[#ffdf41] text-2xl '>Lorem ipsum dolor sit amet.</p>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:py-4'>lop contet adiing elit.</h1>
                    <div className="bg-none flex text-2xl sm:text-3xl md:text-5xl lg:text-5xl justify-center gap-6">
                        <p>Lorem ipsum dolor sit
                        </p>
                        <Typed className='shadow-lg shadow-yellow-400' strings={["Neo", "Qasim", "Khan"]} typeSpeed={60} backSpeed={50} loop />
                    </div>
                    <p className='text-slate-500 md:text-xl text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, accusantium. Ullam dolore nesciunt quasi.!</p>
                    <button className='px-10 rounded-lg py-2  bg-[#ffdf41] text-black font-medium sm:text-2xl w-max mx-auto'> Button</button>
                </div>
            </div>
        </>
    )
}

export default Hero