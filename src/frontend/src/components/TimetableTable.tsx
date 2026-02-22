import { useTimetableData } from '@/hooks/useTimetableData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TimeRestrictedCheckbox } from '@/components/TimeRestrictedCheckbox';
import { Badge } from '@/components/ui/badge';
import { formatTimeSlot, getDayName } from '@/utils/timeValidation';
import { DayOfWeek } from '@/backend';
import { Calendar } from 'lucide-react';

export function TimetableTable() {
  const { data: weeklySchedule, isLoading } = useTimetableData();

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <div className="inline-block w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-muted-foreground">Loading your schedule...</p>
        </CardContent>
      </Card>
    );
  }

  if (!weeklySchedule || weeklySchedule.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {weeklySchedule.map(([day, tasks]) => {
        if (tasks.length === 0) return null;

        return (
          <Card key={day} className="border-orange-200 dark:border-orange-900/30 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border-b border-orange-200 dark:border-orange-800">
              <CardTitle className="flex items-center gap-2 text-orange-900 dark:text-orange-100">
                <Calendar className="w-5 h-5" />
                {getDayName(day)}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-orange-50/50 dark:bg-orange-950/20 hover:bg-orange-50/50 dark:hover:bg-orange-950/20">
                      <TableHead className="font-semibold text-orange-900 dark:text-orange-100">Time</TableHead>
                      <TableHead className="font-semibold text-orange-900 dark:text-orange-100">Task</TableHead>
                      <TableHead className="font-semibold text-orange-900 dark:text-orange-100">Location</TableHead>
                      <TableHead className="font-semibold text-orange-900 dark:text-orange-100 text-center">Status</TableHead>
                      <TableHead className="font-semibold text-orange-900 dark:text-orange-100 text-center">Done</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tasks.map((task, index) => (
                      <TableRow
                        key={index}
                        className={`
                          ${task.completed ? 'bg-green-50/50 dark:bg-green-950/20' : ''}
                          ${task.inProgress ? 'bg-amber-50/50 dark:bg-amber-950/20' : ''}
                          hover:bg-orange-50/30 dark:hover:bg-orange-950/10 transition-colors
                        `}
                      >
                        <TableCell className="font-medium text-orange-900 dark:text-orange-100">
                          {formatTimeSlot(task.timeSlot)}
                        </TableCell>
                        <TableCell className="font-medium">
                          {task.subject}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {task.location || '—'}
                        </TableCell>
                        <TableCell className="text-center">
                          {task.completed ? (
                            <Badge className="bg-green-500 hover:bg-green-600 text-white">
                              Completed
                            </Badge>
                          ) : task.inProgress ? (
                            <Badge className="bg-amber-500 hover:bg-amber-600 text-white">
                              In Progress
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-300">
                              Pending
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          <TimeRestrictedCheckbox
                            day={day}
                            taskIndex={index}
                            task={task}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
