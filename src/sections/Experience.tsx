import site from "../data/site";

export default function Experience() {
    return (
        <div className="flex flex-col gap-6 text-body">
            {site.experience.map((item) => (
                <div key={`${item.company}-${item.role}`} className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <div className="orb mt-1 h-4 w-4 shrink-0" />
                        <div className="mt-2 w-px flex-1 bg-green/20" />
                    </div>
                    <div className="pb-4">
                        <div className="flex flex-wrap items-baseline gap-2">
                            <span className="font-semibold text-white [text-shadow:0_0_3px_#000]">
                                {item.role}
                            </span>
                            <span className="text-border">·</span>
                            <span className="text-dim">{item.company}</span>
                        </div>
                        <p className="mt-0.5 mb-2 text-xs text-muted">{item.period}</p>
                        <ul className="flex flex-col gap-1">
                            {item.description.map((bullet, i) => (
                                <li key={i} className="flex items-baseline gap-2 text-sm">
                                    <span className="shrink-0 text-green">›</span>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
