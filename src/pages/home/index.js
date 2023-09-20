import React from "react";
import {Button, Typography} from "antd";
import { BsArrowRight } from "react-icons/bs";

export const HomePage = () => {
    const backgroundStyle = {
        backgroundImage: `url("https://i.pinimg.com/originals/4b/a8/e0/4ba8e092a10a2da5b100cae7c87e8e29.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
    };

    return (
        <div style={backgroundStyle}>
            <div className="justify-left text-left pt-[300px] pl-[100px]">
                <Typography className="font-avant-garde font-semibold text-[15px] text-white uppercase tracking-wider">
                    MOTION PICTURE ENTERPRISE
                </Typography>
                <div className="w-[800px]">
                    <Typography className="font-butler font-normal text-white text-[100px] mb-5">
                        All about
                        <span className="font-butler font-normal text-white text-[100px] mb-5 bg-[#c39d63] m-0 pr-[10px]">
                            movies
                        </span>{" "}
                        that move you
                    </Typography>
                </div>
                <Button className="flex justify-between items-center border-0">
                    <Typography className="font-butler font-bold text-white text-[15px]">
                        ABOUT US
                    </Typography>
                    <div className="text-white text-[20px] pl-[20px]">
                        <BsArrowRight className="w-[40px] h-[40px] text-[#c39d63]" />
                    </div>
                </Button>
            </div>
        </div>
    );
};
