import React,{useState} from "react";
import "./index.css"
import Media from "./Media";
import Data from "./Data"
function ncard(val){
    return (
      <Media
        imgsrc={val.imgsrc}
        title= {val.title}
        sname={val.sname}
        link={val.link}
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
