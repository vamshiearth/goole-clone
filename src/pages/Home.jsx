import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps'
import Avatar from '@mui/material/Avatar'
import Search from '../components/Search'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon id='app-icon' />
          <Avatar />
        </div>
      </div>
      <div className='home__body'>
        <img
          src='https://www.google.com/logos/doodles/2015/fathers-day-2015-taiwan-5698544862232576.2-hp2x.gif'
          alt=''
        />
        <div className='home__inputContainer'>
          {/** Search */}
          <Search hideButtons></Search>
        </div>
      </div>
    </div>
  )
}

export default Home
