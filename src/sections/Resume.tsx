import data from "../data/data";

const gloss =
    "relative overflow-hidden before:absolute before:inset-x-[5%] before:top-0 before:h-4 before:rounded-lg before:opacity-30 before:pointer-events-none before:bg-linear-to-b before:from-white/10 before:to-white/30";

export default function Resume() {
    return (
        <div className="flex flex-col h-full">
            <h1>Resume</h1>
            <div className="glass-borders flex flex-col flex-1 min-h-0 w-full overflow-hidden mt-3">
                <a
                    href={data.links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${gloss} m-3 w-fit bg-linear-to-b flex items-center gap-1 px-2 py-1 rounded-sm border border-gray-900 [text-shadow:0_0_3px_#000] no-underline transition-transform duration-15 hover:scale-[1.03] hover:underline bg-size-[100%_calc(100%+3px)] from-white/25 via-neutral-500/15 via-60% to-neutral-900/30 text-gray-200 hover:to-gray-500`}
                >
                    View full screen
                </a>
                <iframe
                    src={data.links.resume}
                    className="flex-1 w-full min-h-0"
                    style={{ height: "100%" }}
                />
            </div>
        </div>
    );
}
