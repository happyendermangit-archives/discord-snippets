import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import HomePage from './HomePage'
import NotFound from './NotFound'
import SnippetPage from './SnippetPage'

function App() {
  //const [count, setCount] = useState(0)

  let Page = NotFound;
  if (location.pathname === "/"){
    Page = HomePage
  }

  if (location.pathname.startsWith("/snippet")){
    Page = SnippetPage
  }

  return (
    <>
      <br /><br /><br /><br />
      <Navbar></Navbar>
      <Page></Page>
    </>
  )

}

export default App
