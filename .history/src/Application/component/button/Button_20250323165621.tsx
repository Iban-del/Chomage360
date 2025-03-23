import { useEffect, useRef } from "react";
import { ButtonProps } from "../../core/interface";
import gsap from 'gsap';

export function Button({title,href="",click = () => {},onOver = undefined,onDown = undefined, current = false }: ButtonProps){

        const ButtonRef = useRef<HTMLAnchorElement>(null);

        //création des class css
        let className:string = "m-2 fw-400 p-2 color-bronze-12 text-none ";
        current?className+"":true;
        //évènement au survole part default
        if(onOver === undefined){
            onOver = (event)=>{
                gsap.to(ButtonRef.current, { scale: 1.2, duration: 0.3, ease: "power2.out" });
            }
        }

        if(onDown === undefined){
            onDown = (event)=>{
                gsap.to(ButtonRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
            }
        }

        

        return (
            <a
                ref={ButtonRef}
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

