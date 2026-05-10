import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export default function Pill({ children, className = "" }: Props) {
    return (
        <span
            className={`relative inline-flex items-center gap-1 border border-black rounded-md px-2 py-0.5 text-xs font-medium text-white [text-shadow:0_0_3px_#000] [background:linear-gradient(to_bottom,#fff_0%,#82f577_3%,var(--color-green-mid)_40%,#185815_55%,var(--color-green-dark)_55%,#1a5c1e_100%)] shadow-sm before:content-[''] before:absolute before:inset-x-[5%] before:top-0 before:h-2/5 before:[background:linear-gradient(to_bottom,rgba(255,255,255,.35),transparent)] before:rounded-[inherit] before:pointer-events-none ${className}`}
        >
            {children}
        </span>
    );
}
