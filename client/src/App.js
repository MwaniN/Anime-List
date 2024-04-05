import React, { useState } from "react";
import MainPage from "./MainPage.jsx"
import CollectionPage from "./Collections.jsx"

// make a state that either shows Main Page or Collection page with conditional arguments in the return statement here
// to display each

const App = () =>{

    const [currPage, setCurrPage] = useState("MainPage")

    function handleClick(e) {
        e.preventDefault();
        const link = e.target.innerText;

        if (link === currPage) {
            return
        } else if (link === "Home") {
            setCurrPage("MainPage")
        } else if (link === "Collections") {
            setCurrPage("CollectionPage")
        }
        return
    }

    return (
        <>
        <h1>
            Welcome to Anime Heap!
        </h1>
        <a className="toolbar-link" href='' onClick={handleClick}>Home</a>
        <a className="toolbar-link" href='' onClick={handleClick}>Collections</a>
        {function(){
            if (currPage === "MainPage"){
                return <MainPage />
            } else if (currPage === "CollectionPage") {
                return <CollectionPage currPage={currPage} />
            }
        }()}
        </>
    )
}

export default App