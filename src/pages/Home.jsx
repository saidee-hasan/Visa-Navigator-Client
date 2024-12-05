import React from 'react'
import Banner from '../components/Banner'
import LatestVisas from '../components/LatestVisas'
import Interview from '../components/Interview'
import Faq from '../components/Faq'

function Home() {
  return (
    <div className='lg:w-11/12 mx-auto'>
      <Banner/>
      <br />
      <LatestVisas/>
      <Interview/>
      <Faq/>
    </div>
  )
}

export default Home
