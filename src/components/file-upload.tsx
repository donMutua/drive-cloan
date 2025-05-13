'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

export type FileStatus = 'ready' | 'uploading' | 'success' | 'error';

export interface FileWithStatus {
  id: string;
  file: File;
  progress: number;
  status: FileStatus;
  error?: string;
}

interface FileUploadProps {
  onFilesSelected: (files: FileWithStatus[]) => void;
  onFileRemove?: (fileId: string) => void;
  maxFiles?: number;
  maxSize?: number; // in bytes
  accept?: Record<string, string[]>;
  className?: string;
}

export function FileUpload({
  onFilesSelected,
  onFileRemove,
  maxFiles = 10,
  maxSize = 1024 * 1024 * 100, // 100MB
  accept,
  className,
}: FileUploadProps) {
  const [files, setFiles] = useState<FileWithStatus[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      // Handle rejected files
      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(rejected => {
          const message = rejected.errors[0]?.message || 'File upload failed';
          toast(`File upload error, ${message}`);
        });
      }

      // Process accepted files
      if (acceptedFiles.length > 0) {
        // Check if adding these files would exceed maxFiles
        if (files.length + acceptedFiles.length > maxFiles) {
          toast(`Too many files,You can only upload up to ${maxFiles} files at once.`);
          return;
        }

        const newFiles = acceptedFiles.map(file => ({
          id: crypto.randomUUID(),
          file,
          progress: 0,
          status: 'ready' as FileStatus,
        }));

        setFiles(prev => [...prev, ...newFiles]);
        onFilesSelected(newFiles);
      }
    },
    [files.length, maxFiles, onFilesSelected]
  );

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
    onFileRemove?.(fileId); // Use optional chaining for the conditional call
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize,
    accept,
    maxFiles,
  });

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Get status icon based on file status
  const getStatusIcon = (status: FileStatus) => {
    switch (status) {
      case 'uploading':
        return <Loader2 className="h-4 w-4 animate-spin text-primary" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      <div
        {...getRootProps()}
        className={cn(
          'relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 p-8 text-center transition-colors',
          isDragActive && 'border-primary/50 bg-primary/5',
          'hover:bg-muted/50 cursor-pointer'
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <Upload className="h-10 w-10 text-muted-foreground" />
          <h3 className="font-medium text-foreground">Drag & drop files here</h3>
          <p className="text-sm text-muted-foreground">
            or <span className="text-primary font-medium">browse files</span> from your computer
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Max file size: {formatFileSize(maxSize)} ⋅ Up to {maxFiles} files
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="rounded-lg border bg-background p-2">
          <div className="space-y-2">
            {files.map(fileItem => (
              <div key={fileItem.id} className="flex items-center gap-2 rounded-md border p-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-medium">{fileItem.file.name}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={e => {
                        e.stopPropagation();
                        removeFile(fileItem.id);
                      }}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove file</span>
                    </Button>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <p>{formatFileSize(fileItem.file.size)}</p>
                    <span className="mx-2">•</span>
                    <p>{fileItem.file.type || 'Unknown type'}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Progress value={fileItem.progress} className="h-1 flex-1" />
                    <div className="flex items-center gap-1 min-w-9 justify-end">
                      {fileItem.status === 'uploading' && (
                        <span className="text-xs">{Math.round(fileItem.progress)}%</span>
                      )}
                      {getStatusIcon(fileItem.status)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
