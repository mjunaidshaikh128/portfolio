import Image from 'next/image'
import React from 'react'
import fw1 from "@/assets/fw1.jpg"
import fw2 from "@/assets/fw2.jpg"
const Works = () => {
    return (
        <section id='portfolio' className='w-full h-full bg-black text-white py-28'>
            <h2 className='text-3xl uppercase font-semi-bold text-center'>Featured Works.</h2>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 h-[600px] md:h-[480p] mt-16 px-6'>
                <div className='w-full h-full relative overflow-hidden group'>
                    <div className=''>
                        <Image className='w-full h-full object-cover scale-125 group-hover:scale-100 duration-500' src={fw1} alt='' />
                    </div>
                    <div className='w-full h-[480px] absolute top-0 left-0'>
                        <div className='w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500'>
                            <h1 className='text-2xl text-center font-bold bg-designColor px-6 py-2 w-60 absolute left-[15%] transform top-1/2'>See More</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full relative overflow-hidden group'>
                    <div className=''>
                        <Image className='w-full h-full object-cover scale-125 group-hover:scale-100 duration-500' src={fw1} alt='' />
                    </div>
                    <div className='w-full h-[480px] absolute top-0 left-0'>
                        <div className='w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500'>
                            <h1 className='text-2xl text-center font-bold bg-designColor px-6 py-2 w-60 absolute left-[15%] transform top-1/2'>See More</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full relative overflow-hidden group'>
                    <div className=''>
                        <Image className='w-full h-full object-cover scale-125 group-hover:scale-100 duration-500' src={fw1} alt='' />
                    </div>
                    <div className='w-full h-[480px] absolute top-0 left-0'>
                        <div className='w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500'>
                            <h1 className='text-2xl text-center font-bold bg-designColor px-6 py-2 w-60 absolute left-[15%] transform top-1/2'>See More</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full relative overflow-hidden group'>
                    <div className=''>
                        <Image className='w-full h-full object-cover scale-125 group-hover:scale-100 duration-500' src={fw1} alt='' />
                    </div>
                    <div className='w-full h-[480px] absolute top-0 left-0'>
                        <div className='w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500'>
                            <h1 className='text-2xl text-center font-bold bg-designColor px-6 py-2 w-60 absolute left-[15%] transform top-1/2'>See More</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works