interface Props {
    href?: string;
    children: React.ReactNode;
    active?: boolean;
    external?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    icon?: React.ReactNode;
}

const gloss =
    "relative overflow-hidden before:absolute before:inset-x-[5%] before:top-0 before:h-4 before:rounded-lg before:opacity-30 before:pointer-events-none before:bg-linear-to-b before:from-white/10 before:to-white/30";

export default function SideNavButton({
    href,
    children,
    active = false,
    external = false,
    onClick,
    icon,
}: Props) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            onClick={onClick}
            className={`bg-linear-to-b w-full flex items-center gap-1 px-2 py-1 rounded-sm border border-gray-900 [text-shadow:0_0_3px_#000] no-underline transition-transform duration-15 hover:scale-[1.03] hover:underline bg-size-[100%_calc(100%+3px)] ${gloss} ${
                active
                    ? `from-green-dark/30 via-green-900/35 via-36% to-green/65 text-green-bright scale-[1.03]`
                    : `from-white/25 via-neutral-500/15 via-60% to-neutral-900/30 text-gray-200 hover:to-gray-500`
            }`}
        >
            {icon}
            {children}
        </a>
    );
}
