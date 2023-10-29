import React from "react";
import "./index.css"
import Media from "./Media";
import Data from "./Data"
function ncard(val){
    return (
      <Media
        imgsrc={val.imgsrc}
      />
    );
  }
const App = () =>{
 
return(
    <>
    <div className="header">
    <h1>Media Coverage</h1></div>
    <div className="outer">
    {Data.map
(ncard)}</div>
    </>
);
}
export default App;
