import { useState } from "react"
import {Moon, Sun} from "lucide-react";
import { useEffect } from "react";
export const ThemeToggle = () => {

  const [isDarkMode, setIsDarkMode]  = useState(false);
  useEffect(()=> {
const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
  setIsDarkMode(true);
  document.documentElement.classList.add("dark");
}
else {
      document.documentElement.classList.remove("dark")
    setIsDarkMode(false)
}
  }, [])
  
const toggleTheme = () => {
  if (isDarkMode) {
    document.documentElement.classList.remove("dark")
    setIsDarkMode(false)
   localStorage.setItem("theme", "light")
  } else 

  { document.documentElement.classList.add("dark")
    setIsDarkMode(true)
  localStorage.setItem("theme", "dark")}
}
  return <button onClick = {toggleTheme}> {isDarkMode ? <Sun className ="w-6 h-6 text-yellow-300"/> : <Moon className = "w-6 h-6 text-blue-900"/>} </button>
}