import React,{useEffect,useState} from 'react'
import Hero from './components/Hero'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'

function App() {
  const[theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    } else{
      setTheme('light');
    }
   
  
  }, []);
  useEffect(() => {
    if(theme === 'dark'){ 
      document.documentElement.classList.add('dark')
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark') //this allows us to switch from dark to light mode
    }
  },[theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark'? 'light':'dark')

  }
  return (
    <>
    
    <button type='button' onClick={handleThemeSwitch} className='fixed z-10 right-2 top-2 bg-blue-500 text-lg p-1 rounded-md'>  {theme === 'dark' ? '🌙': '🌞'}</button>
    <div className='font-inter bg:white dark:bg-slate-900'>
      <div className='max-w-5xl mx-auto w-11/12'>
      <Hero></Hero>
      <Services></Services>
      <Projects></Projects>
    </div>
    </div>
    </>
  )
}

export default App

