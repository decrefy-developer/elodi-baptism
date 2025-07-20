import { useEffect } from 'react'
import ElodieProfile from './assets/Elodie-Hope-min.jpg'
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
       <div className="blessing-elements">🕊️</div>
        <div className="blessing-elements2">🙏</div>
        <img className="portrait" src={ElodieProfile} alt="Celebrant Photo" />
        <div className="name">Elodie Hope Dela Cruz</div>
        <div className="message">“Let the little children come to me, and do not hinder them,<br></br> for the kingdom of God belongs to such as these.”

</div>
    </>
  )
}

export default App
