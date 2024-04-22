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
        <nav className="header">
        <h1 className="header-title">
            Welcome to Anime Heap!
        </h1>
        {function(){
            if(currPage === "MainPage") {
                return <a className="toolbar-link" href='' onClick={handleClick}>Collections</a>
            } else if (currPage === "CollectionPage") {
                return <a className="toolbar-link" href='' onClick={handleClick}>Home</a>
            }
        }()}
        </nav>
        {function(){
            if (currPage === "MainPage"){
                return <MainPage currPage={currPage} />
            } else if (currPage === "CollectionPage") {
                return <CollectionPage currPage={currPage} />
            }
        }()}
        </>
    )
}

export default App