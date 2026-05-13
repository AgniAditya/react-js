import SearchBar from "./components/SearchBar"
import Tabs from "./components/Tabs"
import ResultContainer from './components/ResultContainer'

function App() {

  return (
    <div className="w-full flex justify-center bg-[#F5FAFF]">
      <div className='min-h-screen w-7xl elms-sans commissioner flex flex-col items-center pt-10'>
        <div className="w-fit flex flex-col gap-5">
          <SearchBar />
          <Tabs />
        </div>
        <ResultContainer />
      </div>
    </div>
  )
}

export default App