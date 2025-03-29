import windowHook from "../hooks/windowHook"


/**
 * fichier des listerners
 */
export function Listerners(){

    const {size} = windowHook();

    window.onresize =()=>{
        size?.setSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }    
    
    return null
}

