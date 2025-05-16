import { Facebook, Instagram, Twitter, X } from "lucide-react";

export function FooterContent() {
  return (
    <div className="mt-10 py-8 px-4 font-serif text-[#666666]">
      <div className="max-w-5xl mx-auto flex h-80 bg-white rounded-3xl">
        <div className="w-1/2 flex flex-col justify-center px-10">
          <h2 className="text-3xl font-bold text-black mb-2">FarmFerry</h2>
          <p className="text-sm text-gray-600 mb-4">
            Bringing you the freshest organic produce directly from our farms to your doorstep. Sustainably grown, naturally harvested.
          </p>
          <div className="flex space-x-4 text-gray-700">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-600" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            <X className="w-5 h-5 cursor-pointer hover:text-black" />
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center px-10">
          <h3 className="text-xl text-black  mb-4">
            Your Trusted Organic Partner<br />
            <span className="text-base font-normal text-black">From our fields to your table</span>
          </h3>

          <div className="flex space-x-16">
            <div>
              <h4 className="text-md  text-black mb-2">Useful Links</h4>
              <ul className="text-sm space-y-1">
                <li className="hover:underline cursor-pointer">Company</li>
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-md text-black mb-2">Working Time</h4>
              <ul className="text-sm text-[#666666] space-y-1">
                <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
