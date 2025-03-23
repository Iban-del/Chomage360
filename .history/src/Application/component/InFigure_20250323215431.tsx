import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';



export function InFigure({children}:{children?:ReactNode}){

    const bgColor = "bg-bronze-8";
    const data = [
        { name: "Jan", sales: 4000 },
        { name: "Feb", sales: 3000 },
        { name: "Mar", sales: 5000 },
        { name: "Apr", sales: 4000 },
        { name: "May", sales: 6000 },
        { name: "Jun", sales: 7000 },
    ];

    return <div style={{top:"100px"}}  className="position-r top-10 w-100 h-100 d-bloc ">
        <div style={{height:window.innerHeight}} className="d-flex jC-center fd-column">
            <div className={"w-100 h-80 m-0 " + bgColor} id="InFigure">
                <div
                    className={setClassResponsive("h-15 w-100 d-flex fd-column jC-center al-center font-size-a11","","",null,responsiveSize)}
                >
                    <h1
                        className={setClassResponsive("","","",null,responsiveSize)}
                    >
                        En chiffre
                    </h1>
                    <div className="bar-2 "></div>
                </div>
                    
                <div
                    className={setClassResponsive("h-85 w-100","","",null,responsiveSize)}
                >
                    <ChartsOverview></ChartsOverview>
                </div>
            </div>
        </div>
        {children}
    </div>
}


function ChartsOverview() {
    return (
        <BarChart
        series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
        ]}
        height={390}
        width={700}
        xAxis={[{ data: ['Q1'], scaleType: 'band' }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
    );
}