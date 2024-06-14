import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {

  
  const [theme,setTheme] = useState('light-theme')
  const handleChange = ()=>{
    if(theme==='dark-theme')
    {
      setTheme('light-theme')
    }
    if(theme==='light-theme')
    {
      setTheme('dark-theme')
    }
  }

  useEffect(()=>{
      document.documentElement.className = theme;
  },[theme])
  return <main>
    <nav>
      <div className='nav-center'>
        <h1>overreacted</h1>
        <button className='btn' onClick={handleChange}>toggle</button>

      </div>
    </nav>
    <section className='articles'>
      {data.map((item)=>{

        return <Article key={item.id} {...item} />
      })}
    </section>
  </main>
}

export default App
