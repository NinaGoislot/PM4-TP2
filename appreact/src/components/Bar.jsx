import React from "react";

function Bar({color = "bg-dark-color", row = true, width, height}) {

    const barWidth = width ? width : row ? "w-full" : "w-1";
    const barHeight = height ? height : row ? "h-1" : "h-48";

    return (

        <>
          <hr className={`bar-classes ${color} ${barWidth} ${barHeight}`}></hr>
        </>
  
    )
}

export default Bar;