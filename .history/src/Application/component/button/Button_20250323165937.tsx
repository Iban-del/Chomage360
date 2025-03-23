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
                const duration = .1;
                gsap.to(ButtonRef.current, 
                    { 
                        y: -10, duration: duration, ease: "power2.out", 
                        onComplete:()=>{
                            gsap.to(ButtonRef.current, { y: 0, duration: duration, ease: "bounce.out" });
                        }
                    },
                );
            }
        }

        if(onDown === undefined){
            onDown = (event)=>{
                
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

