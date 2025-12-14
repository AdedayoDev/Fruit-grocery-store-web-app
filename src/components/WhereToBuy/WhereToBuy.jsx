import worldmap from "../../assets/world-map.png"

const WhereToBuy = () => {
  return (
    <section>
      <div className="w-10/12 mx-auto my-36">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">

          {/* Text container section */}
          <div className=" space-y-8 ">
            <h1 className="text-4xl font-bold">Where to buy our products?</h1>
            <div className="flex items-center gap-4 text-dark font-serif">
              <input
                type="text"
                placeholder="Country"
                className="input-style w-full lg:w-30"
              />
              <input
                type="text"
                placeholder="Zipcode"
                className="input-style w-full "
              />
            </div>
            <button className="primary-btn">Search</button>
          </div>
          
          {/* map section */}
          <div className="col-span-2">
            <img src={worldmap} alt="World Map" className="w-full  sm:w-125" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;
