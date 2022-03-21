import Image from "next/image"
import { Country } from "../types"

interface CountryCardProps {
  country: Country
}

const CountryCard = ({ country }: CountryCardProps) => {
  const { name, population, region, capital, flags } = country
  
  return (
    <div className="bg-white dark:bg-dark-element-bg rounded-lg shadow-lg">
      <div className="relative w-[264px] h-[160px]">
        <Image className="rounded-t-lg" layout="fill" objectFit="cover" src={flags.svg} alt={`${name.common} flag`} />
      </div>
      <div className="m-6">
        <h2 className="font-bold">{name.common}</h2>
        <div>
          <p>
            Population: {population} <br />
            Region: {region} <br />
            Capital: {capital}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard