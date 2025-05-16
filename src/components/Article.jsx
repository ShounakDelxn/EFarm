import ImageCard from "./ImageCard";

export function Article() {
  return (
    <div className="mt-10 py-8 px-4 font-serif text-[#666666]">
      <div className="max-w-5xl mx-auto">
        <button
          type="button"
          className="focus:outline-none text-black bg-white hover:bg-slate-100 focus:ring-4 focus:ring-yellow-300 font-medium rounded-2xl text-sm px-10 py-1.5 mb-4 dark:focus:ring-yellow-900"
        >
          Latest Blog
        </button>

        <div className="w-full flex items-center justify-between mb-6">
          <p className="text-4xl font-semibold">Latest Posts & articles</p>
          <div className="flex space-x-2">
            <div className="border p-2.5 rounded-md cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div className="border p-2.5 rounded-md cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ImageCard image={"/images/farm1.png"} heading={"Food Crops"} text={"What Technology is used in Vertical Farming"} date={"May 10 ,2024"}/>
          <ImageCard image={"/images/farm2.png"} heading={"Organic Farm"} text={"Which type of Farming is more prevalent today ?"} date={"January 27 ,2025"}/>
          <ImageCard image={"/images/farm3.png"} heading={"Farming Tips"} text={"The Farmers's Sentiment Darkens , Hopes Fade"} date={"March 16 ,2025"}/>
        </div>
      </div>
    </div>
  );
}
