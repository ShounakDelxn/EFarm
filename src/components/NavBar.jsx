'use client'
import GreenCircleWithIcon from "./GreenCircleWithIcon";

export default function Navbar() {
 
     const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const refreshPage = () => {
    window.location.href = '/'; 
  };

  return (
    <nav className="w-full px-2 py-4 flex items-center bg-white shadow-md">
      
      <div className="flex justify-between">
        <div className="text-2xl pl-5 flex-start font-bold text-green-700">
            FarmFerry
        </div>

       
        <div className="ml-70 mt-1">
            <ul className="flex space-x-6 text-gray-700 font-xs ">
                <li onClick={refreshPage} className="hover:text-green-700 cursor-pointer">Home</li>
                <li 
                  className="hover:text-green-700 cursor-pointer"
                  onClick={() => scrollToSection('about')}
                >
                  About
                </li>
                <li className="hover:text-green-700 cursor-pointer">Services</li>
                <li className="hover:text-green-700 cursor-pointer">Contact</li>
            </ul>
        </div>
    </div>
    <div className=" ml-15 flex w-full justify-around">
        <div  className="flex items-center ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 animate-vibrate"
                >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
            </svg>


            <div className="ml-3">
                <p className="text-md text-gray-500 font-light">Call Us Now</p>
                <p className="text-xs">+91 7768995890</p>
            </div>
        </div>

        <div className="mt-1">
            <div className="flex flex-col items-center">
            <GreenCircleWithIcon size="sm" iconSize="xs" />
        </div>
        </div>
            <button 
              type="button" 
              className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-4xl text-sm px-7 py-2.5 me-2 dark:focus:ring-yellow-900"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
      </div>
    </nav>
  );
}