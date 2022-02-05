import React from "react";


type BottomType = {
    title: string
    numPl?: () => void
    disablet: boolean
    res?: () => void

}


export function Bottom(props: BottomType) {

    return (

        <button
            onClick={props.numPl || props.res}
            disabled={props.disablet}

        >{props.title}</button>
    )
}