import { useContext, useEffect, useRef, useState } from "react";
import { CanvasContext, StateContext , sizeContext } from "../contexts/context";



/**
 * hook lié à la fenêtre
 */
export default function windowHook(){
    const size = useContext(sizeContext)
    const state = useContext(StateContext)
    const canvasRef = useContext(CanvasContext);

    

    return {
        size,
        state,
        canvasRef
    }
}