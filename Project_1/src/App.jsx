import ResultGrid from './components/ResultGrid'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

function App() {
  return (
    <div className='h-full w-full text-white '>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default App
