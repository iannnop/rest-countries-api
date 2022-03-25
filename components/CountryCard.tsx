import Image from "next/image"
import Link from "next/link"
import { Country } from "../types"

interface CountryCardProps {
  country: Country
}

const CountryCard = ({ country }: CountryCardProps) => {
  const { name, population, region, capital, flag } = country
  
  return (
    <Link href={`/${name}`}>
      <a className="overflow-hidden min-w-0 bg-white dark:bg-dark-element-bg rounded-lg shadow-lg">
        <div className="relative w-full h-[240px]">
          <Image className="rounded-t-lg" layout="fill" objectFit="cover" src={flag} alt={`${name} flag`} />
        </div>
        <div className="m-6">
          <h2 className="font-bold">{name}</h2>
          <div>
            <p>
              Population: {population.toLocaleString()} <br />
              Region: {region} <br />
              Capital: {capital}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CountryCard