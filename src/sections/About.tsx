import site from "../data/site";

export default function About() {
    return (
        <div className="flex flex-col h-full w-full gap-3">
            <h1>About</h1>
            <div className="flex-row flex w-full">
                <div className="glass-borders f-full p-3 flex-row flex gap-4">
                    <div
                        className="shrink-0 flex items-center justify-center rounded-full text-xl font-bold text-white"
                        style={{
                            width: 72,
                            height: 72,
                            background: "radial-gradient(circle at 35% 35%, #a0d0ff, #0060c0)",
                            border: "2px solid rgba(255,255,255,0.3)",
                            boxShadow:
                                "0 4px 12px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.2)",
                            textShadow: "0 0 4px #000",
                        }}
                    >
                        {site.initials}
                    </div>
                    <div className="flex flex-col gap-4 p-3 bg-black/50 border-neutral-500 border">
                        <h1>Kienan Ma</h1>
                        <p className="text-body">{site.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
