import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useCountriesAPI = () => {
  const url = "https://restcountries.com/v3.1/all"

  const { data, error } = useSWR(url, fetcher)

  // Break data into smaller chunks of 25 countries (Implement Pagination Later)
  // const countries = Array.from({ length: Math.ceil(data.length/25)}, (_, i) => data.slice(i*25, i*25+25))

  return {
    countries: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useCountriesAPI