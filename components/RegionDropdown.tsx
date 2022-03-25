import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

interface RegionDropdownProps {
  filterRegion: string;
  setFilterRegion: any;
}

interface DropdownItemProps {
  region: string;
  handleChange: any;
}

const RegionDropdown = ({ filterRegion, setFilterRegion }: RegionDropdownProps) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleChange = (region: string) => {
    setFilterRegion(region)
    setShowOptions(false)
  }

  return (
    <>
      <button onClick={() => setShowOptions(!showOptions)} className='w-[200px] h-[56px] px-5 flex justify-between items-center bg-white dark:bg-dark-element-bg rounded-md'>
        {filterRegion ? filterRegion : "Filter by Region"}
        {showOptions ? 
        <ChevronUpIcon className='w-5 h-5'/> :
        <ChevronDownIcon className='w-5 h-5'/>
        }
      </button>
      {showOptions && 
        <span className='absolute flex flex-col z-10 py-4 space-y-2 top-60 lg:right-20 lg:top-48 bg-white dark:bg-dark-element-bg rounded-md shadow-sm list-none '>
          <DropdownItem region="" handleChange={handleChange} />
          <DropdownItem region="Africa" handleChange={handleChange} />
          <DropdownItem region="America" handleChange={handleChange} />
          <DropdownItem region="Asia" handleChange={handleChange} />
          <DropdownItem region="Europe" handleChange={handleChange} />
          <DropdownItem region="Oceania" handleChange={handleChange} />
        </span>
      }
    </>
  )
}

export default RegionDropdown

const DropdownItem = ({ region, handleChange }: DropdownItemProps) => {
  return (
    <button onClick={() => {handleChange(region)}} className='w-[200px] px-6 hover:font-semibold text-left cursor-pointer'>
      {region ? region : "No Filter"}
    </button>
  )
}