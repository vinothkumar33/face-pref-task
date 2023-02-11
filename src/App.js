import { useState } from "react";
import Login from "./component/login";
import ListingPageContainer from "./component/listpage";
import { HashRouter, Route, Router } from "react-router-dom";
import ListingPageComponent from "./component/listpagecomponent";

function  App() {
    const[view,setView]=useState(false);
    function View(p) {
        setView(p);
    }

    return(
        <>
        {view ? <ListingPageContainer setview={View} />:<Login setview={View} />}
        </>
    )
    
}

export default App;