import { ReactNode } from "react";




export function Home({children}:{children?:ReactNode}){

    return <div style={{top:"100px"}}  className="position-r  w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight-100}}>
            
        </div>
        {children}
    </div>
}


