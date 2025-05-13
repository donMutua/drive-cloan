'use client';

import type React from 'react';

import { useState, useRef } from 'react';
import { Upload, X, FileIcon, FolderIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

interface FileUploadProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentFolder?: string;
  uploadType?: 'file' | 'folder';
}

interface UploadingFile {
  id: string;
  name: string;
  progress: number;
  size: string;
  status: 'uploading' | 'complete' | 'error';
  path?: string;
}

export function UploadDialog({
  open,
  onOpenChange,
  currentFolder,
  uploadType = 'file',
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<UploadingFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFolderInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles, true);
    }
  };

  const handleFiles = (newFiles: File[], isFolder = false) => {
    const formattedFiles = newFiles.map(file => {
      const path = isFolder ? file.webkitRelativePath : undefined;
      return {
        id: Math.random().toString(36).substring(2, 11),
        name: file.name,
        progress: 0,
        size: formatFileSize(file.size),
        status: 'uploading' as const,
        path,
      };
    });

    setFiles(prev => [...prev, ...formattedFiles]);

    // Simulate upload progress for each file
    formattedFiles.forEach(file => {
      simulateFileUpload(file.id);
    });
  };

  const simulateFileUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles(prev =>
          prev.map(file =>
            file.id === fileId ? { ...file, progress: 100, status: 'complete' } : file
          )
        );
      } else {
        setFiles(prev => prev.map(file => (file.id === fileId ? { ...file, progress } : file)));
      }
    }, 300);
  };

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleBrowseClick = () => {
    if (uploadType === 'folder') {
      folderInputRef.current?.click();
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleUpload = () => {
    setIsUploading(true);

    // Simulate upload completion
    setTimeout(() => {
      // Dispatch custom event for file upload
      const event = new CustomEvent('filesUploaded', {
        detail: {
          files: files.map(file => ({
            name: file.name,
            size: file.size,
            path: file.path,
          })),
        },
      });
      window.dispatchEvent(event as Event);

      setIsUploading(false);
      setFiles([]);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{uploadType === 'folder' ? 'Upload folder' : 'Upload files'}</DialogTitle>
          <DialogDescription>
            {currentFolder
              ? `Upload ${uploadType === 'folder' ? 'folder' : 'files'} to ${currentFolder}`
              : `Upload ${uploadType === 'folder' ? 'folder' : 'files'} to your drive`}
          </DialogDescription>
        </DialogHeader>

        <div
          className={cn(
            'mt-4 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 p-10 text-center transition-colors',
            isDragging && 'border-primary/50 bg-primary/5'
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="h-10 w-10 text-muted-foreground" />
          <p className="mt-2 text-sm font-medium">
            Drag and drop {uploadType === 'folder' ? 'folders' : 'files'} here, or{' '}
            <button
              type="button"
              onClick={handleBrowseClick}
              className="cursor-pointer text-primary hover:underline"
            >
              browse
            </button>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Up to 100MB per file</p>
          <input
            ref={fileInputRef}
            id="file-upload"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileInput}
          />
          <input
            ref={folderInputRef}
            id="folder-upload"
            type="file"
            multiple
            className="hidden"
            onChange={handleFolderInput}
          />
        </div>

        {files.length > 0 && (
          <div className="mt-4 max-h-56 overflow-y-auto rounded-md border">
            <div className="divide-y">
              {files.map(file => (
                <div key={file.id} className="flex items-center p-2">
                  <div className="shrink-0 p-2">
                    {file.path ? (
                      <FolderIcon className="h-8 w-8 text-muted-foreground" />
                    ) : (
                      <FileIcon className="h-8 w-8 text-muted-foreground" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1 px-2">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm font-medium">
                        {file.name}
                        {file.path && (
                          <span className="ml-1 text-xs text-muted-foreground">({file.path})</span>
                        )}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => removeFile(file.id)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove file</span>
                      </Button>
                    </div>
                    <div className="mt-1 flex items-center text-xs">
                      <Progress value={file.progress} className="h-1 w-full" />
                      <span className="ml-2 shrink-0">
                        {file.status === 'complete' ? 'Complete' : `${Math.round(file.progress)}%`}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{file.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <DialogFooter className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            {files.length} {files.length === 1 ? 'file' : 'files'}
          </p>
          <Button
            type="submit"
            disabled={
              files.length === 0 || files.some(f => f.status === 'uploading') || isUploading
            }
            onClick={handleUpload}
          >
            {isUploading ? 'Uploading...' : 'Upload'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
