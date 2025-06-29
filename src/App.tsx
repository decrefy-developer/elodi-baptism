import { useEffect } from 'react'
import ElodiePng from './assets/Elodie.jpeg'
import './App.css'

function App() {
   useEffect(() => {
      const timer = setTimeout(() => {
      window.location.href = 'https://elodiebaptism.my.canva.site'
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup
  }, [])

  return (
    <>
       <div class="blessing-elements">🕊️</div>
        <div class="blessing-elements2">🙏</div>
        <img class="portrait" src={ElodiePng} alt="Celebrant Photo" />
        <div class="name">Elodie Hope Dela Cruz</div>
        <div class="message">Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these.</div>
    </>
  )
}

export default App
