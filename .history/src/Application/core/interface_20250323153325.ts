import { BaseSyntheticEvent, JSX, RefObject } from "react"
import { PerspectiveCamera, Vector3 } from "three"

export interface ButtonsNavBarInterface{
    title:string,
    click:string,
    current:boolean
}

export interface SkillsInterface{
    title:string,
    percentage:number,
    type:string|Array<string>
}

export interface sizeInterface{
    height:number,
    width:number
}

export interface WindowSizeInterface{
    size:sizeInterface,
    setSize:(c:sizeInterface)=> void
}

export interface WindowScrollInterface{
    state:number,
    setState:(c:number)=> void
}

export interface WindowCanvasInterface{
    canvasRef:RefObject<PerspectiveCamera | null>,
}

export interface ButtonProps {
    title?: string,
    click?: () => void,
    onOver?: (event:BaseSyntheticEvent) => void,
    onDown?: (event:BaseSyntheticEvent) => void,
    current?: boolean,
    href?:string
}

export interface IconButtonInterface {
    icons:JSX.Element[],
    click?: (event: React.MouseEvent) => void,
    onOver?: (event:BaseSyntheticEvent) => void,
    onDown?: (event:BaseSyntheticEvent) => void,
    href?:string
}

export interface DropDownListInterface{
    buttons:(JSX.Element | undefined)[]
}

export interface speedRotationInterface{
    x:number,
    y:number,
    z:number
}

export interface SphereInterface{
    size:number,
    speedRotation:number|speedRotationInterface,
    link?:string,
    transparent?:boolean,
    opacity?:number,
    wireframe?:boolean,
    segments?:number,
    color?:string,
    light?:boolean,
    lightColor?:string,
    intensityLight?:number,
    position?:Vector3;
}

export interface ParticleInterface{
    position?:Vector3;
    color?:string,

}

export interface TextInterface{
    text:string,
    position?:Vector3;
    animation?:boolean
    color?:string
}

export interface PaternInterface{
    link:string,
    position?:Vector3;
    size?:number,
    height?:number,
    color?:string
}