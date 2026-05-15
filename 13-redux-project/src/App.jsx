import SearchBar from "./components/SearchBar"
import Tabs from "./components/Tabs"
import ResultContainer from './components/ResultContainer'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="w-full flex justify-center bg-[#F5FAFF]">
      <div className='min-h-screen w-7xl elms-sans commissioner flex flex-col items-center pt-10'>
        <div className="w-fit flex flex-col gap-5">
          <SearchBar />
          <Tabs />
        </div>
        <ResultContainer />
        <ToastContainer />
      </div>
    </div>
  )
}

export default App