import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { ExternalBlob } from '@/backend';
import { processOCRFromImage } from '@/utils/ocrParser';

export function useTimetableUpload() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [uploadProgress, setUploadProgress] = useState(0);

  const mutation = useMutation({
    mutationFn: async (file: File) => {
      if (!actor) throw new Error('Actor not initialized');

      // Convert file to bytes
      const arrayBuffer = await file.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);

      // Create ExternalBlob with progress tracking
      const blob = ExternalBlob.fromBytes(bytes).withUploadProgress((percentage) => {
        setUploadProgress(percentage);
      });

      // Upload image to backend
      await actor.updateTimetableImage(blob);

      // Process OCR
      const ocrResults = await processOCRFromImage(file);
      
      // Send OCR results to backend
      if (ocrResults.length > 0) {
        await actor.processOCRResult(ocrResults);
      }

      return blob;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weeklySchedule'] });
      queryClient.invalidateQueries({ queryKey: ['timetableImage'] });
      setUploadProgress(0);
    },
    onError: () => {
      setUploadProgress(0);
    },
  });

  return {
    uploadImage: mutation.mutateAsync,
    uploadProgress,
    isUploading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    error: mutation.error?.message,
  };
}
