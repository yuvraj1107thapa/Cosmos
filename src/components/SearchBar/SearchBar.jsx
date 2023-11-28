import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from '@mui/icons-material/Clear';
import "./SearchBar.css";
import { useContext } from "react";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import { DataContext } from "../../contexts/DataContext";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  const { searchUser, setSearchUser } = useContext(AsideDataContext);
  const { state } = useContext(DataContext);

  const searchResult = searchUser ? (
    state?.users?.filter(({ username }) =>
      username.toLowerCase().includes(searchUser.toLowerCase())
    )
  ) : (
    <></>
  );

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
         {searchUser ? <div id="clearBtn" onClick={()=>setSearchUser("")}> <ClearIcon /> </div> : <SearchIcon />}
        </div>
      </div>
      {searchUser && (
        <div className="dataResults">
          {searchResult.length === 0 ? <h3 className="nav-profile">No results found</h3> :
          searchResult.map((ele) => {
            return (
              <NavLink to={`/profilepage/${ele.username}`}>
                {/* <p>{ele.username}</p> */}
                <div className="nav-profile">
                  <img
                    src={ele?.avatarUrl}
                    alt=""
                    className="nav-profile-pic"
                  />
                  <div>
                    <h4>
                      {ele.firstName} {ele.lastName}
                    </h4>
                    <span>@{ele.username}</span>
                  </div>
                </div>
              </NavLink>
            );
          })}
          {/* <div className="dataResults">
          {searchResult.length === 0 && <h5>No results found</h5>}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
