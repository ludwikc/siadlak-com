import { useState, useEffect } from 'react';
import { addDays, nextTuesday, setHours, setMinutes, setSeconds, setMilliseconds, format, isAfter } from 'date-fns';

const NextSessionCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const getNextTuesday630AM = () => {
    const now = new Date();
    
    // Set to 6:30 AM CEST (considering CEST is UTC+2)
    let nextTues = nextTuesday(now);
    nextTues = setHours(nextTues, 6);
    nextTues = setMinutes(nextTues, 30);
    nextTues = setSeconds(nextTues, 0);
    nextTues = setMilliseconds(nextTues, 0);
    
    // If it's Tuesday and we're past 6:30 AM, get next week's Tuesday
    if (now.getDay() === 2 && isAfter(now, nextTues)) {
      nextTues = addDays(nextTues, 7);
    }
    
    return nextTues;
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = getNextTuesday630AM();
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextSessionDate = getNextTuesday630AM();

  return (
    <div className="bg-secondary/50 p-4 rounded-md mb-6">
      <h3 className="font-semibold text-deep-charcoal mb-2">
        Następna sesja:
      </h3>
      <p className="text-deep-charcoal mb-1">
        <strong>Data:</strong> Wtorek, {format(nextSessionDate, 'd MMMM yyyy')}
      </p>
      <p className="text-deep-charcoal mb-4">
        <strong>Godzina:</strong> 6:30 - 6:45 (Warszawa/Berlin)
      </p>
      
      <div className="bg-twilight-indigo/10 p-3 rounded-md">
        <p className="text-sm text-deep-charcoal mb-2 font-medium">
          Czas do rozpoczęcia:
        </p>
        <div className="flex items-center justify-center space-x-4 text-lg font-mono">
          <div className="text-center">
            <div className="text-2xl font-bold text-twilight-indigo">
              {timeLeft.days}
            </div>
            <div className="text-xs text-subtle-slate">dni</div>
          </div>
          <div className="text-twilight-indigo text-2xl">:</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-twilight-indigo">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-subtle-slate">godzin</div>
          </div>
          <div className="text-twilight-indigo text-2xl">:</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-twilight-indigo">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-subtle-slate">minut</div>
          </div>
          <div className="text-twilight-indigo text-2xl">:</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-twilight-indigo">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-subtle-slate">sekund</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextSessionCountdown;