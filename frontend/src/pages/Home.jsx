import React from 'react';
import { Navbar,Hero } from '../components';

const Home = () => {
  return (
    <div className='dark:bg-black/[.8]'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home