import tinytime from "tinytime";
import Link from "next/link";
import Head from "next/head";
import stigAvatar from "../img/Stig.png"
import getAllPostPreviews from "@/get-previews";
import { PeopleSection, FirmsSection, HeroSection } from "@/components";

const people = [
  {
    text:
      "Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. Casper slide ollie north 540 Bill Danforth slide cess slide nose blunt. Pressure flip Streetstyle in Tempe mute-air judo air backside fastplant yeah. ",
    name: "Stig-Erik Jakobsen",
    position: "Project Leader",
    image: stigAvatar
  },
  {
    text:
      "Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. Casper slide ollie north 540 Bill Danforth slide cess slide nose blunt. Pressure flip Streetstyle in Tempe mute-air judo air backside fastplant yeah. ",
    name: "Arnt Fløysand",
    position: "Project Leader",
    image: stigAvatar
  },
  {
    text:
      "Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. Casper slide ollie north 540 Bill Danforth slide cess slide nose blunt. Pressure flip Streetstyle in Tempe mute-air judo air backside fastplant yeah. ",
    name: "heidi Wiig",
    position: "Project Leader",
    image: stigAvatar
  },
];

const posts = getAllPostPreviews();

const postDateTemplate = tinytime("{MMMM} {DD}, {YYYY}");

export default function Home() {
  return (
    <>
      <Head>
        <title>RegReSir website</title>
        <meta
          name="description"
          content="A website by mohnsenteret."
        />
      </Head>
      <HeroSection />
      <FirmsSection />
      <PeopleSection people={people} />

      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold text-primary tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest News
          </h1>
          <p className="text-lg leading-7 text-blue-400">
            See the latest news from the project
          </p>
        </div>
        <ul className="divide-y divide-gray-200">
          {posts.map(({ link, module: { default: Component, meta } }) => {
            return (
              <li key={link} className="py-12">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base leading-6 font-medium text-gray-500">
                      <time dateTime={meta.date}>
                        {postDateTemplate.render(new Date(meta.date))}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        <Link href={link}>
                          <a className="text-gray-900">{meta.title}</a>
                        </Link>
                      </h2>
                      <div className="prose max-w-none text-gray-500">
                        <Component />
                      </div>
                    </div>
                    <div className="text-base leading-6 font-medium">
                      <Link href={link}>
                        <a
                          className="text-teal-500 hover:text-teal-600"
                          aria-label={`Read "${meta.title}"`}
                        >
                          Read more &rarr;
                        </a>
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
