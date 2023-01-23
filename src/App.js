import React from "react";
import Main from "./Main";
import { useLocation } from "react-router-dom";

import tt_app_bg from "./pictures/cortex_prime_symbols.png";
import home_bg from "./pictures/four_point_spiral.png";

// Code to be run for route changes
function handleRouteChange(locationOBJ) {

    const url = locationOBJ.pathname;
    let htmlElement = document.documentElement;

    // Home page has been chosen / loaded
    if(url === '/home' || url === '/')
    {
        htmlElement.setAttribute('style', "background-color:#000000;" +
                                                            "background-image: url('" + home_bg + "')");
    }

    // Tabletop app has been chosen / loaded
    else if(url === '/tt_app')
    {
        htmlElement.setAttribute('style', "background-color:#ffffff;" +
                                                            "background-image: url('" + tt_app_bg + "')");
    }
    // Invalid path, should be redirected automatically in Main.js
    else { console.log('Invalid path: ' + url + ', redirecting to /home'); }
}

function App() {

    // Add listener for route changes
    const url = useLocation();
    React.useEffect(() => {
        handleRouteChange(url);
    }, [url]);

    return (<Main/>);
}




export default App;