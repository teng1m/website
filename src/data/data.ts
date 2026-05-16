import type { ExperienceItem } from "../types";

const data = {
    name: "Kienan Ma",
    firstName: "Kienan",
    lastName: "Ma",
    initials: "KM",
    title: "Software Engineer",
    bio: "Hi! I'm Kienan. I'm a full-stack software engineer who enjoys building clean, user-focused products. I've previously worked across the stack at startups and product-focused companies. Outside of work, I'm interested in computer hardware, music production, self-hosting, and UI design. I am always looking to get involved with new experiences and opportunities. Feel free to reach out via the Contact page.",

    email: { user: "kienan1m", domain: "gmail.com" },

    links: {
        github: "https://github.com/teng1m",
        linkedin: "https://linkedin.com/in/kienanma",
        resume: "/resume.pdf",
    },

    experience: [
        {
            logo: "/companies/biorender.svg",
            logoColour: "#2571B7",
            company: "BioRender",
            role: "Software Engineer Intern",
            period: "Jan 2025 – Apr 2025",
            description:
                "Worked on the enterprise team to support creating scientific illustrations for organizations like Pfizer.",
            skills: [
                "React",
                "TypeScript",
                "Node.js",
                "Redux.js",
                "Cypress",
                "MongoDB",
                "Jest",
                "Auth0",
            ],
        },
        {
            logo: "/companies/scispot.png",
            logoColour: "#E0E3E5",
            company: "Scispot (YC21)",
            role: "Software Engineer Intern",
            period: "May 2024 - Aug 2024",
            description: "Redesigned LIMS suite.",
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
            description:
                "Built features for IoT dashboards monitoring environmental conditions for food safety.",
            skills: ["JavaScript", "React", "MySQL"],
        },
    ] satisfies ExperienceItem[],
};

export default data;
