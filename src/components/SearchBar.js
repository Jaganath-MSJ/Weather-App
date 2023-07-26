import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import axios from "axios";

function SearchBar({ setSearch, location, backgroundFun }) {
  const [showSearch, setOnSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedPlaces, setSuggestedPlaces] = useState([]);
  const handleInputChange = async (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    try {
      const response = await axios.request({
        method: "GET",
        url: `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          value
        )}&format=json&featureType=city&countrycodes=IN`,
      });
      setSuggestedPlaces(response.data.map((data) => data.display_name));
    } catch (error) {
      console.error("Error fetching suggested places:", error);
      setSuggestedPlaces([]);
    }
  };
  const handlePlaceSelection = (name) => {
    setSearchQuery(name);
    setSearch(name);
    setSuggestedPlaces([]);
    setOnSearch(!showSearch);
  };
  return (
    <Container color={backgroundFun}>
      <div>
        {!showSearch && (
          <h3>
            <GoLocation /> {`${location.name}, ${location.region}`}
          </h3>
        )}
        <div className={showSearch ? "searchInput" : "searchIcon"}>
          {showSearch && (
            <input
              type="search"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search for a place..."
            />
          )}
          <FiSearch onClick={() => setOnSearch(!showSearch)} />
        </div>
      </div>
      {showSearch && (
        <ul className="suggestions">
          {suggestedPlaces.map((place, index) => (
            <li
              key={index}
              onClick={() => handlePlaceSelection(place.split(",")[0])}
            >
              {place.split(",")[0]}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

const Container = styled.div`
  div {
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
      padding: 0.7rem;
    }
    svg {
      cursor: pointer;
    }
  }
  .suggestions {
    position: absolute;
    width: 28%;
    height: max-content;
    z-index: 1;
    overflow-x: hidden;
    border-radius: 1rem;
    background: linear-gradient(to top left, ${(props) => props.color});
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0.5;
    gap: 0.3rem;
    list-style: none;
    li {
      cursor: pointer;
      font-weight: 500;
      padding: 0.4rem 0;
      transition: 0.3s ease-in-out;
      &:hover {
        font-weight: 800;
        transform: scale(1.03);
      }
    }
  }
`;

export default SearchBar;
