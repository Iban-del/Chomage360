import { ReactNode } from "react";
import { setClassResponsive } from "../core/tools";
import { responsiveSize } from "../core/content";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";



export function InFigure({children}:{children?:ReactNode}){

    const bgColor = "bg-purple-8";
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
                    <Card sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 2 }}>
                    <CardContent>
                        <Typography variant="h6" align="center" gutterBottom>
                        Sales Overview
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sales" fill="#1976d2" radius={[5, 5, 0, 0]} />
                        </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        {children}
    </div>
}


