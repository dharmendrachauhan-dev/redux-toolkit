import React from 'react'
import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CollectionCard from '../components/CollectionCard'
import CollectionPages from './CollectionPages'

function HomePage() {

  const [search, setSearchBar] = useState(false)
  const [showCollection, setShowCollection] = useState(false)

  const openSerchBar = () => {
    setSearchBar(!search)
  }

  const {query} = useSelector((store) => store.search,)
  const checkQuery = query.trim().length > 0 // force to make truth and false value




  return (
    <div>
      <div className='flex justify-between items-center py-4 px-2 bg-blue-500 text-2xl'>
        <h2 className='font-medium text-2xl'>Media Search</h2>
        <div className='flex gap-5 items-center'>
          <Link 
          className='text-base font-medium active:scale-95 bg-green-500 text-white rounded px-4 py-2' 
          to='/'
          onClick={openSerchBar}
          >
            Search
          </Link>
          <Link 
          className='text-base font-medium active:scale-95 bg-orange-500 text-white rounded px-4 py-2' 
          to='/collection'>
          Collection
          </Link>
        </div>
      </div>

     {search && <SearchBar/>}
      
      {checkQuery && 
      <div>
        <Tabs/>
        <ResultGrid/>
      </div>}

      
    </div>
  )
}

export default HomePage
