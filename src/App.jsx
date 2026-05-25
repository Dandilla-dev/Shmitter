import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Body from "./components/Body.jsx";
import Navigation from "./components/Navigation.jsx";
import {ShmitterContext} from "./utils/context.js";

function App() {
    const [user, setUser]=useState ({
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name:'Monster'
    })
    const [stats, setStats]=useState ({
        followers: 100,
        following: 50
    })
    const changeAvatar = url => {
        setUser({...user, avatar: url || user.avatar})
    }
  return (
      <div className={'app'}>
          <ShmitterContext value={{
              user, changeAvatar, stats
          }}>
        <Navigation />
        <Body />
          </ShmitterContext>
      </div>
  )
}

export default App
