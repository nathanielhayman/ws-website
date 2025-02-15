import { ProjectData } from "@/types/data";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Link from 'next/link';
import { HiOutlineExternalLink } from "react-icons/hi";
import Button from "./Button";
import Photo from "./Photo";
import Image from 'next/image';

import { motion } from 'motion/react';

const getPhase = (phase: ProjectData['phase']) => {
    switch (phase) {
        case 'assembly':
            return <span className={"text-accent-red"}>Assembly Phase</span>;
        case 'design':
            return <span className={"text-accent-red"}>Design Phase</span>;
        case 'prototyping':
            return <span className={"text-accent-red"}>Prototyping Phase</span>;
        case 'proposal':
            return <span className={"text-accent-red"}>Proposal Phase</span>;
        case 'success':
            return <span className={"text-[#4CB75A]"}>Mission Success</span>;
    }
}

export default function ProjectHighlight(props: ProjectData & { direction?: 'left' | 'right' }) {
    const {theme} = useTheme();

    return (
        <div className={clsx(
            props.image ? "min-h-[700px]" : "",
            "flex flex-col items-center justify-center relative"
        )}>
            {props.image ? <Image 
                src={props.image}
                alt="/"
                width={700}
                height={700}
                className={clsx(
                    "relative md:absolute z-0 mr-0 ml-0",
                    props.direction === 'left' ? "left-0" : "right-0",
                )}
            /> : undefined}
            <motion.div
                transition={{ delay: 0.3, duration: 0.5 }}
                initial={{ opacity: 0, x: props.direction === 'right' ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={clsx(
                    theme === 'light' ? "shadow-md" : "",
                    `bg-fg border-bg-highlight border-[1px] rounded-md z-10 mr-0 ml-0`,
                    "flex flex-row flex-wrap xl:flex-nowrap min-w-full md:min-w-[30rem] min-h-0 md:min-h-[24rem]",
                    props.direction === 'right' ? "justify-between" : "justify-start",
                    props.image ? (
                        props.direction === 'right' ? "md:mr-[40rem]" : "md:ml-[40rem]"
                    ) : ""
                )}
            >
                <div className={clsx(
                    "relative flex flex-col justify-between p-8"
                )}>
                    <div className="font-sans flex flex-col gap-4">
                        <h3 
                            key={"title"} 
                            className={clsx(
                                `font-bold md:text-left text-2xl/10 text-text`
                            )}
                        >
                            <Link className={`rounded-full font-mono -ml-2 mr-1 px-4 py-1 hover:bg-fg-hover border-bg-highlight border-[1px]`} href={`/projects/${props.id.replaceAll("-", "").toLowerCase()}`}>
                                {props.id}
                            </Link>
                            &nbsp;{props.title}
                        </h3>
                        <p key={"description"} className={"font-sans font-medium text-[1.1rem]"}>{props.description}</p>
                    </div>
                    <div key={"buttons"} className={"flex flex-row flex-wrap gap-4 justify-between items-center"}>
                        <div className={clsx("font-mono flex flex-row", `text-[#777777] relative`)}>
                            <p>{props.date}</p>
                            <span className={`flex-1 self-stretch h-full mx-[0.6rem] border-[#777777] border-l-[1px]`}>&#8203;</span>
                            <p>{props.contributors} Contributors</p>
                            <span className={`h-full mx-[0.6rem] border-l-[1px] border-[#777777]`}>&#8203;</span>
                            <p>{getPhase(props.phase)}</p>
                        </div>
                        <div 
                            className={clsx(
                                "flex flex-row md:text-left justify-center md:justify-start gap-4 items-center"
                            )}
                        >
                            {props.posterUrl &&
                                <Button isLink={true} style='clear' href={props.posterUrl}>
                                    <div className={"flex flex-row gap-2 items-center"}>
                                        <p>See Poster</p>
                                        <HiOutlineExternalLink />
                                    </div>
                                </Button>
                            }

                            {/* <Button disabled isLink={true} href={`/projects/${props.id.replaceAll("-", "").toLowerCase()}`}>
                                <div className={"flex flex-row gap-2 items-center"}>
                                    <p>Learn More</p>
                                    <FaArrowRightLong />
                                </div>
                            </Button> */}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}