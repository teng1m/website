import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Props = { children: ReactNode; href?: string; className?: string }
  & Omit<AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>, 'href'>

const CLS = "relative border border-black text-white [text-shadow:0_0_3px_#000] [background:linear-gradient(to_bottom,#fff_0%,#82f577_3%,var(--color-green-mid)_40%,#185815_55%,var(--color-green-dark)_55%,#1a5c1e_100%)] shadow-[1px_1px_5px_rgba(0,0,0,.3)] transition-[filter] duration-100 hover:brightness-[1.15] active:brightness-[.9] before:content-[''] before:absolute before:inset-x-[5%] before:top-0 before:h-[40%] before:[background:linear-gradient(to_bottom,rgba(255,255,255,.35),transparent)] before:rounded-[inherit] before:pointer-events-none"

export default function AeroButton({ children, href, className = '', ...props }: Props) {
  const cls = `${CLS} rounded px-4 py-1 text-sm font-medium ${className}`
  return href
    ? <a href={href} className={cls} {...props}>{children}</a>
    : <button className={cls} {...props}>{children}</button>
}
