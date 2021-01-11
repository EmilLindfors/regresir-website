//import Image from "next/img";

export default function FirmsSection() {
  return (
    <section className="mx-auto">
      <div className="container px-5 mx-auto lg:px-24 lg:py-4">
        <div className="grid grid-cols-3 gap-16 text-center lg:grid-cols-5">
          <div className="flex items-center justify-center ">
            <img
              src="/HVL.png"
              alt="Western Norway University of Applied Sciences"
              width="100%"
              height="100%"
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center ">
            <img
              src="/lu.png"
              alt="Lunds Universitet"
              width="100%"
              height="100%"
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center ">
            <img
              src="/uis.png"
              alt="University of Stavanger"
              width="100%"
              height="100%"
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center ">
            <img
              src="/uiavert.png"
              alt="University of Agder"
              width="100%"
              height="100%"
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center ">
            <img
              src="/Manchester.jpg"
              alt="University of Manchester"
              width="100%"
              height="100%"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
