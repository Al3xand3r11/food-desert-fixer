export default function Navbar () {
    return (
        <nav className="fixed full z-50 text-3xl">
           <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between h-16 hidden md:flex">
            <div className="hidden w-full md:block" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                    <li>
                    <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white md:hover:text-red" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#Projects" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red md:p-0 dark:text-white md:dark:hover:text-green  md:dark:hover:bg-transparent">Map</a>
                    </li>
                    <li>
                    <a href="#Designs" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red md:p-0 dark:text-white md:dark:hover:text-green  md:dark:hover:bg-transparent">Mission</a>
                    </li>
                </ul>
                </div>
            </div>
           </div>
        </nav>
    )
}