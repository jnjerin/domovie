'use client'
import {MdLightMode, MdDarkMode} from "react-icons/md"
import { useTheme } from "next-themes"

export default function DarkModeSwitch() {
  const {systemTheme, theme, setTheme} = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div>{currentTheme === 'dark' ? (
        <MdLightMode 
        onClick={() => setTheme('light')}
            className='txt-xl cursor-pointer hover:text-green-800'  />
        ) : (
        <MdDarkMode
        onClick={() => setTheme('dark')} 
            className='txt-xl cursor-pointer hover:text-green-500' />)}</div>
  )
}

