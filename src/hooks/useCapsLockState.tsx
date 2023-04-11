import { useState, useEffect } from 'react'

export default function useCapsLockState() {
  const [capsLockState, setCapsLockState] = useState(false)

  function handleKeyDown(e: KeyboardEvent) {
    if (e.getModifierState('CapsLock')) {
      setCapsLockState(true)
    }
  }

  function handleKeyUp(e: KeyboardEvent) {
    if (!e.getModifierState('CapsLock')) {
      setCapsLockState(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return capsLockState
}
