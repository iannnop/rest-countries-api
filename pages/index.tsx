import Head from 'next/head'
import { useState } from 'react'
import { Country } from '../types'
import CountryCard from '../components/CountryCard'
import { SearchIcon } from '@heroicons/react/solid'
import useCountriesAPI from '../hooks/useCountriesAPI'
import { BeatLoader } from 'react-spinners'
import RegionDropdown from '../components/RegionDropdown'

const Home = () => {
  const [query, setQuery] = useState("")
  const [filterRegion, setFilterRegion] = useState("")
  
  const { countries, isLoading, isError } = useCountriesAPI()

  const filterFunction = ({ name, region }: Country) => {
    const inRegion = filterRegion ? region.toLowerCase().includes(filterRegion.toLowerCase()) : true
    const filterSearch = query ? name.toLowerCase().includes(query.toLowerCase()) : true

    return inRegion && filterSearch
  }

  return (
    <div>
      <Head>
        <title>Countries Rest API</title>
        <meta name="description" content="Countries Rest API database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='mx-4 my-6 lg:mx-20 lg:my-12'>
        {/* Search Fields */}
        <div className='mb-12 space-y-6 md:space-y-0 flex flex-col md:flex-row justify-between'>
          <div className='max-w-[480px] px-5 py-5 space-x-3 flex flex-grow bg-white dark:bg-dark-element-bg text-light-inputfield dark:text-white rounded-md shadow-sm'>
            <SearchIcon className='w-5 h-5'/>
            <input className='flex-grow focus:outline-none bg-transparent placeholder:text-light-inputfield placeholder:dark:text-white' type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a country..."/>
          </div>
          <RegionDropdown filterRegion={filterRegion} setFilterRegion={setFilterRegion} />
        </div>
        
        {/* Loading Spinner */}
        {isLoading &&
        <div className='flex justify-center'>
          <BeatLoader color="#9B9B9B"/>
        </div>
        }

        {/* CountryCard Grid */}
        {countries &&
          <div className='min-w-0 min-h-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-16'>
            {countries && countries.filter(filterFunction).map((country: Country) =>
              <CountryCard key={country.name} country={country}/>
            )}
          </div>
        }
      </main>
    </div>
  )
}

export default Home