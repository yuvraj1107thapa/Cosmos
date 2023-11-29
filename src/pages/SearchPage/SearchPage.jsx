import React, { useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserList from "../../components/UserList/UserList";
import { DataContext } from "../../contexts/DataContext";
import "./SearchPage.css";

const SearchPage = () => {
  const { state } = useContext(DataContext);

  return (
    <div>
      <div className="searchpage">
        <h1>Search page</h1>
        <div className="side-search-bar">
          <SearchBar />
          <div className="user-container">
            <h2>You might Like</h2>
            {/* Displaying suggestions to whom user can follow*/}
            {state?.userToFollow?.map((user) => (
              <UserList user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
