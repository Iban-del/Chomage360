import windowHook from "../hooks/windowHook"
const stepScroll:number = 1


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

