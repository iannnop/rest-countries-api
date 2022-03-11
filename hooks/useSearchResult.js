import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useSearchResult = (name) => {
  const url = name ? `https://restcountries.com/v3.1/name/${name}` : "https://restcountries.com/v3.1/all"

  const { data, error } = useSWR(url, fetcher)

  return {
    countries: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useSearchResult