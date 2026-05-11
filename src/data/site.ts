import type { ExperienceItem } from "../types";

const site = {
    name: "First",
    firstName: "FirstName",
    lastName: "LastName",
    initials: "FL",
    title: "Software Engineer",
    bio: "Hello",

    email: { user: "address", domain: "example.com" },

    links: {
        github: "https://github.com/teng1m",
        linkedin: "https://linkedin.com/in/kienanma",
        resume: "/resume.pdf",
    },

    hitsSlug: "yourname.github.io",

    experience: [
        {
            logo: "/companies/biorender.svg",
            logoColour: "#2571B7",
            company: "BioRender",
            role: "Software Engineer Intern",
            period: "Jan 2025 – Apr 2025",
            description:
                "Worked on the enterprise team to support creating scientific illustrations for organizations like Pfizer.",
            skills: ["React", "TypeScript", "Node.js"],
        },
        {
            logo: "/companies/scispot.png",
            logoColour: "#E0E3E5",
            company: "Scispot (YC21)",
            role: "Software Engineer Intern",
            period: "May 2024 - Aug 2024",
            description: "",
            skills: ["JavaScript", "React", "Tailwind"],
        },
        {
            logo: "/companies/pinpoint.png",
            logoColour: "#E0E3E5",
            company: "PINpoint Information Systems",
            role: "Software Engineer Intern",
            period: "Jan 2023 - Apr 2023",
            description: "Worked on manufacturing execution systems software.",
            skills: ["C#", ".NET", "TypeScript", "Angular"],
        },
        {
            logo: "companies/bluerover.png",
            logoColour: "#129BC0",
            company: "BlueRover",
            role: "Software Engineer Intern",
            period: "May 2022 - Aug 2022",
            description: "Worked on manufacturing execution systems software.",
            skills: ["JavaScript", "React", "MySQL"],
        },
    ] satisfies ExperienceItem[],
};

export default site;
