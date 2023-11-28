import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
import { useContext } from "react";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import { DataContext } from "../../contexts/DataContext";

const SearchBar = () => {
  const { searchUser, setSearchUser } = useContext(AsideDataContext);
  const { state } = useContext(DataContext);

  return (
    <div className="search-main">
      <div className="search-input">
        <input
          type="text"
          value={searchUser}
          placeholder="Search users..."
          onChange={(event) => setSearchUser(event.target.value)}
        />
        <div className="search-icon">
          {" "}
          <SearchIcon />
        </div>
      </div>
      {searchUser && (
        <div className="dataResults">
          {state.users.map((ele, key) => {
            return (
              <a
                className="dataItem"
                href={ele.link}
                target="_blank"
                rel="noreferrer"
              >
                <p>{ele.username}</p>
              </a>
            );
          })}
          {state.users.length === 0 && <p>No results found</p>}
        </div>
      )}
    </div>
  );
};

export default SearchBar;