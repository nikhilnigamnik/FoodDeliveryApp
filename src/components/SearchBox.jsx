import React from 'react'

const SearchBox = () => {
  return (
    <div>
         <input
          type="text"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
    </div>
  )
}

export default SearchBox