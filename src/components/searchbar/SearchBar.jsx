import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SinglePost from "../SinglePost";
import "../../index.css";

function SearchBar(props) {
    const navigate = useNavigate();
    const allPosts = props.allPosts;
    let [searchQuery, setSearchQuery] = useState("");
    
    const BarStyle = {
    width: "20rem",
    background: "#F0F0F0",
    border: "none",
    padding: "0.5rem",
  };
  
    let filteredPosts = [];
    if (allPosts) {
    filteredPosts = allPosts.filter((singlePost) => {
      let lowercasedTitle = singlePost.title.toLowerCase();
      let lowercasedQuery = searchQuery.toLowerCase();

      if (lowercasedTitle.includes(lowercasedQuery)) {
        return singlePost;
      }
    });
  }

  return (
    <div className="search-bar-input">
      <input
        style={BarStyle}
        key="search-bar"
        value={searchQuery}
        placeholder={"Search Stranger's Things"}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredPosts.length && searchQuery.length >= 1 ? (
        filteredPosts.map((singlePost, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setSearchQuery("");
                navigate(`./PostDeets${singlePost.title}`);
              }}
            >
              <h2> {singlePost.title}</h2>
            </div>
          );
        })
      ) : (
        <div id="search-bar-else-case"> 
            Else case in the SearchBar component when empty. I change with keystroke
        </div>
      )}
    </div>
  );
}

export default SearchBar;
