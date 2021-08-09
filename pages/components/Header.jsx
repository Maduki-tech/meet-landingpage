import Image from 'next/image'
import titleImage from '../../assets/logo.svg'
import left from '../../assets/image-hero-left.png'
import right from '../../assets/image-hero-right.png'

export default function Header() {
    return (


        <div className="">
            <div className="flex justify-center w-screen m-8">
                <Image src={titleImage} alt="Title" />
            </div>

            <div className="flex flex-row justify-center m-10">
                <div className="m-10">
                    <Image src={left} alt="" />
                </div>
                <div className="m-32 w-1/3">
                    <h1 className="text-6xl text-center">
                        Group Chat
                        for Everyone
                    </h1>
                    <h2 className=" mt-4 text-center">
                        Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
                    </h2>
                    <div className=" flex justify-center mt-4 ">
                        <button className=" rounded-full bg-blue-400 text-white p-2 mr-2">Download <span className=" text-green-200">v1.12</span></button>
                        <button className=" rounded-full bg-purple-400 text-white p-2 ml-2">What is it?</button>
                    </div>

                    <div className=" flex justify-center mt-44">
                        {/* Line */}
                        <div className="w-0.5 h-24 bg-gray-400">

                        </div>
                    </div>
                    <div className=" flex justify-center">

                        {/* Circle */}
                        <div className=" rounded-full border-2 border-gray-400 w-12 h-12 text-center align-bottom">
                            <h1>1</h1>
                        </div>
                    </div>
                </div>
                <div className="m-10">
                    <Image src={right} alt="" />
                </div>
            </div>

        </div>
    )
}
