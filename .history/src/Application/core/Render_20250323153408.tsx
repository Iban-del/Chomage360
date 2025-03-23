import { ReactNode, useEffect } from "react";
import { Listerners } from "./listeners";
import { CanvasProvider, StateProvider, SizeProvider } from "../contexts/context";
import { ScriptAnnimation } from "../Script/ScriptAnnimation";

export function OnRender({children}: {children:ReactNode}){

   

    return <>
        <CanvasProvider>
            <SizeProvider>
                <StateProvider>
                        <Listerners/>
                        {children}
                        <ScriptAnnimation/>
                </StateProvider>
            </SizeProvider>
        </CanvasProvider>
    </>

}
