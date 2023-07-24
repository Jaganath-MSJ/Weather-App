import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function SearchBar({ setSearch, search, currentCity }) {
  const [showSearch, setOnSearch] = useState(false);
  return (
    <Container>
      {!showSearch && (
        <h3>
          <GoLocation /> Delhi, India
        </h3>
      )}
      <div className={showSearch ? "searchInput" : "searchIcon"}>
        {showSearch && <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />}
        <FiSearch onClick={() => setOnSearch(!showSearch)} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  h3 {
    width: 90%;
    text-align: left;
  }
  div {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.4),
      transparent,
      rgba(255, 255, 255, 0.3)
    );
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 0.5rem;
    margin-top: 7px;
  }
  .searchInput {
    width: 100%;
    display: flex;
    align-items: center;
    input {
      width: 94%;
      height: 2.5rem;
      padding-left: 1rem;
      outline: none;
      background: transparent;
      border: none;
      color: white;
      &::-webkit-search-cancel-button {
        display: none;
      }
    }
  }
  .searchIcon {
    height: max-content;
    padding: 0.4rem;
  }
`;

export default SearchBar;
