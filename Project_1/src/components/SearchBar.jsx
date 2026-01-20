import { useState } from 'react' 
import { useDispatch } from  'react-redux'
import {setQuery} from '../redux/features/searchSlice.js'

function SearchBar() {

    const [searchText, setSearchText] = useState('')

    const dispatch = useDispatch()

    const handleForm = (e)=>{
        e.preventDefault()
        dispatch(setQuery(searchText))
        setSearchText('')
    }

  return (
    <form className='flex justify-center pt-4 gap-4' onSubmit={(e)=>handleForm(e)} >
        <input
        type="text"
        placeholder='Search Karo'
        className='bg-white outline-none text-black transition-all border-2 border-slate-600 rounded-xl px-3 py-1'
        onChange={(e)=>setSearchText(e.target.value)}
        value={searchText}
        />
        <button 
        className='p-4 rounded cursor-pointer active:scale-95 transition-all bg-cyan-400'
        onClick={handleForm}
        >Search</button>
    </form>
  )
}

export default SearchBar
