import React from 'react'
import OurFlowers from '../../components/OurFlowers/OurFlowers'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <div>
      <div>  
        <Helmet>
        <title>Home | New Flowers!</title>

        </Helmet>
        
        </div>
      <OurFlowers/>
    </div>
  )
}

export default Home