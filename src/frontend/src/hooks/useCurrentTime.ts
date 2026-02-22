import { useState, useEffect } from 'react';
import { DayOfWeek } from '@/backend';

interface CurrentTime {
  hour: number;
  minute: number;
  day: DayOfWeek;
}

export function useCurrentTime(): CurrentTime {
  const [currentTime, setCurrentTime] = useState<CurrentTime>(() => getCurrentTimeData());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTimeData());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return currentTime;
}

function getCurrentTimeData(): CurrentTime {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const dayIndex = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

  const dayMap: DayOfWeek[] = [
    DayOfWeek.Sunday,
    DayOfWeek.Monday,
    DayOfWeek.Tuesday,
    DayOfWeek.Wednesday,
    DayOfWeek.Thursday,
    DayOfWeek.Friday,
    DayOfWeek.Saturday,
  ];

  return {
    hour,
    minute,
    day: dayMap[dayIndex],
  };
}
