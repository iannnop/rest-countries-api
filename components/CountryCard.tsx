import Image from "next/image"

const CountryCard = () => {
  return (
    <div>
      <div className="bg-slate-700 w-[264px] h-[160px]" />
      <div>
        <h2>Germany</h2>
        <div>
          <p>
            Population: 811111 <br />
            Region: Europe <br />
            Capital: Berlin
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard