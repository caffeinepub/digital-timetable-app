import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Upload, Image as ImageIcon, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTimetableUpload } from '@/hooks/useTimetableUpload';
import { toast } from 'sonner';

interface TimetableUploadProps {
  onUploadSuccess?: () => void;
}

export function TimetableUpload({ onUploadSuccess }: TimetableUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { uploadImage, uploadProgress, isUploading, isSuccess, error } = useTimetableUpload();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file (JPG, PNG)');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size must be less than 10MB');
      return;
    }

    setSelectedFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      await uploadImage(selectedFile);
      toast.success('Timetable uploaded successfully! Processing...');
      onUploadSuccess?.();
    } catch (err) {
      toast.error('Failed to upload timetable. Please try again.');
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className="border-orange-200 dark:border-orange-900/30 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-900 dark:text-orange-100">
          <Upload className="w-5 h-5" />
          Upload Your Timetable
        </CardTitle>
        <CardDescription>
          Upload a photo of your handwritten or printed timetable. We'll extract your schedule automatically.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {!previewUrl ? (
          <div
            onClick={handleButtonClick}
            className="border-2 border-dashed border-orange-300 dark:border-orange-700 rounded-lg p-12 text-center cursor-pointer hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-colors"
          >
            <ImageIcon className="w-12 h-12 mx-auto mb-4 text-orange-400" />
            <p className="text-sm text-muted-foreground mb-2">
              Click to select an image or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">
              Supports JPG, PNG (max 10MB)
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-orange-200 dark:border-orange-800">
              <img
                src={previewUrl}
                alt="Timetable preview"
                className="w-full h-auto max-h-96 object-contain bg-gray-50 dark:bg-gray-900"
              />
            </div>

            {isUploading && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Uploading...</span>
                  <span className="font-medium text-orange-600 dark:text-orange-400">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}

            {isSuccess && (
              <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span>Upload successful! Processing your timetable...</span>
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex gap-2">
              <Button
                onClick={handleUpload}
                disabled={isUploading || isSuccess}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              >
                {isUploading ? 'Uploading...' : isSuccess ? 'Uploaded' : 'Upload & Process'}
              </Button>
              <Button
                onClick={() => {
                  setSelectedFile(null);
                  setPreviewUrl(null);
                }}
                variant="outline"
                disabled={isUploading}
                className="border-orange-300 dark:border-orange-700"
              >
                Clear
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
