import React from "react";

type DisplayType = {
  num: number
}



export function Display (props: DisplayType) {
    return (
        <span> {props.num}</span>
    )
}
