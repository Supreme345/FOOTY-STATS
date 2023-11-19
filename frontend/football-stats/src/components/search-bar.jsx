function SearchBar() {

    return (
        <>
            <h1 className="home-title">FOOTY STATS</h1>
            <div className="search-tools">
            <input type="text" placeholder="Search" id="search-bar"/>
            <button id="submit-button">Submit</button>   
            </div>
        </>
    )
}

export default SearchBar