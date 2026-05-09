import { Mail } from "lucide-react";
import site from "../data/site";

export default function Contact() {
    const email = `${site.email.user}@${site.email.domain}`;

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="m-0 text-base font-semibold text-white [text-shadow:0_0_3px_#000]">
                    Contact
                </h2>
                <p className="mt-1 mb-0 text-sm text-dim">Best way to reach me is email.</p>
            </div>

            <div className="flex items-center gap-3 rounded-[6px] border border-border bg-[rgba(0,0,0,.3)] px-4 py-3">
                <Mail size={15} className="text-green shrink-0" />
                <div className="flex items-baseline font-mono text-sm select-all text-body">
                    <span>{site.email.user}</span>
                    <span className="text-muted">@</span>
                    <span>{site.email.domain}</span>
                </div>
                <a
                    href={`mailto:${email}`}
                    className="ml-auto aero-btn rounded-[4px] px-3 py-1 text-xs no-underline"
                >
                    Send mail
                </a>
            </div>
        </div>
    );
}
