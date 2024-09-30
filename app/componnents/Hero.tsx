import Image from "next/image"
export default function Hero () {
    return (
        <div className="content-center h-screen text-white">
            <div className="flex grid-cols-2 text-center">
                <div className="w-full ml-48 mt-16">
                    <h1 className="text-left text-6xl">
                        Find and help your local food
                        desert. Make a mark in
                        your community. </h1>
                    
                    <button className="border justify-start mt-12 py-4 px-12 rounded-full hover:bg-red">
                        Mission
                    </button>
                </div>
                <div className="w-full">
                    <Image
                        src="/us.svg"
                        alt="usa"
                        priority
                        height={800}
                        width={800}
                        className="opacity-20"
                    />
                </div>
            </div>
        </div>
    )
}