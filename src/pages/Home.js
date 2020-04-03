import React, { useState } from 'react'
import Kv from '../components/Home/Kv'
import Intro from '../components/Home/Intro'
import Gallery from '../components/Home/Gallery'
import Spec from '../components/Home/Spec'
import Product from '../components/Home/Product'

function Home() {
  return (
    <>
      <Kv />
      <Intro />
      <Gallery />
      <Spec />
      <Product />
    </>
  )
}

export default Home
