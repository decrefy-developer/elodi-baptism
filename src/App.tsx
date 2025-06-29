import { useEffect } from 'react'
import ElodiePng from './assets/Elodie.jpeg'
import './App.css'

function App() {
   useEffect(() => {
    window.location.href = 'https://elodiebaptism.my.canva.site'
  }, [])

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={ElodiePng} className="logo" alt="Elodie logo" />
        </a>
      </div>
      <h1>Elodie Hope Dela Cruz</h1>
      // <p className="read-the-docs">
      //   Click on the Vite and React logos to learn more
      // </p>
    </>
  )
}

export default App
