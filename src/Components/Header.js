import React, { useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import ytLogo from "../images/yt-logo.png"
import ytLogoMobile from "../images/yt-logo-mobile.png"
import { SlMenu } from "react-icons/sl"
import { IoIosSearch } from "react-icons/io"
import { RiVideoAddLine } from "react-icons/ri"
import { FiBell } from "react-icons/fi"
import { CgClose } from "react-icons/cg"
import {AiOutlineSearch} from "react-icons/ai"
import { Context } from "../context/contextApi"
import Loader from "../shared/Loader"
import {FaBell,FaUserCircle} from "react-icons/fa"
import {BsFillGrid3X3GapFill} from "react-icons/bs"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const { loading, mobileMenu, setMobileMenu } = useContext(Context)
   
  const navigate = useNavigate()
  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" || event === "searchButton"|| searchQuery?.length > 0) {
      
      navigate(`/searchResult/${searchQuery}`)
    }
  }

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu)
  }
  const { pathname } = useLocation();
  const pageName = pathname?.split('/').filter(Boolean)?.[0]

  return (

    <div className='sticky top-0 h-14 z-10 flex flex-row items-center justify-between px-4 md:px-5 bg-white dark:bg-black'>
      {loading && <Loader />}
      <div className="flex h-5 items-center">
                {pageName !== "video" && (
                    <div
                        className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
                        onClick={mobileMenuToggle}
                    >
                        {mobileMenu ? (
                            <CgClose className="text-white text-xl" />
                        ) : (
                            <SlMenu className="text-white text-xl" />
                        )}
                    </div>
                )}
                <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-full hidden dark:md:block"
                        src={ytLogo}
                        alt="Youtube"
                    />
                    <img
                        className="h-full md:hidden"
                        src={ytLogoMobile}
                        alt="Youtube"
                    />
                </Link>
                
            </div>
            <div className='w-[40vw] group border rounded-lg h-8 border-white-400 flex'>
               
               <AiOutlineSearch className='text-white flex-2 hidden md:block' size={30}/>
              <input type="text" className='w-[30vw] md:flex-1 bg-black border-l-2 border-white text-white'
              onKeyUp={searchQueryHandler}
              value={searchQuery}
onChange={(e)=>setSearchQuery(e.target.value)}
              />
              <button onClick={() => searchQueryHandler("searchButton")} className='text-white text-[1.5vh] sm:w-[0.5vw] md:flex-3 md:w-[5vw] border-l-2'>Search</button>
            </div>
            <div  className="rightHeader flex items-center gap-2 ">
<FiBell className="text-white" />
<BsFillGrid3X3GapFill className="text-white"/>
<FaUserCircle className="text-white"/>
      </div>
    </div>
  )
}

export default Header