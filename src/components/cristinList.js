import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

export default function CristinList({cristinId = "6137"}) {
  const { data } = useSWR(`/api/user/${cristinId}`, fetcher)
  return (
    <ul>
      {data &&
        data.data.map((item) => (
          <CristinItem
            channel={item.channel ? item.channel.title: ""}
            title={item.title.en ? item.title.en : item.title.no}
            year={item.year_published}
          />
        ))}
    </ul>
  )
}

function CristinItem({ title, year, channel }) {
  return (
    <li>
      <span>{title}</span>
      {year}
      {channel}
    </li>
  )
}
