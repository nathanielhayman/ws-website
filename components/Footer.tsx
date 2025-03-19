"use client";
import clsx from "clsx";
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

import { ProjectHighlightData } from "@/const/content/projects";
import { useTheme } from "next-themes";
import logo from '../app/logo.svg';
import logoLight from '../app/logo_light.svg';
import Toggle from "./Toggle";
import ThemedLink from "./ThemedLink";

export default function Footer() {
    const { theme, setTheme } = useTheme();

    const changeTheme = async (a: number) => {
        const t = a === 1 ? 'light' : 'dark';

        setTheme(t);

        fetch('/api/theme', { 
            method: 'POST',
            body: JSON.stringify({
                theme: t
            })
         });
    }

    return (
        <div className={clsx(
            `bg-footer border-bg-highlight text-text border-t-[1px]`,
            "flex flex-row flex-wrap z-20 relative px-[4rem] py-[4rem] gap-8 md:gap-[4rem]"
        )}>
            <div className="flex flex-col items-center gap-6">
                <ThemedLink href={"/"} className={"font-bold text-lg"}>
                    <Image
                        alt=""
                        src={(() => {console.log(theme === 'light'); return theme === 'light' ? logoLight : logo})()}
                        width={140}
                    />
                </ThemedLink>
                <div className="flex flex-row items-center gap-2">
                    <a href="https://www.linkedin.com/company/washu-satellite/posts/?feedView=all"><FaLinkedin size={30} /></a>
                    <a href="https://www.instagram.com/washusatellite/"><PiInstagramLogoFill size={30} /></a>
                    <a href="https://github.com/washu-satellite"><FaGithub size={30} /></a>
                </div>
            </div>
            <div className="flex flex-col items-start gap-2">
                <ThemedLink href={"/"} className="font-semibold">Projects</ThemedLink>
                {ProjectHighlightData.map(p => (
                    <ThemedLink arrowLink href={p.posterUrl ? p.posterUrl : `/projects/${p.id.replaceAll("-", "").toLowerCase()}`} className={clsx(`text-text-dark`, "font-medium")}>{p.id}</ThemedLink>
                ))}
            </div>
            <div className="flex flex-col items-start gap-2">
                <ThemedLink href={"/"} className="font-semibold">Keep in Touch</ThemedLink>
                <ThemedLink arrowLink href={"/contact"} className={clsx(`text-text-dark`, "font-medium")}>Contact us</ThemedLink>
                <ThemedLink arrowLink href={"/subscribe"} className={clsx(`text-text-dark`, "font-medium")}>Subscription list</ThemedLink>
                <ThemedLink arrowLink href={"/apply"} className={clsx(`text-text-dark`, "font-medium")}>Join the team</ThemedLink>
            </div>
            <div className="flex flex-col items-start gap-2">
                <ThemedLink href={"/"} className="font-semibold">More information</ThemedLink>
                <ThemedLink arrowLink href={"/not-ready"} className={clsx(`text-text-dark`, "font-medium")}>What is WashU Satellite?</ThemedLink>
                <ThemedLink arrowLink href={"/team"} className={clsx(`text-text-dark`, "font-medium")}>Our Team</ThemedLink>
                <ThemedLink arrowLink href={"/not-ready"} className={clsx(`text-text-dark`, "font-medium")}>Team Management</ThemedLink>
            </div>
            {/* <div className="flex flex-col items-start gap-2">
                <h3 className="text-base font-semibold">Change site theme</h3>
                <Toggle
                    default={theme === 'light' ? 1 : 0}
                    elements={["Dark", "Light"]}
                    setActive={changeTheme}
                />
            </div> */}
        </div>
    )
}