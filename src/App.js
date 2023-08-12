import React ,{useContext, useState} from 'react'
import { AppContext } from './context/contextApi'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Feed from './Components/Feed'
import SearchResult from './Components/SearchResult'
import VideoDetails from "./Components/VideoDetails"



const App = () => {
  
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />}/>
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>

  )
}

export default App