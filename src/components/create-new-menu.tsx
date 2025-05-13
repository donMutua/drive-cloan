'use client';

import type React from 'react';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CreateFolderDialog } from '@/components/dashboard/create-folder-dialog';
import { UploadDialog } from '@/components/dashboard/upload-dialog';
import { FolderIcon, FileIcon, FolderUp } from 'lucide-react';

export function CreateNewMenu() {
  const [open, setOpen] = useState(false);
  const [createFolderDialogOpen, setCreateFolderDialogOpen] = useState(false);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [uploadType] = useState<'file' | 'folder'>('file');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  const handleCreateFolder = () => {
    setOpen(false);
    setCreateFolderDialogOpen(true);
  };

  const handleFileUpload = () => {
    setOpen(false);
    fileInputRef.current?.click();
  };

  const handleFolderUpload = () => {
    setOpen(false);
    folderInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);

      // Dispatch custom event for file upload
      const event = new CustomEvent('filesUploaded', {
        detail: {
          files: selectedFiles.map(file => ({
            name: file.name,
            size: formatFileSize(file.size),
          })),
        },
      });
      window.dispatchEvent(event as Event);

      // Reset the input
      e.target.value = '';
    }
  };

  const handleFolderInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);

      // Dispatch custom event for file upload
      const event = new CustomEvent('filesUploaded', {
        detail: {
          files: selectedFiles.map(file => ({
            name: file.name,
            size: formatFileSize(file.size),
            path: file.webkitRelativePath,
          })),
        },
      });
      window.dispatchEvent(event as Event);

      // Reset the input
      e.target.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button className="rounded-xl bg-[#1980e6] px-4 text-white hover:bg-[#1980e6]/90">
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
            </svg>
            New
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem className="flex items-center gap-2 py-2" onClick={handleCreateFolder}>
            <FolderIcon className="h-5 w-5 text-[#5F6368]" />
            <span>New folder</span>
            <span className="ml-auto text-xs text-gray-500">^C then F</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 py-2" onClick={handleFileUpload}>
            <FileIcon className="h-5 w-5 text-[#5F6368]" />
            <span>File upload</span>
            <span className="ml-auto text-xs text-gray-500">^C then U</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 py-2" onClick={handleFolderUpload}>
            <FolderUp className="h-5 w-5 text-[#5F6368]" />
            <span>Folder upload</span>
            <span className="ml-auto text-xs text-gray-500">^C then I</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Hidden file inputs */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        multiple
        onChange={handleFileInputChange}
      />
      <input
        type="file"
        ref={folderInputRef}
        className="hidden"
        multiple
        onChange={handleFolderInputChange}
      />

      <CreateFolderDialog
        open={createFolderDialogOpen}
        onOpenChange={setCreateFolderDialogOpen}
        currentPath="My Drive"
      />
      <UploadDialog
        open={uploadDialogOpen}
        onOpenChange={setUploadDialogOpen}
        uploadType={uploadType}
        currentFolder="My Drive"
      />
    </>
  );
}
