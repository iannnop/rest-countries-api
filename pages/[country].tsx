import { Country } from '../types'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

import { ArrowLeftIcon } from '@heroicons/react/solid'

interface CountryPageProps {
  country: Country
}

interface BorderCountryProps {
  name: string
}

const CountryPage = ({ country }: CountryPageProps) => {
  const { name, topLevelDomain, capital, subregion, region, latlng, population, borders, nativeName, flag, currencies, languages} = country
  const [borderCountries, setBorderCountries] = useState<Country[]>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const res = await fetch(`https://restcountries.com/v2/alpha?codes=${borders.join(',')}`)
      const data = await res.json()
      setBorderCountries(data)
      setIsLoading(false)
    }
    if (borders) { fetchData() }
  }, [borders])

  return (
    <div>
      <Head>
        <title>Countries Rest API</title>
        <meta name="description" content="Countries Rest API database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mx-4 my-6 lg:mx-20 lg:my-12'>
        <Link href='/'>
          <a className='mb-12 lg:mb-20 px-4 py-2 w-min flex items-center gap-x-3 bg-white dark:bg-dark-element-bg rounded-md shadow-md'>
            <ArrowLeftIcon className='w-[20px] h-[20px]'/>
            Back
          </a>
        </Link>

        {/* Country Information */}
        <div className='lg:h-[400px] flex flex-col lg:flex-row lg:space-x-10 xl:space-x-40'>
          <span className='relative h-[300px] lg:h-auto lg:basis-1/2'>
            <Image layout='fill' objectFit='cover' src={flag} alt={`${name} flag`} />
          </span>
          <div className='mt-6 lg:m-0 basis-1/2 space-y-10'>
            <h1 className='text-3xl font-extrabold'>{name}</h1>
            <div className='grid sm:grid-flow-col sm:grid-rows-5 gap-y-4 sm:gap-y-2'>
              <p><span className='font-semibold'>Native Name:</span> {nativeName}</p>
              <p><span className='font-semibold'>Population:</span> {population.toLocaleString()}</p>
              <p><span className='font-semibold'>Region:</span> {region}</p>
              <p><span className='font-semibold'>Sub Region:</span> {subregion}</p>
              <p><span className='font-semibold'>Capital:</span> {capital}</p>
              <p><span className='font-semibold'>Top Level Domain:</span> {topLevelDomain}</p>
              <p><span className='font-semibold'>Currencies:</span> {currencies?.map((curr) => curr.name).join(', ')}</p>
              <p><span className='font-semibold'>Languages:</span> {languages?.map((lang) => lang.name).join(', ')}</p>
            </div>
            <div className='flex flex-col md:flex-row'>
              <p className='mr-3 mb-3'><span className='font-semibold'>Border Countries:</span></p>
              {isLoading ?
              <div>Loading</div> :
              <div className='flex gap-4 flex-wrap'>
                {borderCountries ? 
                  borderCountries.map((country: Country) => (
                    <BorderCountry key={country.alpha3Code} name={country.name} />
                  )) :
                  <p>None</p>
                }
              </div>
              }
            </div>
          </div>
        </div>

        {/* Interactive Map */}
      </main> 
    </div>
  )
}

export default CountryPage

const BorderCountry = ({ name }: BorderCountryProps) => {
  return (
    <Link href={`/${name}`}>
      <a className='px-4 py-1 flex items-center justify-center text-center bg-white dark:bg-dark-element-bg rounded-sm shadow-md'>{name}</a>
    </Link>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v2/all')
  const data = await res.json()
  const paths = data.map((country: Country) => ({ params: { country: country.name } }));

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v2/name/${params?.country}?fullText=true`)
  const data = await res.json()
  const country = data[0]

  return {
    props: {
      country
    }
  }

}