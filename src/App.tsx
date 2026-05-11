import { useState, useEffect } from "react";
import site from "./data/site";
import SideNavButton from "./components/SideNavButton";
// import IconOrb from "./components/IconOrb";
// import About from "./sections/About";
import Experience from "./sections/Experience";
// import Contact from "./sections/Contact";
import UnderConstruction from "./sections/UnderConstruction";

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
                <h1 className="text-2xl">My Website</h1>
            </div>

            {/* body */}
            <div className="flex flex-1 overflow-hidden">
                {/* sidebar */}
                <nav className="w-40 shrink bg-[rgba(8,8,8,.45)] border-r border-border py-2 px-1.5 flex flex-col gap-2">
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
                    {/* <SideNavButton
                        href={site.links.resume}
                        external
                        icon={<img src="/resume.ico" className="size-6" />}
                    >
                        Resume
                    </SideNavButton> */}
                    <SideNavButton
                        href={site.links.github}
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
                        href={site.links.linkedin}
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
                        href="/contact"
                        active={path === "/contact"}
                        onClick={(e) => nav(e, "/contact")}
                        icon={<img src="/mail.ico" className="size-6" />}
                    >
                        Contact
                    </SideNavButton>
                </nav>
                {/* content */}
                <div className="flex-1 overflow-y-auto m-3 pr-2">
                    {path === "/experience" && <Experience />}
                    {path === "/contact" && <UnderConstruction />}
                    {path !== "/experience" && path !== "/contact" && <UnderConstruction />}
                </div>
            </div>
        </div>
    );
}
