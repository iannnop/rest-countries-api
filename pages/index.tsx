import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Country } from '../types'
import useSearchResult from '../hooks/useCountriesAPI'
import CountryCard from '../components/CountryCard'
import Header from '../components/Header'
import { SearchIcon } from '@heroicons/react/solid'

const Home: NextPage = () => {
  const { countries, isLoading, isError } = useSearchResult()
  const [query, setQuery] = useState("")
  const [filterRegion, setFilterRegion] = useState("")

  console.log(countries)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='mx-20 my-12'>
        {/* Search Fields */}
        <div className='mb-12 flex justify-between'>
          <div className='w-[480px] px-5 py-5 space-x-3 flex bg-white dark:bg-dark-element-bg text-light-inputfield dark:text-white rounded-md shadow-sm'>
            <SearchIcon className='w-5 h-5'/>
            <input className='flex-grow focus:outline-none bg-transparent placeholder:text-light-inputfield placeholder:dark:text-white' type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a country..."/>
          </div>
          <select onChange={(e) => setFilterRegion(e.target.value)} className='block bg-white dark:bg-dark-element-bg focus:outline-none' id="region" name="region" defaultValue={filterRegion}>
            <option value="" disabled hidden>Filter by Region</option>
            <option value="">No Filter</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>

        {/* CountryCard Grid */}
        <div>
          <CountryCard />
        </div>
      </main>
    </div>
  )
}

export default Home