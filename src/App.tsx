import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import site from "./data/site";
import SideNavButton from "./components/SideNavButton";
import IconOrb from "./components/IconOrb";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

const VALID = ["/about", "/experience", "/contact"];

const resolve = (p: string) => {
    if (VALID.includes(p)) return p;
    history.replaceState(null, "", "/about");
    return "/about";
};

export default function App() {
    const [path, setPath] = useState(() => resolve(window.location.pathname));

    useEffect(() => {
        const onPop = () => setPath(resolve(window.location.pathname));
        window.addEventListener("popstate", onPop);
        return () => window.removeEventListener("popstate", onPop);
    }, []);

    const nav = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
        e.preventDefault();
        history.pushState(null, "", to);
        setPath(to);
    };

    return (
        <div className="w-[min(880px,95vw)] h-[min(560px,90vh)] flex flex-col rounded-2xl overflow-hidden border border-[rgba(236,242,249,.18)] bg-gradient-to-b from-[rgba(66,66,66,.4)] to-[rgba(22,22,22,.88)] backdrop-blur-[6px] backdrop-saturate-[130%] shadow-[2px_2px_12px_rgba(0,0,0,.85),inset_-1px_-1px_0_rgba(255,255,255,.08)] outline-1 outline-[rgba(28,49,39,.4)]">
            {/* title bar */}
            <div className="[background:linear-gradient(180deg,rgba(172,172,172,.92)_0%,rgba(71,71,71,.92)_20%,rgba(19,19,19,.92)_40%,rgba(7,7,7,.95)_100%)] border-b border-border px-[14px] py-[7px] flex items-center gap-2.5 shrink-0">
                <div className="flex gap-2">
                    <div
                        className="orb"
                        onClick={() => window.close()}
                        title="Close"
                        style={{
                            width: 11,
                            height: 11,
                            background:
                                "radial-gradient(circle at 35% 35%, white, var(--color-dot-red))",
                            cursor: "pointer",
                        }}
                    />
                    <div
                        className="orb"
                        style={{
                            width: 11,
                            height: 11,
                            background:
                                "radial-gradient(circle at 35% 35%, white, var(--color-dot-yellow))",
                        }}
                    />
                    <div
                        className="orb"
                        style={{
                            width: 11,
                            height: 11,
                            background:
                                "radial-gradient(circle at 35% 35%, white, var(--color-dot-green))",
                        }}
                    />
                </div>
                <span className="text-[#ccc] text-2xl[text-shadow:0_0_3px_#000] text-shadow-2xs">
                    My Website
                </span>
            </div>

            {/* body */}
            <div className="flex flex-1 overflow-hidden">
                {/* sidebar */}
                <nav className="w-40 shrink-0 bg-[rgba(8,8,8,.45)] border-r border-border py-2 px-1.5 flex flex-col gap-2">
                    <SideNavButton
                        href="/about"
                        active={path === "/about"}
                        onClick={(e) => nav(e, "/about")}
                        icon={<img src="/about.ico" className="w-6" />}
                    >
                        About
                    </SideNavButton>
                    <SideNavButton
                        href="/experience"
                        active={path === "/experience"}
                        onClick={(e) => nav(e, "/experience")}
                        icon={<img src="/experience.ico" className="w-6" />}
                    >
                        Experience
                    </SideNavButton>

                    <SideNavButton
                        href={site.links.github}
                        external
                        icon={
                            <img
                                src="/icons/github.svg"
                                width={11}
                                height={11}
                                style={{ filter: "brightness(10)" }}
                            />
                        }
                    >
                        GitHub
                    </SideNavButton>
                    <SideNavButton
                        href={site.links.linkedin}
                        external
                        icon={<img src="/linkedin.png" className="w-6" />}
                    >
                        LinkedIn
                    </SideNavButton>
                    <SideNavButton
                        href={site.links.resume}
                        external
                        icon={<img src="/resume.ico" className="size-6" />}
                    >
                        Resume
                    </SideNavButton>
                    <SideNavButton
                        href="/contact"
                        active={path === "/contact"}
                        onClick={(e) => nav(e, "/contact")}
                        icon={<img src="/mail.ico" className="size-6" />}
                    >
                        Contact
                    </SideNavButton>
                </nav>

                {/* content */}
                <div className="flex-1 overflow-y-auto p-5 text-body">
                    {path === "/experience" && <Experience />}
                    {path === "/contact" && <Contact />}
                    {path !== "/experience" && path !== "/contact" && <About />}
                </div>
            </div>
        </div>
    );
}
