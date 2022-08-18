import React from 'react';
import { Navbar,Hero } from '../components';

const Home = () => {
  return (
    <div id="home" className='dark:bg-black/[.8]'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home