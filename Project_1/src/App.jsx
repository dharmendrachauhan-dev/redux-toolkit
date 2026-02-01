import CollectionPages from "./pages/CollectionPages.jsx"
import HomePage from "./pages/HomePage.jsx"
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <div className='h-full w-full text-white '>

      <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='/collection' element={<CollectionPages/>} />
      </Routes>

      <ToastContainer />

    </div>
  )
}

export default App
