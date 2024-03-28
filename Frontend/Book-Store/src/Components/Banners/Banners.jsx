import SwiperCard from "./swiper";

const Banners = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className=" flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and sell your books
            <span className="text-blue-700"> for the best prices</span>{" "}
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            eos. Soluta tempore sit, eum quo magnam, sunt cumque dicta vero,
            delectus quisquam aperiam? Alias corrupti quidem voluptatum culpa
            quis voluptatem!
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a Book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-600 px-6 py-2 text-white font-medium hover:bg-blue-900 transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        <div className="right">
          <SwiperCard />
        </div>
      </div>
    </div>
  );
};
export default Banners;
