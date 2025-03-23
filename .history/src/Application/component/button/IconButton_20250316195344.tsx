import { useState } from "react";
import { IconButtonInterface } from "../../core/interface";

export function IconButton({icons,href="",click = () => {},onOver = undefined,onDown = undefined}:IconButtonInterface){

        const [index,setIndex] = useState<number>(0)

        if(icons && icons.length === 2){
            
            const onClick = (event: React.MouseEvent)=>{
                event.preventDefault();
                setIndex(Math.abs(index-1))
                click(event);
            }
            
            return (
                <a
                    href={href}
                    onClick={onClick}
                    onMouseOver={onOver}
                    onMouseOut={onDown}
                    className="m-2 fw-200 color-blue-contrast p-2 br-3"
                >
                    {icons[index]}
                </a>
            );
        }
        
        return null;
}

