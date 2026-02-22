import { TimetablePage } from './pages/TimetablePage';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <TimetablePage />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
