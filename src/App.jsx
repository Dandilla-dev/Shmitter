import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Body from "./components/Body.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
    const [user, setUser]=useState ({
        avatar:'https://gravatar.com/avatar/000?d=monsterid',
        name:'Monster'
    })
    const [stats, setStats]=useState ({
        Followers: 100,
        Following: 50
    })
  return (
      <div className={'app'}>
        <Navigation user={user}/>
        <Body user={user} stats={stats}/>
      </div>
  )
}

export default App
