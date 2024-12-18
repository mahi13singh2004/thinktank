import React from 'react'
import ShuffleHero from './ShuffleHero'
import { MainContent } from './MainContent'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div className='bg-white'>
    <ShuffleHero/>
    <MainContent/>
    <Footer/>
    </div>
      
    </>
  )
}

export default Home