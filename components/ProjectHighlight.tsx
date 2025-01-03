import { ProjectData } from "@/const/data";
import { getColors } from "@/const/theme"
import React from "react";
import Button from "./Button";
import Photo from "./Photo";
import { FaArrowRightLong } from "react-icons/fa6";
import clsx from "clsx";

const getPhase = (phase: ProjectData['phase']) => {
    switch (phase) {
        case 'assembly':
            return <span className={"text-[#E6C300]"}>Assembly Phase</span>;
        case 'design':
            return <span className={"text-[#F4761B]"}>Design Phase</span>;
        case 'success':
            return <span className={"text-[#4CB75A]"}>Mission Success</span>;
    }
}

export default function ProjectHighlight(props: ProjectData & { direction?: 'left' | 'right' }) {
    const colors = getColors();

    console.log(props);
    
    const elements = [
        <Photo>
            <p className={"p-2"}>{props.id} Image</p>
        </Photo>,
        <div className={"font-mono flex flex-col gap-4"}>
            <h3 
                key={"title"} 
                className={clsx(
                    `font-bold md:text-left text-2xl text-[${colors.text}]`
                )}
            >
                <span className={` text-2xl text-[#777777]`}>[{props.id}]</span>
                &nbsp;{props.title}
            </h3>
            <p key={"description"} className={"text-lg"}>{props.description}</p>
            <div key={"buttons"} className={"flex flex-row flex-wrap gap-4 justify-between items-center"}>
                <div className={clsx("flex flex-row items-center", `text-[#777777]`)}>
                    {props.date} <span>&nbsp;|&nbsp;</span> {props.contributors} Contributors <span>&nbsp;|&nbsp;</span> {getPhase(props.phase)}
                </div>
                <div 
                    className={clsx(
                        "flex flex-row md:text-left justify-center md:justify-start gap-4 items-center"
                    )}
                >
                    <Button style={'red'} isLink={true} href={""}>
                        See the Poster
                    </Button>

                    <Button isLink={true} href={""}>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <p>Learn More</p>
                            <FaArrowRightLong />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    ];

    return (
        <div 
            className={clsx(
                "flex flex-row flex-wrap xl:items-start xl:flex-nowrap gap-8 justify-between"
            )}
        >
            {props.direction === 'right' &&
                <div className={"block w-full xl:hidden"}>
                    {elements[0]}
                </div>
            }
            {props.direction === 'right' ? (
                <>
                    {elements[1]}
                    <div className={"hidden xl:block"}>{elements[0]}</div>
                </>
            ) : (
                <>
                    {elements[0]}
                    {elements[1]}
                </>
            )}
        </div>
    )
}