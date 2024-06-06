import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GlobelState } from './contextAPI/GlobelState'
import { contextReducer, contextState } from './contextAPI/Reducer'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobelState initialState={contextState} reducer={contextReducer}>
      <Home/>
    </GlobelState>
  )
}

export default App
