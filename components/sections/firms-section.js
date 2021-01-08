import Image from "next/image";

export default function FirmsSection() {
  return (
    <section class="mx-auto">
      <div class="container px-5 mx-auto lg:px-24 lg:py-4">
        <div class="grid grid-cols-3 gap-16 text-center lg:grid-cols-5">
          <div class="flex items-center justify-center ">
            <Image
              src="/HVL.png"
              alt="Western Norway University of Applied Sciences"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <div class="flex items-center justify-center ">
            <Image
              src="/lu.png"
              alt="Lunds Universitet"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <div class="flex items-center justify-center ">
            <Image
              src="/uis.png"
              alt="University of Stavanger"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <div class="flex items-center justify-center ">
            <Image
              src="/uiavert.png"
              alt="University of Agder"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <div class="flex items-center justify-center ">
            <Image
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
