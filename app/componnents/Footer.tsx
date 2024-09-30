const Footer = () => {
    return (
            <footer className=" shadow pt-96">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-red ">Made in Next.Js and React</span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                        <li>
                            <a className="pr-2 hover:text-red" href="#Map">
                            Map
                            </a>
                        </li>
                        <li>
                            <a className="pr-2 hover:text-red" href="#Mission">
                                Mission
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-red sm:mx-auto dark:border-red lg:my-8" />
            </div>
        </footer>
    )
}

export default Footer;