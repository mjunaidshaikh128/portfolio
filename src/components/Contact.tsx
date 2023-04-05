import { FaPhoneAlt } from "react-icons/fa"
import { HiOutlineMailOpen } from "react-icons/hi"
import { AiOutlineGithub } from "react-icons/ai"

const Contact = () => {
    return (
        <section id="skills" className="bg-black text-white py-28">
            <div className="">
                <h2 className='text-3xl uppercase font-semi-bold text-center mb-10'>Contact</h2>
                <div className="w-full text-designColor text-6xl flex flex-wrap gap-x-10 justify-between max-w-screen-lg mx-auto">
                    <div className="flex flex-col items-center">
                        <FaPhoneAlt />
                        <h2 className="text-2xl font-semi-bold text-gray-100 tracking-[2px] mt-5">03222388123</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <HiOutlineMailOpen />
                        <h2 className="text-2xl font-semi-bold text-gray-100 tracking-[2px] mt-5">junaidsh128@gmail.com</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <AiOutlineGithub />
                        <h2 className="text-2xl font-semi-bold text-gray-100 tracking-[2px] mt-5">mjunaidshaikh128</h2>
                    </div>
                </div>
            </div>
        </section>)
}

export default Contact