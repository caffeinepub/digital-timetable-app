import { useCurrentTask } from '@/hooks/useTimetableData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatTimeSlot, getDayName } from '@/utils/timeValidation';
import { Clock, MapPin, Zap } from 'lucide-react';

export function CurrentTaskCard() {
  const { data: currentTask, isLoading } = useCurrentTask();

  if (isLoading || !currentTask) {
    return null;
  }

  return (
    <Card className="border-2 border-orange-400 dark:border-orange-600 shadow-xl bg-gradient-to-br from-orange-100 via-amber-100 to-red-100 dark:from-orange-900/40 dark:via-amber-900/40 dark:to-red-900/40">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg animate-pulse">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-orange-600 hover:bg-orange-700 text-white">
                Current Task
              </Badge>
              <Badge variant="outline" className="border-orange-400 dark:border-orange-600 text-orange-700 dark:text-orange-300">
                {getDayName(currentTask.day)}
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-2">
              {currentTask.subject}
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-orange-800 dark:text-orange-200">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{formatTimeSlot(currentTask.timeSlot)}</span>
              </div>
              {currentTask.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{currentTask.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
