export default function Navbar() {
  return (
    <nav className="w-full px-2 py-4 flex items-center  rounded-full  bg-white shadow-md">
      
      <div className="flex justify-between">
        <div className="text-2xl pl-5 flex-start font-bold text-green-700">
            EcoBrand
        </div>

       
        <div className="ml-70">
            <ul className="flex space-x-6 text-gray-700 font-xs ">
                <li className="hover:text-green-700 cursor-pointer">Home</li>
                <li className="hover:text-green-700 cursor-pointer">About</li>
                <li className="hover:text-green-700 cursor-pointer">Services</li>
                <li className="hover:text-green-700 cursor-pointer">Contact</li>
            </ul>
        </div>
    </div>
    <div className=" ml-15 flex w-full justify-around">
        <div  className="flex items-center ">
            <img
            src="/images/Icon.png"
            alt="Sample"
            className="h-8 w-8 "
            />
            <div className="ml-3">
                <p className="text-md text-gray-500 font-light">Call Us Now</p>
                <p className="text-xs">+91 7768995890</p>
            </div>
        </div>

        <div className="">
            <img
            src="/images/Link.png"
            alt="Sample"
            className="h-10 w-10 "
            />
        </div>
            <button type="button" className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-4xl text-sm px-7 py-2.5 me-2 dark:focus:ring-yellow-900">Get in Touch</button>
      </div>
    </nav>
  );
}
