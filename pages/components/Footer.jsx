import Image from "next/image"

import pic from "../../assets/image-footer.jpg"

export default function Footer() {
    return (
        <div>
            <div className="h-1/6 bg-blue-300 ">
				<Image src={pic} alt=""/>
            </div>
        </div>
    )
}
