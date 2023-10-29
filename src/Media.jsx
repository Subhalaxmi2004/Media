import React from 'react'
import Data from "./Data"

const Media = (props) => {
  return (
    <>
      
      <div class="inner">
      <img src={props.imgsrc} height="100%" width="100%" className="photo" alt="media" />
      
      </div>
    </>
  )
}

export default Media