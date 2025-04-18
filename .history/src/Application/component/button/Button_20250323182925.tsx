import { useEffect, useRef } from "react";
import { ButtonProps } from "../../core/interface";
import gsap from 'gsap';
import { setClassResponsive } from "../../core/tools";
import { responsiveSize } from "../../core/content";

export function Button({title,href="",click = () => {},onOver = undefined,onDown = undefined }: ButtonProps){

        const ButtonRef = useRef<HTMLAnchorElement>(null);

        //évènement au survole part default
        if(onOver === undefined && ButtonRef.current ){
            onOver = (event)=>{
                const duration = .2;
                gsap.to(ButtonRef.current, 
                    { 
                        y: -20, duration: duration, ease: "power2.out", 
                        onComplete:()=>{
                            gsap.to(ButtonRef.current, { y: 0, duration: duration, ease: "bounce.out",
                                onComplete:()=>{
                                    gsap.to(ButtonRef.current, { y: 0, duration: duration, ease: "bounce.out",
                                        onComplete:()=>{
                                            ButtonRef.current?.className += "text-decoration-1"
                                        }
                                    });
                                }
                            });
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
                className={setClassResponsive(
                    "m-2 alC-center h-100 al-center fw-400 p-2 color-bronze-12 text-none ",
                    "",
                    "",
                    null,
                    responsiveSize
                )}
            >
                {title}
            </a>
        );
}

