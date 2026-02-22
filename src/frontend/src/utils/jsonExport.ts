import { DayOfWeek, Task } from '@/backend';
import { formatTimeSlot } from './timeValidation';

export function exportToJSON(weeklySchedule: [DayOfWeek, Task[]][]): void {
  const exportData: Record<string, Array<{
    time: string;
    subject: string;
    location?: string;
    done: boolean;
  }>> = {};

  weeklySchedule.forEach(([day, tasks]) => {
    exportData[day] = tasks.map(task => ({
      time: formatTimeSlot(task.timeSlot),
      subject: task.subject,
      location: task.location || undefined,
      done: task.completed,
    }));
  });

  const jsonString = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `timetable-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
