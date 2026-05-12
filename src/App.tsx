import { useState } from "react";
import data from "./data/data";
import SideNavButton from "./components/SideNavButton";
// import IconOrb from "./components/IconOrb";
import Experience from "./sections/Experience";
import UnderConstruction from "./sections/UnderConstruction";
import About from "./sections/About";
import Contact from "./sections/Contact";

type Section = "about" | "experience" | "contact" | "resume";

export default function App() {
    const [section, setSection] = useState<Section>("about");

    return (
        <>
            <div className="fixed bottom-2 right-2 z-50 px-2 py-1 glass-borders bg-neutral-800">
                <p className="leading-tight text-xs">
                    Inspired by{" "}
                    <a
                        href="https://frutigeraeroarchive.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-white/90"
                    >
                        frutigeraeroarchive.org
                    </a>
                </p>
            </div>
            <div
                className="w-[min(800px,95vw)] h-[min(600px,90vh)] flex flex-col rounded-2xl overflow-hidden border 
        border-[rgba(236,242,249,.18)] 
        bg-linear-to-b from-[rgba(66,66,66,.4)] to-[rgba(22,22,22,.88)] backdrop-blur-[6px] backdrop-saturate-130 shadow-[2px_2px_12px_rgba(0,0,0,.85),inset_-1px_-1px_0_rgba(255,255,255,.08)] outline-1 outline-[rgba(28,49,39,.4)]"
            >
                {/* title bar */}
                <div className="[background:linear-gradient(180deg,rgba(172,172,172,.92)_0%,rgba(71,71,71,.92)_20%,rgba(19,19,19,.92)_40%,rgba(7,7,7,.95)_100%)] border-b border-border py-3 px-5 flex items-center gap-5 shrink-0">
                    <div className="flex gap-2">
                        <div
                            className="orb size-4"
                            style={{
                                background:
                                    "radial-gradient(circle at 35% 35%, white, var(--color-dot-green))",
                            }}
                        />
                    </div>
                    <h1 className="text-2xl">Kienan</h1>
                </div>

                {/* body */}
                <div className="flex flex-1 overflow-hidden">
                    {/* sidebar */}
                    <nav className="w-40 shrink bg-[rgba(8,8,8,.45)] border-r border-border py-2 px-1.5 flex flex-col gap-2">
                        <SideNavButton
                            active={section === "about"}
                            onClick={() => setSection("about")}
                            icon={<img src="/about.ico" className="w-6" />}
                        >
                            About
                        </SideNavButton>
                        <SideNavButton
                            active={section === "experience"}
                            onClick={() => setSection("experience")}
                            icon={<img src="/experience.ico" className="w-6" />}
                        >
                            Experience
                        </SideNavButton>
                        <SideNavButton
                            active={section === "resume"}
                            onClick={() => setSection("resume")}
                            icon={<img src="/resume.ico" className="size-6" />}
                        >
                            Resume
                        </SideNavButton>
                        <SideNavButton
                            href={data.links.github}
                            external
                            icon={
                                <div className="relative overflow-hidden rounded-full size-5 mr-1">
                                    <img
                                        src="/github.png"
                                        className="size-5 object-contain brightness-125"
                                    />
                                    <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-linear-to-b from-white/80 to-transparent" />
                                </div>
                            }
                        >
                            GitHub
                        </SideNavButton>
                        <SideNavButton
                            href={data.links.linkedin}
                            external
                            icon={
                                <div className="relative overflow-hidden rounded-sm size-5 mr-1">
                                    <img src="/linkedin.png" className="size-5 object-contain" />
                                    <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-linear-to-b from-white/80 to-transparent rounded-t-sm" />
                                </div>
                            }
                        >
                            LinkedIn
                        </SideNavButton>
                        <SideNavButton
                            active={section === "contact"}
                            onClick={() => setSection("contact")}
                            icon={<img src="/mail.ico" className="size-6" />}
                        >
                            Contact
                        </SideNavButton>
                    </nav>
                    {/* content */}
                    <div className="flex-1 overflow-y-auto m-3 pr-2">
                        {section === "about" && <About />}
                        {section === "experience" && <Experience />}
                        {section === "contact" && <Contact />}
                        {section === "resume" && <UnderConstruction />}
                    </div>
                </div>
            </div>
        </>
    );
}
