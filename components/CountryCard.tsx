import Image from "next/image"
import { Country } from "../types"

interface CountryCardProps {
  country: Country
}

const CountryCard = ({ country }: CountryCardProps) => {
  const { name, population, region, capital, flags } = country
  
  return (
    <div className="bg-white dark:bg-dark-element-bg rounded-lg shadow-lg">
      <div className="">
        <Image className="rounded-t-lg" width={264} height={160} objectFit="cover" src={flags.svg} alt={`${name.common} flag`} />
      </div>
      <div className="m-6">
        <h2 className="font-bold">{name.common}</h2>
        <div>
          <p>
            Population: {population.toLocaleString()} <br />
            Region: {region} <br />
            Capital: {capital}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard