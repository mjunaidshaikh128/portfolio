import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa"
import { SiJavascript, SiTailwindcss } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
const Skills = () => {
    return (
        <section id="skills" className="bg-black text-white py-28">
            <div className="">
                <h2 className='text-3xl uppercase font-semi-bold text-center mb-10'>Skills</h2>
                <div className="w-full text-designColor text-6xl flex flex-wrap gap-x-10 justify-center">
                    <div className="flex flex-col items-center">
                        <FaHtml5 />
                        <h2 className="text-2xl font-semi-bold text-gray-100 uppercase tracking-[10px] mt-5">HTML</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaCss3 />
                        <h2 className="text-2xl font-semi-bold text-gray-100 uppercase tracking-[10px] mt-5">CSS</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiJavascript />
                        <h2 className="text-2xl font-semi-bold text-gray-100 uppercase tracking-[10px] mt-5">Javascript</h2>
                    </div>
                    <div className="flex flex-col items-center">
                    <FaReact />
                        <h2 className="text-2xl font-semi-bold text-gray-100 uppercase tracking-[10px] mt-5">React</h2>
                    </div>
                    <div className="flex flex-col items-center">
                    <TbBrandNextjs />
                        <h2 className="text-2xl font-semi-bold text-gray-100 uppercase tracking-[10px] mt-5">NextJS</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiTailwindcss />
                        <h2 className="text-2xl font-semi-bold text-gray-100 uppercase tracking-[10px] mt-5">TailwindCSS</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills