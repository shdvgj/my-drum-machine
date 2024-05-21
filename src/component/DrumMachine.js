import React, { useState, useEffect } from 'react';

const DrumMachine = () => {
  const [display, setDisplay] = useState('');

  const drumPads = [
    { key: 'Q', sound: 'Heater 1', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3'},
    { key: 'W', sound: 'Heater 2', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
    { key: 'E', sound: 'Heater 3', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
    { key: 'A', sound: 'Heater 4', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4.mp3' },
    { key: 'S', sound: 'Clap', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
    { key: 'D', sound: 'Open-HH', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
    { key: 'Z', sound: 'Kick-n\'-Hat', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
    { key: 'X', sound: 'Kick', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
    { key: 'C', sound: 'Closed-HH', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' },
  ];

  

  const playSound = (sound) => {
    setDisplay(sound);
    const audio = document.getElementById(sound.replace(/\s/g, ''));
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const drumPad = drumPads.find((pad) => pad.key === event.key.toUpperCase());
      if (drumPad) {
        playSound(drumPad.sound);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">
        {drumPads.map((pad) => (
          <div
            key={pad.key}
            className="drum-pad"
            id={pad.key}
            onClick={() => playSound(pad.sound)}
          >
            {pad.key}
            <audio className="clip" id={pad.sound.replace(/\s/g, '')} src={`${pad.src}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;