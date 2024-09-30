export default function Navbar () {
    return (
        <nav className=" w-full z-50 text-3xl">
           <div className="justify-center mt-12 ">
                <div className="flex h-30 md:flex hidden pb-16 justify-center">
                <div className=" flex space-x-9">
                <ul className="flex  md:flex-row md:space-x-8 justify-center  md:border-0">
                    <li>
                    <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white md:hover:text-red" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#Map" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red md:p-0 dark:text-white md:dark:hover:text-green  md:dark:hover:bg-transparent">Maps</a>
                    </li>
                    <li>
                    <a href="#Mission" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red md:p-0 dark:text-white md:dark:hover:text-green  md:dark:hover:bg-transparent">Mission</a>
                    </li>
                </ul>
                </div>
                </div>

           </div>
           <hr className="w-full outline-red bg-red size-1 border-none drop-shadow-2xl"/>
        </nav>
    )
}