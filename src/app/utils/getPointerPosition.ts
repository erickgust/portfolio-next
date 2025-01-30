type Variables = {
  x: `--${string}`
  y: `--${string}`
}

export function getPointerPosition(variables: Variables) {
  return (e: React.PointerEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    e.currentTarget.style.setProperty(variables.x, x.toString())
    e.currentTarget.style.setProperty(variables.y, y.toString())
  }
}
