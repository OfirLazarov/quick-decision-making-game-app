import { useEffect } from "react";

export function useKeyPress(
    targetKey: string | string[],
    onKeyDown: (key: string) => void,
    enabled: boolean = true
  ) {
    useEffect(() => {
      if (!enabled) return;
  
      const handleKeyDown = (event: KeyboardEvent) => {
        const keys = Array.isArray(targetKey) ? targetKey : [targetKey];
        if (keys.includes(event.key)) {
          onKeyDown(event.key);
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [targetKey, onKeyDown, enabled]);
  }