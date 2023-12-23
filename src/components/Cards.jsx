import React from 'react'
// import { VscAccount } from "react-icons/vsc"
const Cards = () => {
    return (
        <>
            <div className="w-full flex-col md:flex-row md:flex p-12 md:p-8 gap-4 border border-gray-700 bg-white  ">
                <div className="shadow-md h-[70vh]  mb-5 w-5/6 mx-auto md:w-full flex flex-col justify-evenly items-center">
                    <div className="flex items-center flex-col gap-8 justify-around">
                        <img height={40} width={40} src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" alt="" />
                        <h1 className='font-bold text-4xl'>single user  </h1>
                    </div>
                    <div className="flex flex-col gap-8 justify-around">
                        <h1 className='font-bold text-6xl'>$149   </h1>
                    </div>
                    <div className="flex flex-col gap-8 justify-around">
                        <img height={40} width={40} src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" alt="" />
                        <h1 className='w-100 shadow-md md:text-2xl'>single  </h1>
                        <h1 className='w-100 shadow-md md:text-2xl'>single  </h1>
                        <h1 className='w-100 shadow-md md:text-2xl'>single  </h1>
                    </div>
                </div>
                <div className="shadow-md h-[70vh]  mb-5 w-5/6 mx-auto md:w-full flex justify-center items-center">
                    <div className="flex flex-col gap-8 justify-around">
                        <h1>single  </h1>
                    </div>
                </div>
                <div className="shadow-md h-[70vh]  mb-5 w-5/6 mx-auto md:w-full flex justify-center items-center">
                    <div className="flex flex-col gap-8 justify-around">
                        <img height={40} width={40} src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" alt="" />
                        <h1>single  </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
