import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useCountriesAPI = () => {
  const url = "https://restcountries.com/v3.1/all"

  const { data, error } = useSWR(url, fetcher)

  return {
    countries: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useCountriesAPI