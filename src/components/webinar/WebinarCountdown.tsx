
import { useState, useEffect } from 'react';

// Set the webinar date (example: June 12, 2025 at 18:00 CEST)
const WEBINAR_DATE = new Date("2025-06-12T18:00:00+02:00").getTime();

const WebinarCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = WEBINAR_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    // Calculate on initial render
    calculateTimeLeft();

    // Setup interval to recalculate every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="my-8">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
        WEBINAR ROZPOCZYNA SIĘ ZA:
      </p>
      <div className="flex space-x-4">
        <CountdownItem label="DNI" value={timeLeft.days} />
        <CountdownItem label="GODZ" value={timeLeft.hours} />
        <CountdownItem label="MIN" value={timeLeft.minutes} />
        <CountdownItem label="SEK" value={timeLeft.seconds} />
      </div>
    </div>
  );
};

const CountdownItem = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold min-w-[60px] px-4 py-3 text-center bg-white dark:bg-deep-space backdrop-blur-lg rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
        {value.toString().padStart(2, "0")}
      </div>
      <span className="text-xs font-medium mt-1">{label}</span>
    </div>
  );
};

export default WebinarCountdown;
