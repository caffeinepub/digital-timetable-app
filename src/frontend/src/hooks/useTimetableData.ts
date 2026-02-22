import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { DayOfWeek, Task } from '@/backend';

export function useTimetableData() {
  const { actor, isFetching } = useActor();

  return useQuery<[DayOfWeek, Task[]][]>({
    queryKey: ['weeklySchedule'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getWeeklySchedule();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 60000, // Refetch every minute to update time-based states
  });
}

export function useCurrentTask() {
  const { actor, isFetching } = useActor();

  return useQuery<Task | null>({
    queryKey: ['currentTask'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getCurrentTask();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 60000, // Refetch every minute
  });
}

export function useToggleTaskCompletion() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ day, taskIndex }: { day: DayOfWeek; taskIndex: number }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.toggleTaskCompletion(day, BigInt(taskIndex));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weeklySchedule'] });
      queryClient.invalidateQueries({ queryKey: ['currentTask'] });
    },
  });
}

export function useMarkTaskInProgress() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ day, taskIndex }: { day: DayOfWeek; taskIndex: number }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.markTaskInProgress(day, BigInt(taskIndex));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weeklySchedule'] });
    },
  });
}
