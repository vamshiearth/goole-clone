import React, { useState } from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Search = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const search = (e) => {
    console.log('You hit the search button', input)
    e.preventDefault()
    navigate('/search')
  }
  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className='search__micIcon' />
      </div>
      <div className='search__buttons '>
        <Button type='submit' onClick={search} variant='outlined'>
          Google Search
        </Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>
      </div>
    </form>
  )
}

export default Search
