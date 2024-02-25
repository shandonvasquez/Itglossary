import React from 'react';

export function TypewriterEffect({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (currentText === words[currentWordIndex].text) {
        setCurrentWordIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
        setCurrentText('');
      } else {
        setCurrentText((prevText) => prevText + words[currentWordIndex].text[currentText.length]);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [currentText, currentWordIndex, words]);

  return <span>{currentText}</span>;
}


export default App;