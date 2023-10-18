import { useEffect } from 'react'

export function ShortcutHandler({ keyCode, action, ctrlKey = false, shiftKey = false, altKey = false }) {
  const handleKeyDown = (event) => {
    if (event.keyCode === keyCode && event.ctrlKey === ctrlKey && event.shiftKey === shiftKey && event.altKey === altKey) {
      event.preventDefault()
      action()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}
