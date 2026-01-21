import ResultGrid from './components/ResultGrid'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

function App() {
  return (
    <div className='h-screen w-full text-white bg-gray-900'>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default App
