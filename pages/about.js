import Link from "next/link";
import Head from "next/head";
import { FirmsSection } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>About – RegReSir </title>
        <meta name="about the project" content="about regresir" />
      </Head>
      <div class="relative flex flex-wrap w-full px-10 py-24 my-12 bg-primary rounded-lg">
        <img
          class="absolute inset-0 block object-cover object-center w-full h-full border border-gray-200 rounded-lg opacity-50"
          alt="Photo by Florencia Viadana on Unsplash"
          src="https://source.unsplash.com/9z3LiQeBY_o/1024x768"
        />
        <div class="relative z-10 w-full text-left lg:text-center">
          <h1 class="mb-6 text-2xl font-semibold tracking-tighter text-white sm:text-6xl title-font">
            Researching the economic effects
            <br class="" />
            of the COVID-19 crisis
          </h1>
          
        </div>
      </div>
      <FirmsSection />
      <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">
        <p className="pt-4">
          The Norwegian economy is facing significant challenges as a result of
          the COVID-19 crisis. In this project, we will analyse how companies,
          industries, and regions handle these challenges. We will reveal both
          how companies and industries adapt during the crisis, how policy can
          foster new adaptations, and what type of strategies companies choose
          in the longer term when the situation with a global pandemic hopefully
          is over. A fundamental question for our analyses will be to what
          extent companies and industries return to the 'old' normal after the
          crisis or whether they use the crisis to develop more robust
          strategies and adaptations. Here we are particularly concerned with
          how companies balance economic efficiency, environmentally friendly
          solutions, and socially inclusive industrial practices. For example,
          do companies combine the need for developing product and process
          innovations that are cost-effective with the broader demand for green
          innovations and solutions that reduce companies' carbon footprint?
          Will there be more emphasis on securing jobs and the company's
          long-term future, or do they prioritize generating profits for their
          owners in the short term? And finally, what new opportunities does the
          increasing digitalization of society provide?
        </p>
        <p className="pt-4">
          The project will conduct studies of both industries and regions and
          combine different data sets (qualitative and quantitative). The focus
          will be on resource-based industries (e.g., seafood, maritime sector,
          and renewable energy), and we will uncover different development
          trajectories in different industries. The project will also map and
          analyse variations in adaptability between urban regions, with a
          differentiated industry structure, and rural areas where the industry
          structure often are more specialized. Finally, we will make in-depth
          analyses of the importance of policy and discuss which type of policy
          efforts that are most effective in supporting the companies during the
          crisis.
        </p>
      </article>
    </>
  );
}
