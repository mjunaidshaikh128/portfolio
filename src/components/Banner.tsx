import Design from "./Design"
import { HiMinus } from "react-icons/hi"


const Banner = () => {
    return (
        <section id='banner' className='w-full h-[700px] relativ text-white'>
            <Design />
            <div className="absolute left-0 top-0 w-full h-[700px] bg-black bg-opacity-10">
                <nav className="bg-black w-full px-16 py-6 fixed top-0 z-40 bg-opacity-50 flex justify-between items-center">
                    <h1 className="text-white text-4xl font-extrabold border-2 w-12 text-center font-bodyFont">J</h1>
                </nav>
                <div className="w-full h-full flex flex-col justify-center items-center px-4">
                    <h1 className="font-black text-[50px] md:text-[80px] lg:text-[100px]">I&apos;m Junaid Shaikh</h1>
                    <div className="flex items-center gap-2 md:gap-6 text-base md:text-xl font-bold bg-designColor px-6 py-3 uppercase">
                        <h2 className="tracking-[4px]">Leader</h2>
                        <HiMinus className="text-2xl rotate-90" />
                        <h2 className="tracking-[4px]">Designer</h2>
                        <HiMinus className="text-2xl rotate-90" />
                        <h2 className="tracking-[4px]">Youtuber</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner