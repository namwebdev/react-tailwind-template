import axios from 'axios'

const BASE_URL = 'https://api.covidtracking.com/v1/us/daily.json'

export const fetchData = async () => {
  const { data } = await axios.get(BASE_URL)

  return {data}
}
