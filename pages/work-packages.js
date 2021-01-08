import Head from "next/head";
import Image from "next/image"

const workPackages = [
  {
    wpKey: "WP1",
    title: "The uneven effects of the crisis on regions",
    leader: "Jarle Aarstad (HVL)",
    leaderImg: "/Jarle.jpg",
    rq: "What is the ability of Norwegian regions to absorb economic shocks?",
    text:
      "The overarching hypothesis in WP1 is that some regions have responded to the impact of COVID-19 more resiliently than others.Some regions may mostly have experienced adaptation and a ‘bounce back’ state, while others have been dominated by adaptability and a ‘bounce forward’ state. The reasoning is grounded in the evolutionary paradigm of viewing regions as uneven spatial systems with regard to regional thickness and specialisation (Isaksen and Trippl, 2016). Elaborating on this approach WP1 categorises regions along four dimensions: 1) population density, 2) industry relatedness 3) industry unrelatedness, and 4) industry specialisation.",
  },
  {
    wpKey: "WP2",
    title: "Sustainable restructuring in regions",
    leader: "Arne Isaksen (UiA)",
    leaderImg: "/Arne Isaksen.jpg",
    rq:
      "What regional-specific conditions, actors and activity, influence on to what extent regions have ‘bounced back’ to ‘normal industry practice’ or ‘bounced forward’ towards more economically sound, environmentally friendly and socially inclusive industrial activities?",
    text:
      "This WP departs from the understanding that industries are embedded in regional knowledge and institutional infrastructures, conceptualised as regional innovation systems (RIS). RIS are open in the sense that firms are often part of wider production and innovation networks. Based on the framework in this project the possibility of specific regions to adapt and bounce back, or to have the adaptability to bounce forward, depends on how the RIS (including clusters) are organised, the specific industry mix of regions, and the firm and system level agency responding to the crisis. Firm-level agency includes various innovation activities in individual (existing and new) firms, while system-level agency leads to reconfiguration of RISs, e.g. both continuation and change within existing institutions and the development of new institutions (Isaksen et al. 2018). The focus is on how industrial (i.e. sustainable and digital) restructuring unfolds in different types of regions, centring on the process and agentic perspectives. ",
  },
  {
    wpKey: "WP3",
    title: "Sustainable restructuring in natural resource-based industries",
    leader: "Marte C. W. Solheim (UiS)",
    leaderImg: "/Marte.png",
    rq:
      "How has the crisis induced structural changes in the investment, market orientation, technology advancement and job creation of resource-based industries?",
    text:
      "WP3 focuses on how specific industries (i.e. natural resource-based) embedded in complex global production and innovation systems can bounce back or forward. Natural resource-based industries are critical to the Norwegian economy and they represent well over one third of the total GDP in Norway (including value chains). Many of these industries are located along the coast and are subject to a complex web of regulations and tax regimes due to environmental externalities and public ownership of resources. Moreover, COVID-19 has provided significant shocks from global markets to these industries. Job losses related to oil-related value chains can reach unprecedented levels during the time window of the proposed project. We have already seen initiatives to make structural changes in the complex web of regulations and taxes. The proposed project provides new knowledge on the crisis as a catalyst of several structural shocks and changes for natural resource-based industries in several dimensions: a) Global demand and value chains shocks leading to revenue and job losses, b) Innovations in regulations, taxation and bureaucratic structures and processes creating new incentives for private investments and job creation, and c) Rebalancing of economic, environmental and social sustainability concerns among stakeholders and decision makers.  ",
  },
  {
    wpKey: "WP4",
    title: "Innovation policy for sustainable restructuring",
    leader: "Lars Coenen (HVL)",
    leaderImg: "/Lars.png",
    rq:
      "How does innovation and industrial policy in Norway contribute to sustainable restructuring and resilience-building of regions in response to the crisis? 2) How can regional innovation policy in Norway foster adaptation and adaptability of regions? Can this dual objective be reconciled or are there inherent tensions and trade-offs?",
    text:
      "Empirically this WP accommodates two related lines of research. Firstly, it will analyse the ability of past and existing industrial and innovation policy initiatives and programs to contribute to regional resilience and sustainable industrial restructuring. Secondly, it will draw on data and analytical tools developed in the previous WPs to conduct policy labs that assess and balance economic, social and environmental sustainability concerns ‘live’ in ongoing and future innovation policy initiatives. Regarding the second RQ, and analyses on whether policy initiatives are able to foster adaptation and adaptability (simultaneously), we conduct deep dives into specific project ecologies of selected policy initiatives. Here we will assess, together with relevant stakeholders, the project ecology from a governance experimentation / temporary innovation system perspective. Drawing on experience from previous research in Sweden (Coenen et al., 2015) and Australia (Fastenrath and Coenen, 2020), this analysis will shed light on the organising principles and institutional design for transformative innovation policy, its challenges, synergies and tensions with ‘orthodox’ innovation policies. The outcomes of these case studies will allow us to organise policy lab workshops to design innovation policy that supports industries and regions to bounce forward from crisis. ",
  },
  {
    wpKey: "WP5",
    title: "Management and coordination",
    leader: "Stig-Erik Jakobsen (HVL)",
    leaderImg: "/Stig.png",
    rq: "Oversight of the development of the work packages",
    text:
      "WP5 will oversee the development of the work packages and ensure adequate progress. It will safeguard good communication between the WPs and encourage synergies, for instance when it comes to data collection and analysis of data. Also, it is responsible for facilitating the communication with user groups. Moreover, it will be accountable for the research infrastructure, project reporting and financial management. ",
  },
];

export default function WorkPackages({ data }) {
  return (
    <>
      <Head>
        <title>Work Packages – RegReSir </title>
        <meta name="about the project" content="about regresir" />
      </Head>

      <section>
        <ul className="divide-y divide-gray-200">
          {workPackages.map((d) => (
            <WorkPackage
              wpKey={d.wpKey}
              title={d.title}
              text={d.text}
              rq={d.rq}
              leader={d.leader}
              leaderImg={d.leaderImg}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

function WorkPackage({ wpKey, title, text, rq, leader, leaderImg }) {
  return (
    <li
      key={wpKey}
      className="container flex flex-col items-start py-4 mx-auto lg:py-8 md:flex-row"
    >
      <div class="lg:max-w-sm lg:w-full p-4 m-4 text-center">
      <Image
            alt="testimonial"
            class="inline-block object-cover object-center w-16 h-16 mb-4 rounded-full bg-4gray-100"
            objectFit="cover"
            width="100%"
            height="100%"
            src={leaderImg}
          />
       {leader}
      </div>
      <div className="w-full pt-0 mb-16 lg:flex-grow">
        <h3 class="mb-1 text-xs font-medium tracking-widest text-secondary title-font">
          {wpKey} - {title}
        </h3>
        <h1 class="mb-8 text-lg font-bold tracking-tighter text-center text-primary lg:text-left lg:text-xl title-font">
          {rq}
        </h1>
        <p class="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
          {text}
        </p>
      </div>
    </li>
  );
}
