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
        github: "https://github.com/github",
        linkedin: "https://linkedin.com/in/linkedin",
        resume: "/resume.pdf",
    },

    hitsSlug: "yourname.github.io",

    experience: [
        {
            company: "company",
            role: "role",
            period: "time period",
            description: ["point 1", "point 2", "point 3"],
        },
    ] satisfies ExperienceItem[],
};

export default site;
