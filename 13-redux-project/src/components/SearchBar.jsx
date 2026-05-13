import { useState } from "react"
import { useDispatch } from 'react-redux'
import { setQuery } from "../store/features/searchSlice";
import { Search } from 'lucide-react'

function SearchBar() {
    const [searchValue,setSearchValue] = useState('');
    const disptach = useDispatch();

    function submitHandler(e){
        e.preventDefault();
        disptach(setQuery(searchValue.trim()))
    }

  return (
    <div className="flex justify-center">
        <form onSubmit={submitHandler}
        className="flex items-center gap-1">
            <input
            value={searchValue} 
            type="text" 
            placeholder="search" 
            onChange={(e) => {
                setSearchValue(e.target.value);
            }}
            className="bg-gray-300 w-4xl h-10 px-7 outline-0 rounded-3xl"
            />
            <button className="cursor-pointer rounded-full p-2 bg-gray-200"><Search size={25}/></button>
        </form>
    </div>
  )
}

export default SearchBar