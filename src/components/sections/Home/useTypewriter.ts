import {useEffect, useState} from 'react';

export function useTypewriter(
  text: string,
  durationSec: number,
  startTyping: boolean
) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!startTyping) {
      setDisplayedText('');
      return;
    }

    let currentIndex = 0;
    const totalChars = text.length;
    const intervalDuration = (durationSec * 1000) / totalChars;

    const interval = setInterval(() => {
      currentIndex++;
      setDisplayedText(text.slice(0, currentIndex));
      if (currentIndex === totalChars) clearInterval(interval);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [text, durationSec, startTyping]);

  return displayedText;
}
