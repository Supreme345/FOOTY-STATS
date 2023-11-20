import React from "react"
import { Link } from "react-router-dom"


function SearchBar() {

    return (
        <>
            <h1 className="home-title">FOOTY STATS</h1>
            <div className="search-tools">
            <input type="text" placeholder="Search" id="search-bar"/>
            <Link to="/stats-page">
                <button id="submit-button">Submit</button> 
            </Link>   
            </div>
        </>
    )
}

export default SearchBar