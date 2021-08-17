import fetcher from '@/lib/fetcher'
import useSWR from 'swr'
import tinytime from 'tinytime'

const postDateTemplate = tinytime('{MMMM}, {YYYY}')

export default function CristinProject() {
  const { data } = useSWR(`/api/project`, fetcher)
  if (!data) {
    return null
  } else {
    return (
      <div className="bg-primary p-4 rounded-lg text-white w-1/2">
          <span className="text-red-200">
          NFR project: {data.data.project_funding_sources[0].project_code}
          </span>
          {data.data.coordinating_institution.institution.institution_name.en}
        ProjectID Project Period:
        {postDateTemplate.render(new Date(data.data.start_date))}-{' '}
        {postDateTemplate.render(new Date(data.data.end_date))}
        funding: {data.data.total_funding_amount.amount}
        <a href={`https://app.cristin.no/projects/show.jsf?id=${data.data.cristin_project_id}`}>
          See project on Cristin
        </a>
        <ul>
          {data.data.keywords.map((keyword) => (
            <li key={keyword.name.en}>{keyword.name.en}</li>
          ))}
        </ul>
      </div>
    )
  }
}

/*{"data":{
    "cristin_project_id":"2495882",
    "publishable":true,
    published":true,
    "title":{"en":"RegReSir - Regional Resilience and Sustainable Industrial Restructuring"},
    "main_language":"en",
    "start_date":"2020-11-24T00:00:00.000Z",
    "end_date":"2022-11-30T00:00:00.000Z",
    status":"ACTIVE",
    "created":{"date":"2020-11-24T15:34:17.000Z"},
    "last_modified":{"date":"2020-11-24T15:56:32.000Z"},
    "coordinating_institution":{
        "institution":{
            "cristin_institution_id":"203",
            "institution_name":{"en":"Western Norway University of Applied Sciences"},"url":"https://api.cristin.no/v2/institutions/203"},
            unit":{"cristin_unit_id":"203.0.0.0","unit_name":{"nb":"Høgskulen på Vestlandet"},"url":"https://api.cristin.no/v2/units/203.0.0.0"}
        },
        "languages":[{"code":"en","name":{"en":"English"}}],
        "project_funding_sources":
        [ {"funding_source_code":"NFR",
            "project_code":"316539",
            "funding_source_name":{
                "en":"Research Council of Norway (RCN)"
            }
        }
    ],"total_funding_amount":{"currency_code":"NOK","amount":6020000},
    "contact_info":{
        "contact_person":"Stig-Erik Jakobsen",
        "institution":"Høgskulen på Vestlandet",
        "email":"sjak@hvl.no"},
        "participants":[{"cristin_person_id":"6137","first_name":"Stig Erik","surname":"Jakobsen","url":"https://api.cristin.no/v2/persons/6137","roles":[{"role_code":"PRO_MANAGER","institution":{"cristin_institution_id":"203","institution_name":{"en":"Western Norway University of Applied Sciences"}},"unit":{"cristin_unit_id":"203.12.11.0","unit_name":{"nb":"Mohnsenteret for innovasjon og regional utvikling"}}}]},{"cristin_person_id":"329930","first_name":"Jarle","surname":"Aarstad","url":"https://api.cristin.no/v2/persons/329930","roles":[{"role_code":"PRO_PARTICIPANT","institution":{"cristin_institution_id":"203","institution_name":{"en":"Western Norway University of Applied Sciences"}},"unit":{"cristin_unit_id":"203.12.11.0","unit_name":{"nb":"Mohnsenteret for innovasjon og regional utvikling"}}}]},{"cristin_person_id":"441216","first_name":"Marte Cecilie Wilhelmsen","surname":"Solheim","url":"https://api.cristin.no/v2/persons/441216","roles":[{"role_code":"PRO_LMANAGER","institution":{"cristin_institution_id":"217","institution_name":{"en":"University of Stavanger"}},"unit":{"cristin_unit_id":"217.0.0.0","unit_name":{"en":"University of Stavanger"}}},{"role_code":"PRO_PARTICIPANT","institution":{"cristin_institution_id":"217","institution_name":{"en":"University of Stavanger"}},"unit":{"cristin_unit_id":"217.14.1.0","unit_name":{"en":"Department of Innovation, Management and Marketing"}}}]},{"cristin_person_id":"328869","first_name":"Arne","surname":"Isaksen","url":"https://api.cristin.no/v2/persons/328869","roles":[{"role_code":"PRO_LMANAGER","institution":{"cristin_institution_id":"201","institution_name":{"en":"University of Agder"}},"unit":{"cristin_unit_id":"201.0.0.0","unit_name":{"en":"University of Agder"}}},{"role_code":"PRO_PARTICIPANT","institution":{"cristin_institution_id":"201","institution_name":{"en":"University of Agder"}},"unit":{"cristin_unit_id":"201.20.1.0","unit_name":{"nb":"Institutt for arbeidsliv og innovasjon"}}}]},{"cristin_person_id":"1187692","first_name":"Lars Martel Antoine","surname":"Coenen","url":"https://api.cristin.no/v2/persons/1187692","roles":[{"role_code":"PRO_PARTICIPANT","institution":{"cristin_institution_id":"203","institution_name":{"en":"Western Norway University of Applied Sciences"}},"unit":{"cristin_unit_id":"203.12.11.0","unit_name":{"nb":"Mohnsenteret for innovasjon og regional utvikling"}}}]}],"participants_url":"https://api.cristin.no/v2/projects/2495882/participants",
        "academic_summary":{"en":"<p>The Norwegian economy is facing significant challenges as a result of the COVID-19 crisis. In this project, we will analyse how companies, industries, and regions handle these challenges. We will reveal both how companies and industries adapt during the crisis, how policy can foster new adaptations, and what type of strategies companies choose in the longer term when the situation with a global pandemic hopefully is over. A fundamental question for our analyses will be to what extent companies and industries return to the &#39;old&#39; normal after the crisis or whether they use the crisis to develop more robust strategies and adaptations. Here we are particularly concerned with how companies balance economic efficiency, environmentally friendly solutions, and socially inclusive industrial practices. For example, do companies combine the need for developing product and process innovations that are cost-effective with the broader demand for green innovations and solutions that reduce companies&#39; carbon footprint? Will there be more emphasis on securing jobs and the company&#39;s long-term future, or do they prioritize generating profits for their owners in the short term? And finally, what new opportunities does the increasing digitalization of society provide?</p>\r\n\r\n<p>The project will conduct studies of both industries and regions and combine different data sets (qualitative and quantitative). The focus will be on resource-based industries (e.g., seafood, maritime sector, and renewable energy), and we will uncover different development trajectories in different industries. The project will also map and analyse variations in adaptability between urban regions, with a differentiated industry structure, and rural areas where the industry structure often are more specialized. Finally, we will make in-depth analyses of the importance of policy and discuss which type of policy efforts that are most effective in supporting the companies during the crisis</p>\r\n"},"popular_scientific_summary":{"en":"<p>Norsk næringsliv står overfor store utfordringer som en følge av COVID-19 krisen. I dette prosjektet skal vi analysere hvordan bedrifter, næringer og regioner håndterer disse utfordringene. Vi vil avdekke hvordan bedrifter og næringer tilpasser seg under krisen, hvordan de offentlige virkemidlene for å avhjelpe krisen virker, og ikke minst hvilken type strategier og tilpasninger bedrifter velger på lengre sikt når situasjonen med en global pandemi forhåpentligvis er over. Et grunnleggende spørsmål vil være i hvilken grad bedrifter og næringer går tilbake til den ‘gamle’ normalen eller om de benytter krisen til å utvikle mer robuste strategier og tilpasninger. Her er vi særlig opptatt av hvordan bedrifter balanserer økonomisk effektivitet, behovet for mer miljøvennlige løsninger og det å sikre utviklingen av trygge arbeidsplasser. Hvordan kombinerer eksempelvis bedrifter utviklingen av produkt- og prosessinnovasjoner som er kostnadseffektive med et økende behov i samfunnet for grønne innovasjoner og løsninger som reduserer bedrifters karbonavtrykk? Er trygge arbeidsplasser og langsiktig kompetanseutvikling blitt viktigere som en følge av krisen, eller har bedrifter et sterkere fokus på det å genere overskudd til eierne på kort sikt? Og ikke minst, hvilke nye muligheter gir den økende digitalisering av samfunnet?</p>\r\n\r\n<p>Prosjektet vil gjennomføre studier av både næringer og regioner, og vil kombinere flere datasett (både kvalitative og kvantitative). Vi vil ha et fokus på ressursbaserte næringer (eksempelvis sjømat, maritim sektor og fornybar energi), og avdekke ulike utviklingstrekk i ulike næringer. Vi vet også at regioner rammes ulikt av krisen, og her vil vi blant annet analysere forskjeller mellom sentrale regioner med et variert næringsliv, og rurale områder hvor næringslivet ofte er mer spesialisert. Til slutt vil vi gjøre inngående analyser av politikkens betydning, og drøfte hvilken type virkemidler som er mest effektive for å hjelpe bedrifter gjennom en krise.</p>\r\n"},
        "project_categories":
        [
            "code":"BASICRESEARCH",
            "name":{
                en":"Basic Research"}
            }
        ],
        "keywords":
        [
            {
                "code":"2726",
                "name":{
                    "en":"Economic life"
                }
            }
            ,
            {
                "code":"30500",
                "name":{
                    "en":"Sustainability"
                }
            }
            ,
            {"code":"32044","name":{"en":"Research and innovation policy"}},{"code":"32460","name":{"en":"Region"}},{"code":"50599","name":{"en":"Green innovation"}}]}}
*/
