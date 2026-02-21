import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-03-17T18:30:00-06:00").getTime();

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = Math.max(0, EVENT_DATE - now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-8 flex justify-center gap-3 sm:gap-5"
    >
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl font-display font-bold text-primary tabular-nums bg-card/80 backdrop-blur-sm rounded-lg border border-border w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-xs font-display font-medium text-muted-foreground mt-1.5 uppercase tracking-wider">
            {u.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export default Countdown;
