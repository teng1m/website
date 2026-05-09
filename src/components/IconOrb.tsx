interface Props {
  children: React.ReactNode
}

export default function IconOrb({ children }: Props) {
  return (
    <div
      className="orb"
      style={{ width: 20, height: 20, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {children}
    </div>
  )
}
