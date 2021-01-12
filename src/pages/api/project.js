const getProjectInCristin = async (id) => {

    // shape: https://api.cristin.no/v2/doc/index.html#GETproject
  const response = await fetch(`https://api.cristin.no/v2/projects/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })

  const data = await response.json()
  return data
}

export default async (_, res) => {
  const data = await getProjectInCristin('2495882')

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')
  if (data) {
    return res.status(200).json({
      data,
    })
  } else {
    res.status(404).json({ message: `Project with id: ${id} not found.` })
  }
}
