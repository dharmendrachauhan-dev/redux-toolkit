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
    <form className='flex justify-center  py-4 px-4 gap-4' onSubmit={(e)=>handleForm(e)} >
        <input
        type="text"
        placeholder='Search Karo'
        className='outline-none text-white transition-all border-2 border-slate-600 rounded-xl w-full px-3 py-1'
        onChange={(e)=>setSearchText(e.target.value)}
        value={searchText}
        />
        <button 
        className='px-4 py-3 font-medium rounded cursor-pointer active:scale-95 transition-all bg-cyan-400'
        onClick={handleForm}
        >Search</button>
    </form>
  )
}

export default SearchBar
