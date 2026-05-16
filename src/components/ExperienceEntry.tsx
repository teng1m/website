import Pill from "./Pill";

interface Props {
    logo: string;
    logoColour?: string;
    company: string;
    role: string;
    period: string;
    description: string;
    skills: string[];
}

export default function ExperienceEntry({
    logo,
    logoColour,
    company,
    role,
    period,
    description,
    skills,
}: Props) {
    return (
        <div className="glass-borders p-1 flex flex-col">
            <div className="flex flex-row gap-4 p-3 bg-black/50 border-neutral-500 border">
                <div
                    className="relative overflow-hidden rounded-md shrink-0 p-2 size-16"
                    style={{ backgroundColor: logoColour ?? "#1e1e1e" }}
                >
                    <img src={logo} className="w-full h-full object-contain" />
                    <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-linear-to-b from-white/80 to-transparent rounded-t-md" />
                </div>
                <div className="flex flex-col w-full gap-1.5">
                    <div className="flex flex-col md:flex-row md:justify-between w-full">
                        <h1>{company}</h1>
                        <span className="text-sm text-neutral-400 italic">{period}</span>
                    </div>
                    <p className="text-sm text-dim">{role}</p>
                    <p className="text-sm">{description}</p>
                    <div className="flex flex-row flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Pill key={skill}>{skill}</Pill>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
