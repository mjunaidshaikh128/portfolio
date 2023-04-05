import OfferCard from './OfferCard'
import {RxCopy} from "react-icons/rx"
import {SiAntdesign} from "react-icons/si"
import {FaChartPie, FaConnectdevelop} from "react-icons/fa"

const Offers = () => {
  return (
    <section id='offers' className='bg-[#0F1113] text-white py-28'>
        <div>
            <h1 className='text-3xl uppercase font-semi-bold text-center'>What I Offer</h1>
        </div>
        <div className='w-full p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20'>
            <OfferCard
            title="BRANDING" 
            subTitle="Branding is visually stunnig designs that will leave you speechless"
            Icon={RxCopy} />
            <OfferCard
            title="WEB DESIGN" 
            subTitle="Branding is visually stunnig designs that will leave you speechless"
            Icon={SiAntdesign} />
            <OfferCard
            title="MARKETING" 
            subTitle="Branding is visually stunnig designs that will leave you speechless"
            Icon={FaChartPie} />
            <OfferCard
            title="DEVELOPMENT" 
            subTitle="Branding is visually stunnig designs that will leave you speechless"
            Icon={FaConnectdevelop} />
        </div>
    </section>
  )
}

export default Offers