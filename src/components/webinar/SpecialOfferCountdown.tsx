
import { useState, useEffect } from 'react';

// Seven minutes in milliseconds
const COUNTDOWN_DURATION = 7 * 60 * 1000;

const SpecialOfferCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Check if there's a stored end time in localStorage
    const storedEndTime = localStorage.getItem('specialOfferEndTime');
    
    if (storedEndTime) {
      // Calculate time left based on stored end time
      const endTimeMs = parseInt(storedEndTime, 10);
      const currentTime = new Date().getTime();
      const remainingTime = Math.max(0, endTimeMs - currentTime);
      
      if (remainingTime <= 0) {
        setIsExpired(true);
        setTimeLeft(0);
      } else {
        setTimeLeft(remainingTime);
      }
    } else {
      // First visit - set the end time
      const currentTime = new Date().getTime();
      const endTime = currentTime + COUNTDOWN_DURATION;
      localStorage.setItem('specialOfferEndTime', endTime.toString());
      setTimeLeft(COUNTDOWN_DURATION);
    }

    // Set up the interval to update the timer
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === null) return null;
        
        const newTimeLeft = Math.max(0, prevTimeLeft - 10); // Update more frequently for milliseconds
        
        if (newTimeLeft <= 0) {
          clearInterval(timer);
          setIsExpired(true);
          return 0;
        }
        
        return newTimeLeft;
      });
    }, 10); // Update every 10ms for smooth millisecond display

    return () => clearInterval(timer);
  }, []);

  // Format time as mm:ss.milliseconds
  const formatTime = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10); // Get only 2 digits for milliseconds

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  if (timeLeft === null) {
    return <div className="text-center py-4">Ładowanie...</div>;
  }

  return (
    <div className="text-center py-2">
      <div className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
        OFERTA SPECJALNA WYGASA ZA:
      </div>
      <div className={`font-mono text-2xl font-bold ${isExpired ? 'text-gray-400' : 'text-neural-violet'}`}>
        {isExpired ? "00:00.00" : formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default SpecialOfferCountdown;
