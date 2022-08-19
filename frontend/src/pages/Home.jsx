import React from 'react';
import { Navbar,Hero } from '../components';

const Home = () => {
  return (
    <div id="home" className='dark:bg-black\[.04]'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home