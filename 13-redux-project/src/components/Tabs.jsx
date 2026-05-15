import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../store/features/searchSlice"

function Tabs() {
    const tabs = ["photo","video","gif","collection"]
    const {activeTab, query} = useSelector((state) => state.search)
    const disptach = useDispatch()

  return (
    <div className="flex gap-5">
        {query !== "" ?
        tabs.map((tab,index) => {
            return <button 
            className={`${activeTab === tab ? 'bg-gray-500' : 'bg-gray-700'}  rounded capitalize px-4 py-2 active:scale-95 text-[#F5FAFF] cursor-pointer`}
            key={index}
            onClick={() => {
                disptach(setActiveTab(tab))
            }}
            >
                {tab}
            </button>
        })
        :
        <button 
        className={`${activeTab === "collection" ? 'bg-gray-500' : 'bg-gray-700'}  rounded capitalize px-4 py-2 active:scale-95 text-[#F5FAFF] cursor-pointer`}
        onClick={() => {
            disptach(setActiveTab("collection"))
        }}
        >
            collection
        </button>  
        }
    </div>
  )
}

export default Tabs