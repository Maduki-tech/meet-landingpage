import Image from "next/image"

import first from "../../assets/image-man-texting.jpg"
import second from "../../assets/image-men-in-meeting.jpg"
import third from "../../assets/image-woman-in-videocall.jpg"
import forth from "../../assets/image-women-videochatting.jpg"

export default function Pictures() {
    return (
        <div className=" grid grid-flow-col gap-10 ml-6 mr-6 ">

            <div className="rounded-md overflow-hidden">
                <Image src={first} alt="" />
            </div >

            <div className="rounded-md overflow-hidden">
                <Image src={second} alt="" />
            </div>

            <div className="rounded-md overflow-hidden">
                <Image src={third} alt="" />
            </div>

            <div className="rounded-md overflow-hidden">

                <Image src={forth} alt="" />
            </div>

        </div>
    )
}
