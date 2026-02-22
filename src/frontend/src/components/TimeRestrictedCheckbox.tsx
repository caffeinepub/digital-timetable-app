import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import { useToggleTaskCompletion } from '@/hooks/useTimetableData';
import { isWithinTimeSlot, formatTimeSlot } from '@/utils/timeValidation';
import { DayOfWeek, Task } from '@/backend';
import { Clock, CheckCircle2, Lock } from 'lucide-react';
import { toast } from 'sonner';

interface TimeRestrictedCheckboxProps {
  day: DayOfWeek;
  taskIndex: number;
  task: Task;
}

export function TimeRestrictedCheckbox({ day, taskIndex, task }: TimeRestrictedCheckboxProps) {
  const currentTime = useCurrentTime();
  const toggleMutation = useToggleTaskCompletion();

  const isCurrentDay = currentTime.day === day;
  const isWithinTime = isCurrentDay && isWithinTimeSlot(task.timeSlot, currentTime.hour, currentTime.minute);
  const canToggle = isWithinTime || task.completed;

  const handleToggle = async () => {
    if (!canToggle) {
      toast.error('This task can only be marked during its scheduled time slot');
      return;
    }

    try {
      await toggleMutation.mutateAsync({ day, taskIndex });
      if (!task.completed) {
        toast.success('Task marked as complete! 🎉');
      }
    } catch (error) {
      toast.error('Failed to update task. Please try again.');
    }
  };

  const getTooltipContent = () => {
    if (task.completed) {
      return 'Task completed';
    }
    if (!isCurrentDay) {
      return `This task is scheduled for ${day}`;
    }
    if (!isWithinTime) {
      return `Available during ${formatTimeSlot(task.timeSlot)}`;
    }
    return 'Click to mark as complete';
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center justify-center">
            {task.completed ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : canToggle ? (
              <Checkbox
                checked={task.completed}
                onCheckedChange={handleToggle}
                disabled={toggleMutation.isPending}
                className="border-orange-400 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
              />
            ) : (
              <Lock className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{getTooltipContent()}</span>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
