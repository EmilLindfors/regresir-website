const getCristinPersonById = async (id) => {
  const response = await fetch(`https://api.cristin.no/v2/persons/${id}/results`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })

  const data = await response.json()
  return data
}

export default async (req, res) => {
  //get the cristin ID
  const {
    query: { id },
  } = req

  const data = await getCristinPersonById(id)

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')
  if (data) {
    return res.status(200).json({
      data,
    })
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
