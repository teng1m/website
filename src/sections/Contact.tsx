import data from "../data/data";

export default function Contact() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1>Contact</h1>
                <p>
                    The best way to reach me is by email. I'm always open to new opportunities,
                    collaborations, or just a good conversation.
                </p>
            </div>
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `mailto:${data.email.user}@${data.email.domain}`;
                }}
                className="glass-borders p-1 block hover:opacity-80 transition-opacity"
            >
                <div className="flex items-baseline font-mono text-sm select-all text-body flex-row p-3 bg-black/50 border-neutral-500 border">
                    <span>{data.email.user}</span>
                    <span className="text-muted">@</span>
                    <span>{data.email.domain}</span>
                </div>
            </a>
        </div>
    );
}
