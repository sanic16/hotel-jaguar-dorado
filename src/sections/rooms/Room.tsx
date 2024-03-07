import Image from "next/image"
import { FaAngleDoubleRight, FaArrowRight } from "react-icons/fa"

const Room = (
    {
        image,
        title,
        description,
        price
    }:{
        image: NextImage,
        title: string,
        description: string,
        price: number
    }
) => {
  return (
    <div className="room__card">
        <div className="room__image">
            <Image src={image} alt="" />
        </div>
        <div className="room__card-content">
            <h4 className="room__card-heading">
                { title }
            </h4>
            <p className="room__card-text">
                { description }
            </p>
            <p className="room__card-price">
                Q { price}
            </p>
            <button className="room__card-btn">
                Reservar <FaAngleDoubleRight />
            </button>
        </div>
    </div>
  )
}

export default Room