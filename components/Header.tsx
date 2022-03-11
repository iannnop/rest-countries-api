import { GlobeIcon, MoonIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), []);

  return (
    <div className="px-20 flex items-center justify-between h-[80px] shadow-md bg-white dark:bg-[#2B3844]">
      <div className="flex items-center">
        <GlobeIcon className="text-light-main-text dark:text-white w-10 h-10 mr-4" />
        <h1 className="font-bold text-2xl">Where in the world?</h1>
      </div>
      <button className="flex font-semibold" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <MoonIcon className="w-5 h-5 mr-2 text-light-main-text dark:text-white" />
        Dark Mode
      </button>
    </div>
  )
}

export default Header