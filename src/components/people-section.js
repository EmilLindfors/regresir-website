export default function PeopleSection({people}) {
  return (
    <section class="text-gray-700 body-font">
      <div class="container px-8 pb-24 mx-auto pt-12 lg:px-4">
        <div class="flex flex-wrap -m-4">
          {people.map((p) => (
            <Person text={p.text} name={p.name} position={p.position} image={p.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Person({ text, name, position, image }) {
  return (
    <div class="p-8 mx-auto mb-6 lg:w-1/3 lg:mb-0">
      <div class="h-full p-4 text-left border rounded-xl">
        <p class="text-base font-medium leading-relaxed text-gray-700">
          {text}
        </p>
        <a class="flex flex-wrap items-center mt-6">
          <img
            alt="testimonial"
            class="inline-block object-cover object-center w-16 h-16 mb-4 rounded-full bg-4gray-100"
            objectFit="cover"
            width="100%"
            height="100%"
            src={image}
          />
        </a>
        <span class="flex flex-col flex-grow ">
          <span class="font-medium text-gray-900 title-font">{name}</span>
          <span class="text-sm text-gray-500 uppercase">{position}</span>
        </span>
      </div>
    </div>
  );
}
