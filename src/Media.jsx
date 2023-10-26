import React from 'react'
import Data from "./Data"

const Media = (props) => {
  return (
    <>
      
      <div class="inner">
      <images imgsrc={props.imgsrc} height="100%" width="100%" className="photo"/>
      
      </div>
    </>
  )
}

export default Media