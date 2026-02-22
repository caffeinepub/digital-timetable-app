import { useState } from 'react';
import { TimetableUpload } from '@/components/TimetableUpload';
import { TimetableTable } from '@/components/TimetableTable';
import { ExportButton } from '@/components/ExportButton';
import { CurrentTaskCard } from '@/components/CurrentTaskCard';
import { useTimetableData } from '@/hooks/useTimetableData';
import { Calendar, Clock } from 'lucide-react';

export function TimetablePage() {
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const { data: weeklySchedule, isLoading } = useTimetableData();

  const hasTasks = weeklySchedule && weeklySchedule.length > 0 && weeklySchedule.some(([_, tasks]) => tasks.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-orange-200/50 dark:border-orange-900/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                  Daily Routine Tracker
                </h1>
                <p className="text-sm text-muted-foreground">Stay on track, one task at a time</p>
              </div>
            </div>
            {hasTasks && <ExportButton />}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Current Task Highlight */}
          {hasTasks && <CurrentTaskCard />}

          {/* Upload Section */}
          {!hasTasks && (
            <div className="text-center space-y-6 py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 mb-4">
                <Clock className="w-10 h-10 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome to Your Routine Tracker
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Upload a photo of your timetable to get started. We'll extract your schedule and help you stay on track throughout the day.
                </p>
              </div>
            </div>
          )}

          <TimetableUpload onUploadSuccess={() => setHasUploadedImage(true)} />

          {/* Timetable Display */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-muted-foreground">Loading your schedule...</p>
            </div>
          )}

          {hasTasks && <TimetableTable />}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-200/50 dark:border-orange-900/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} · Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'timetable-app')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-orange-400 hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
