import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../store/features/searchSlice"

function Tabs() {
    const tabs = ["photo","video","gif","collections"]
    const activeTab = useSelector((state) => state.search.activeTab)
    const disptach = useDispatch()

  return (
    <div className="flex gap-5">
        {tabs.map((tab,index) => {
            return <button 
            className={`${activeTab === tab ? 'bg-gray-500' : 'bg-gray-700'}  rounded capitalize px-4 py-2 active:scale-95 text-[#F5FAFF] cursor-pointer`}
            key={index}
            onClick={() => {
                disptach(setActiveTab(tab))
            }}
            >
                {tab}
            </button>
        })}
    </div>
  )
}

export default Tabs