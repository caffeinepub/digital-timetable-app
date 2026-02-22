import { TimeSlot, DayOfWeek } from '@/backend';

export function isWithinTimeSlot(timeSlot: TimeSlot, currentHour: number, currentMinute: number): boolean {
  const currentTotalMinutes = currentHour * 60 + currentMinute;
  const startTotalMinutes = Number(timeSlot.startHour) * 60 + Number(timeSlot.startMinute);
  const endTotalMinutes = Number(timeSlot.endHour) * 60 + Number(timeSlot.endMinute);

  return currentTotalMinutes >= startTotalMinutes && currentTotalMinutes <= endTotalMinutes;
}

export function formatTimeSlot(timeSlot: TimeSlot): string {
  const formatTime = (hour: bigint, minute: bigint): string => {
    const h = Number(hour);
    const m = Number(minute);
    const period = h >= 12 ? 'PM' : 'AM';
    const displayHour = h === 0 ? 12 : h > 12 ? h - 12 : h;
    const displayMinute = m.toString().padStart(2, '0');
    return `${displayHour}:${displayMinute} ${period}`;
  };

  return `${formatTime(timeSlot.startHour, timeSlot.startMinute)} - ${formatTime(timeSlot.endHour, timeSlot.endMinute)}`;
}

export function getDayName(day: DayOfWeek): string {
  return day;
}
