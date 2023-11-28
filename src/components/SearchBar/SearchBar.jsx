import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className='search-main'>

        <div className='search-input'>
            <input type="text" /><div className='search-icon'> <SearchIcon /></div>
        </div>
        {/* {text && (
        <div className="dataResults">
          {filterArray.map((ele, key) => {
            return (
              <a
                className="dataItem"
                href={ele.link}
                target="_blank"
                rel="noreferrer"
              >
                <p>{ele.title}</p>
              </a>
            );
          })}
          {filterArray.length === 0 && <p>No results found</p>}
        </div>
      )} */}
    </div>
  )
}

export default SearchBar