import site from "../data/site";

export default function About() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-start">
                <div
                    className="shrink-0 flex items-center justify-center rounded-full text-xl font-bold text-white"
                    style={{
                        width: 72,
                        height: 72,
                        background: "radial-gradient(circle at 35% 35%, #a0d0ff, #0060c0)",
                        border: "2px solid rgba(255,255,255,0.3)",
                        boxShadow: "0 4px 12px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.2)",
                        textShadow: "0 0 4px #000",
                    }}
                >
                    {site.initials}
                </div>

                <div className="flex flex-col gap-2">
                    <div>
                        <h1 className="m-0 text-xl font-semibold text-white [text-shadow:0_0_3px_#000]">
                            {site.name}
                        </h1>
                        <p className="m-0 text-sm text-green">{site.title}</p>
                    </div>
                    <p className="m-0 text-sm leading-relaxed text-body">{site.bio}</p>
                </div>
            </div>
        </div>
    );
}
