import React from 'react'
import Banner from '../components/Banner'
import LatestVisas from '../components/LatestVisas'

function Home() {
  return (
    <div className='lg:w-11/12 mx-auto'>
      <Banner/>
      <br />
      <LatestVisas/>
    </div>
  )
}

export default Home
