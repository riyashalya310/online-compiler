import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hii</h1>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
