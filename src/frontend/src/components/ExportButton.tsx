import { Button } from '@/components/ui/button';
import { useTimetableData } from '@/hooks/useTimetableData';
import { exportToJSON } from '@/utils/jsonExport';
import { Download } from 'lucide-react';
import { toast } from 'sonner';

export function ExportButton() {
  const { data: weeklySchedule } = useTimetableData();

  const handleExport = () => {
    if (!weeklySchedule) {
      toast.error('No timetable data to export');
      return;
    }

    try {
      exportToJSON(weeklySchedule);
      toast.success('Timetable exported successfully!');
    } catch (error) {
      toast.error('Failed to export timetable');
    }
  };

  return (
    <Button
      onClick={handleExport}
      variant="outline"
      className="border-orange-300 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20"
    >
      <Download className="w-4 h-4 mr-2" />
      Export JSON
    </Button>
  );
}
