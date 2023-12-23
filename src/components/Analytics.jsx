import React from 'react'

const Analytics = () => {
    return (
        <>
            <div className="w-full bg-white py-20 px-4">
                <div className="max-w-[1080px] grid md:grid-cols-2 mx-auto">
                    <img src="https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/laptop.jpg?raw=true"
                        alt="IMAGE GOES HERE" className='w-[500px] mx-auto' />
                    <div className="flex  flex-col justify-center gap-4">
                        <p className='text-[#ffdf41] text-xl font-semibold '>Lorem, ipsum dolor</p>
                        <h1 className='md:text-3xl text-xl py-2 sm:text-2xl'> Voluptate nobis maiores quidem.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dicta voluptatum harum voluptate commodi consequuntur cupiditate dignissimos pariatur molestiae laboriosam. Vel dolores inventore . Facere, dicta eius.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics