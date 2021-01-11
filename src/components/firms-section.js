//import Image from "next/img";

export default function FirmsSection() {
  return (
    <section class="mx-auto">
      <div class="container px-5 mx-auto lg:px-24 lg:py-4">
        <div class="grid grid-cols-3 gap-16 text-center lg:grid-cols-5">
          <div class="flex items-center justify-center ">
            <img
              src="/HVL.png"
              alt="Western Norway University of Applied Sciences"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <div class="flex items-center justify-center ">
            <img
              src="/lu.png"
              alt="Lunds Universitet"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <div class="flex items-center justify-center ">
            <img
              src="/uis.png"
              alt="University of Stavanger"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <div class="flex items-center justify-center ">
            <img
              src="/uiavert.png"
              alt="University of Agder"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <div class="flex items-center justify-center ">
            <img
              src="/Manchester.jpg"
              alt="University of Manchester"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
