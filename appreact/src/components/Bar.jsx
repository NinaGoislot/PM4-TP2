import React from "react";

function Bar({color = "secondary-background-color", row = true, width, height}) {

    const barWidth = width ? width : row ? "w-full" : "w-1";
    const barHeight = height ? height : row ? "h-1" : "h-full"

    return (

        <>
          <hr className={`${color} ${barWidth} ${barHeight}`}></hr>
        </>
  
    )
}

export default Bar;