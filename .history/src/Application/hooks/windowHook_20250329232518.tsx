import { useContext,} from "react";
import { sizeContext } from "../contexts/context";



/**
 * hook lié à la fenêtre
 */
export default function windowHook(){
    const size = useContext(sizeContext)


    

    return {
        size,

    }
}