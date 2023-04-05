import {FC} from "react"
import { IconType } from "react-icons"

interface IProps {
    title: string,
    subTitle: string,
    Icon: IconType
}
const OfferCard:FC<IProps> = ({ title, subTitle, Icon}) => {
  return (
    <div className="w-full shadow-cardShadow flex flex-col items-center justify-center gap-10 py-16">{Icon && <Icon className="text-designColor text-7xl" />}
    <h1 className="text-2xl font-semi-bold text-gray-100 uppercase tracking-[10px]">{title}</h1>
    <p className="text-2xl text-textColor p-10 text-center leading-[30px]">{subTitle}</p>
    </div>
  )
}

export default OfferCard