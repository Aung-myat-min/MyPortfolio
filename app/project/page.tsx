export default function Project() {
  return (
    <div className="flex justify-between" style={{ margin: "22px 0" }}>
      <div
        className="border rounded-xl"
        style={{ width: "48%", height: "84vh" }}
      >
        <div style={{ margin: "65% 0 0 5%" }}>
          <p className="text-4xl font-bold leading-tight">
            Over past fews years, I've <br />
            worked on various projects. <br />
            Here's few of my best:
          </p>
          <a
            href="#"
            className=" bg-gray-100 w-fit px-3 h-10 items-center flex rounded-xl text-sm mt-3"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div
        className="border rounded-xl overflow-auto"
        style={{ width: "48%", height: "84vh" }}
      >
        <div className="h-full bg-red-500 rounded-xl flex flex-col justify-around p-5">
          <div className="flex">
            <div className="w-fit px-5 flex items-center rounded-xl h-10 bg-gray-200 text-gray-500 m-2">
              <p>React.js</p>
            </div>
            <div className="w-fit px-5 flex items-center rounded-xl h-10 bg-gray-200 text-gray-500 m-2">
              <p>React.js</p>
            </div>
            <div className="w-fit px-5 flex items-center rounded-xl h-10 bg-gray-200 text-gray-500 m-2">
              <p>React.js</p>
            </div>
          </div>
          <h1>Movies and TV series guide</h1>
          <img
            className="mx-auto rounded-xl"
            src="https://www.bhmpics.com/downloads/16-9-wallpapers-/10.mountains_sunset_landscape_147439_2560x1440.jpg"
            alt=""
            style={{ width: "80%" }}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            pariatur ea quia fugiat autem atque commodi consequuntur obcaecati,
            iure distinctio. Quidem maiores delectus ut. Veniam laudantium
            molestias voluptatem ipsum consectetur?
          </p>
          <a
            href="#"
            className=" bg-black text-white w-fit px-3 h-10 items-center flex rounded-xl text-sm mt-3"
          >
            Get in touch
          </a>
        </div>

        {/* another project */}

        <div className="h-full bg-red-500 rounded-xl flex flex-col justify-around p-5 mt-5">
          <div className="flex">
            <div className="w-fit px-5 flex items-center rounded-xl h-10 bg-gray-200 text-gray-500 m-2">
              <p>React.js</p>
            </div>
            <div className="w-fit px-5 flex items-center rounded-xl h-10 bg-gray-200 text-gray-500 m-2">
              <p>React.js</p>
            </div>
            <div className="w-fit px-5 flex items-center rounded-xl h-10 bg-gray-200 text-gray-500 m-2">
              <p>React.js</p>
            </div>
          </div>
          <h1>Movies and TV series guide</h1>
          <img
            className="mx-auto rounded-xl"
            src="https://www.bhmpics.com/downloads/16-9-wallpapers-/10.mountains_sunset_landscape_147439_2560x1440.jpg"
            alt=""
            style={{ width: "80%" }}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            pariatur ea quia fugiat autem atque commodi consequuntur obcaecati,
            iure distinctio. Quidem maiores delectus ut. Veniam laudantium
            molestias voluptatem ipsum consectetur?
          </p>
          <a
            href="#"
            className=" bg-black text-white w-fit px-3 h-10 items-center flex rounded-xl text-sm mt-3"
          >
            Get in touch
          </a>
        </div>
        <div className="h-full bg-red-500 rounded-xl flex flex-col justify-around p-5 mt-5">
          <div className="flex">
            <div className="w-fit px-5 flex items-center rounded-xl h-10 bg-gray-200 text-gray-500 m-2">
              <p>React.js</p>
            </div>
            <div className="w-fit px-5 flex items-center rounded-xl h-10 bg-gray-200 text-gray-500 m-2">
              <p>React.js</p>
            </div>
            <div className="w-fit px-5 flex items-center rounded-xl h-10 bg-gray-200 text-gray-500 m-2">
              <p>React.js</p>
            </div>
          </div>
          <h1>Movies and TV series guide</h1>
          <img
            className="mx-auto rounded-xl"
            src="https://www.bhmpics.com/downloads/16-9-wallpapers-/10.mountains_sunset_landscape_147439_2560x1440.jpg"
            alt=""
            style={{ width: "80%" }}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            pariatur ea quia fugiat autem atque commodi consequuntur obcaecati,
            iure distinctio. Quidem maiores delectus ut. Veniam laudantium
            molestias voluptatem ipsum consectetur?
          </p>
          <a
            href="#"
            className=" bg-black text-white w-fit px-3 h-10 items-center flex rounded-xl text-sm mt-3"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
