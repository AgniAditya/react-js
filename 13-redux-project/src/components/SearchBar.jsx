import { useState } from "react"
import { useDispatch } from 'react-redux'
import { setQuery } from "../store/features/searchSlice";

function SearchBar() {
    const [searchValue,setSearchValue] = useState('');
    const disptach = useDispatch();

    function submitHandler(e){
        e.preventDefault();
        disptach(setQuery(searchValue))
    }

  return (
    <div>
        <form onClick={submitHandler}>
            <input 
            required
            value={searchValue} 
            type="text" 
            placeholder="search anything..." 
            onChange={(e) => {
                setSearchValue(e.target.value);
            }}
            />
            <button>Search</button>
        </form>
    </div>
  )
}

export default SearchBar