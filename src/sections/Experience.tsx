import site from "../data/site";
import ExperienceEntry from "../components/ExperienceEntry";

export default function Experience() {
    return (
        <div className="flex flex-col gap-3 text-body">
            <h1>Experience</h1>
            {site.experience.map((item) => (
                <ExperienceEntry key={`${item.company}-${item.role}`} {...item} />
            ))}
        </div>
    );
}
