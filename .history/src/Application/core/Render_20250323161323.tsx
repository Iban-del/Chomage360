import { ReactNode } from "react";
import { Listerners } from "./listeners";
import { SizeProvider } from "../contexts/context";


export function OnRender({children}: {children:ReactNode}){

   

    return <>

        <SizeProvider>
            <Listerners/>
            {children}
        </SizeProvider>
    </>

}
