import {HiChevronDoubleRight} from "react-icons/hi"
const AboutMe = () => {
    const aboutList = ["Web Design", "iOS Design", "User Experience", "Backend Development", "Wordpress Website", "Graphic & Print", "Front-end Development", "Branding", "Responsive"]
    return (
        <section id="about" className="w-full h-full bg-black text-white py-28 px-4">
            <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
                <h1 className="text-3xl uppercase font-semi-bold text-center">A Story About Me</h1>
                <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-textColor">I&apos;m <span className="font-bold tracking-wider text-white">Junaid Shaikh</span> and I&apos;m a freelance <span className="font-bold text-white">Web Designer</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos incidunt ullam unde reprehenderit aspernatur molestiae impedit eum, pariatur, nemo, reiciendis quam. Ea odit enim accusamus reiciendis neque natus ab veritatis.</p>
                <div className="max-w-screen-sm grid grid-cols-1 md:grid-cols-2 gap-8">
                    {aboutList.map((item,i) => (
                    <h4 key={i} className="text-2xl font-semibold flex items-center gap-4">
                        <span className="text-designColor">
                            <HiChevronDoubleRight />
                        </span>
                        {item}
                    </h4>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutMe