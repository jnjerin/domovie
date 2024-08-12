'use client'
import {MdLightMode, MdDarkMode} from "react-icons/md"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function DarkModeSwitch() {
  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentTheme = theme === "system" ? systemTheme : theme
  useEffect(() => setMounted(true), [])
  return (
    <div>
        {mounted && (currentTheme === 'dark' ? (
            <MdLightMode 
                onClick={() => setTheme('light')}
                className='txt-xl cursor-pointer hover:text-green-800'  
            />
        ) : (
            <MdDarkMode
                onClick={() => setTheme('dark')} 
                className='txt-xl cursor-pointer hover:text-green-500' 
            />
        ))}
    </div>
  )
}
