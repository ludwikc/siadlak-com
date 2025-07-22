
import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass-card bg-white/10 p-6 rounded-xl mb-8">
      <div className="flex items-center justify-center mb-4">
        <Timer className="h-6 w-6 text-ascension-pink mr-2" />
        <p className="text-lg font-bold text-ascension-pink">
          Ta oferta jest ważna tylko do [DATA]
        </p>
      </div>
      
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
            <div className="text-sm opacity-80">DNI</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="text-sm opacity-80">GODZ</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="text-sm opacity-80">MIN</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="text-sm opacity-80">SEK</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
