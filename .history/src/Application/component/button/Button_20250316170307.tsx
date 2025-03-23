import { ButtonProps } from "../../core/interface";


export function Button({title,href="",click = () => {},onOver = undefined,onDown = undefined, current = false }: ButtonProps){

        //création des class css
        let className:string = "m-2 fw-200 color-blue-contrast p-2 border-blue-t1 br-3 ";
        current?className+"":true;

        //évènement au survole part default
        if(onOver === undefined){
            onOver = (event)=>{
                event.target.className =" p-2 m-2 fw-200 br-3 border-blue-contrast"
            }
        }

        if(onDown === undefined){
            onDown = (event)=>{
                event.target.className = className
            }
        }

        return (
            <a
                href={href}
                onClick={click}
                onMouseOver={onOver}
                onMouseOut={onDown}
                className={className}
            >
                {title}
            </a>
        );
}

