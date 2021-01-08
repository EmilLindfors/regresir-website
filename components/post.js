import Head from "next/head";
import PageTitle from "@/components/page-title.js";
import tinytime from "tinytime";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";

const people = [
  {
    text:
      "Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. Casper slide ollie north 540 Bill Danforth slide cess slide nose blunt. Pressure flip Streetstyle in Tempe mute-air judo air backside fastplant yeah. ",
    name: "Stig-Erik Jakobsen",
    position: "Project Leader",
    image: "/Stig.png",
  },
  {
    text:
      "Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. Casper slide ollie north 540 Bill Danforth slide cess slide nose blunt. Pressure flip Streetstyle in Tempe mute-air judo air backside fastplant yeah. ",
    name: "Arnt Fløysand",
    position: "Project Leader",
    image: "/Arnt.png",
  },
  {
    text:
      "Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. Casper slide ollie north 540 Bill Danforth slide cess slide nose blunt. Pressure flip Streetstyle in Tempe mute-air judo air backside fastplant yeah. ",
    name: "heidi Wiig",
    position: "Project Leader",
    image: "/heidi.jpg",
  },
];

const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre
      className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`}
      {...props}
    />
  ),
  "pre.code": ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
};

const postDateTemplate = tinytime("{dddd}, {MMMM} {DD}, {YYYY}");

export default function Post({ meta, children, posts }) {
  const router = useRouter();
  const postIndex = posts.findIndex((post) => post.link === router.pathname);
  const previous = posts[postIndex + 1];
  const next = posts[postIndex - 1];
  const author = people.find((x) => x.name === meta.author);

  return (
    <article className="xl:divide-y xl:divide-gray-200">
      <Head>
        <title>{meta.title} – RegReSir</title>
      </Head>
      <header className="pt-6 xl:pb-10">
        {meta.image && (
          <div class="relative flex flex-wrap my-4 w-full h-48 md:h-72 md:my-12 bg-primary rounded-lg">
            <Image
              className="rounded-lg object-cover object-center"
              alt="Photo by Jeswin Thomas on Unsplash"
              src={meta.image}
              layout="fill"
            />
          </div>
        )}
        <div className="space-y-1 text-center">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={meta.date}>
                  {postDateTemplate.render(new Date(meta.date))}
                </time>
              </dd>
            </div>
          </dl>
          <div>
            <PageTitle>{meta.title}</PageTitle>
          </div>
        </div>
      </header>
      <div
        className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="prose max-w-none pt-10 pb-8">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
        </div>
        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
          {meta.author && (
            <div className="py-8 container flex flex-col place-content-center text-center">
              <a class="flex flex-wrap justify-center mt-6">
                <Image
                  alt={author.name}
                  class="inline-block object-cover object-center w-16 h-16 mb-4 rounded-full bg-4gray-100"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  src={author.image}
                />
              </a>
              <span class="flex flex-col flex-grow ">
                <span class="font-medium text-gray-900 title-font">
                  {author.name}
                </span>
                <span class="text-sm text-gray-500 uppercase">
                  {author.position}
                </span>
              </span>
            </div>
          )}
          {(next || previous) && (
            <div className="space-y-8 py-8">
              {next && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Next Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href={next.link}>
                      <a>{next.title}</a>
                    </Link>
                  </div>
                </div>
              )}
              {previous && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href={previous.link}>
                      <a>{previous.title}</a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-8">
            <Link href="/">
              <a className="text-teal-500 hover:text-teal-600">
                &larr; Back to Homepage
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
