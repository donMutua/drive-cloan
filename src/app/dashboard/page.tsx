'use client';

import React from 'react';
import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { FileCard } from '@/components/file-card';
import { QuickAccessCard } from '@/components/quick-access-card';
import { FolderCard } from '@/components/folder-card';

export default function DashboardPage() {
  // Mock data for recent files
  const [recentFiles] = useState([
    {
      name: 'Q1 Report.docx',
      type: 'doc',
      date: 'Yesterday',
      size: '2.3 MB',
    },
    {
      name: 'Budget 2023.xlsx',
      type: 'sheet',
      date: 'Jul 12, 2023',
      size: '4.7 MB',
    },
    {
      name: 'Company Presentation.pptx',
      type: 'slide',
      date: 'Jun 15, 2023',
      size: '1.8 MB',
    },
  ]);

  // Mock data for folders
  const [folders, setFolders] = useState([
    { id: 'folder-1', name: 'Documents' },
    { id: 'folder-2', name: 'Images' },
    { id: 'folder-3', name: 'Projects' },
  ]);

  // Mock data for all files
  const [allFiles, setAllFiles] = useState([
    {
      name: 'Business Plan.docx',
      type: 'doc',
      date: 'Jan 20, 2023',
      size: '2.8 MB',
    },
    {
      name: 'UI Design Spec.pdf',
      type: 'pdf',
      date: 'Jan 20, 2023',
      size: '2.8 MB',
    },
    {
      name: 'UX Research Report.docx',
      type: 'doc',
      date: 'Jan 20, 2023',
      size: '2.8 MB',
    },
    {
      name: 'Product Requirements.docx',
      type: 'doc',
      date: 'Jan 20, 2023',
      size: '2.8 MB',
    },
    {
      name: 'Mobile App Wireframes.png',
      type: 'image',
      date: 'Jan 20, 2023',
      size: '2.8 MB',
    },
    {
      name: 'Product Demo.mp4',
      type: 'video',
      date: 'Jan 20, 2023',
      size: '24.5 MB',
    },
    {
      name: 'Customer Survey.form',
      type: 'form',
      date: 'Jan 20, 2023',
      size: '1.2 MB',
    },
    {
      name: 'Sales Data.xlsx',
      type: 'sheet',
      date: 'Jan 20, 2023',
      size: '3.5 MB',
    },
  ]);

  // Listen for custom events for folder creation and file uploads
  React.useEffect(() => {
    const handleFolderCreated = (event: CustomEvent) => {
      const { folderName } = event.detail;
      const newFolder = {
        id: `folder-${Date.now()}`,
        name: folderName,
      };
      setFolders(prev => [newFolder, ...prev]);

      toast(`"${folderName}" has been created in My Drive`);
    };

    const handleFileUploaded = (event: CustomEvent) => {
      const { files } = event.detail;
      const newFiles = files.map((file: any) => ({
        name: file.name,
        type: getFileType(file.name),
        date: 'Just now',
        size: file.size,
      }));

      setAllFiles(prev => [...newFiles, ...prev]);

      if (newFiles.length === 1) {
        toast(`File uploaded,"${newFiles[0].name}" has been uploaded to My Drive`);
      } else {
        toast(`Files uploaded ${newFiles.length} files have been uploaded to My Drive`);
      }
    };

    // Add event listeners
    window.addEventListener('folderCreated' as any, handleFolderCreated as EventListener);
    window.addEventListener('filesUploaded' as any, handleFileUploaded as EventListener);

    // Clean up
    return () => {
      window.removeEventListener('folderCreated' as any, handleFolderCreated as EventListener);
      window.removeEventListener('filesUploaded' as any, handleFileUploaded as EventListener);
    };
  }, [toast]);

  // Helper function to determine file type from extension
  const getFileType = (filename: string) => {
    const ext = filename.split('.').pop()?.toLowerCase();

    if (['doc', 'docx', 'txt', 'rtf'].includes(ext || '')) return 'doc';
    if (['xls', 'xlsx', 'csv'].includes(ext || '')) return 'sheet';
    if (['ppt', 'pptx'].includes(ext || '')) return 'slide';
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'].includes(ext || '')) return 'image';
    if (['mp4', 'mov', 'avi', 'wmv'].includes(ext || '')) return 'video';
    if (['pdf'].includes(ext || '')) return 'pdf';
    if (['form'].includes(ext || '')) return 'form';

    return 'doc'; // Default
  };

  return (
    <div>
      {/* Quick Access Section */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#111418]">Quick Access</h2>
          <Button variant="ghost" className="text-[#637588]">
            View all <MoreHorizontal className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {recentFiles.map((file, index) => (
            <QuickAccessCard key={index} file={file} />
          ))}
        </div>
      </div>

      {/* Files and Folders Section */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#111418]">Files and Folders</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-[#e5e8eb] text-[#637588]">
              <svg
                className="mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 5H21V7H3V5ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z" fill="currentColor" />
              </svg>
              List
            </Button>
            <Button variant="outline" size="sm" className="border-[#e5e8eb] text-[#637588]">
              <svg
                className="mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3V9H9V3H3ZM7 7H5V5H7V7ZM3 11V17H9V11H3ZM7 15H5V13H7V15ZM11 3V9H17V3H11ZM15 7H13V5H15V7ZM11 11V17H17V11H11ZM15 15H13V13H15V15Z"
                  fill="currentColor"
                />
              </svg>
              Grid
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="bg-transparent">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-[#f0f2f4] data-[state=active]:text-[#111418] data-[state=active]:shadow-none"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="data-[state=active]:bg-[#f0f2f4] data-[state=active]:text-[#111418] data-[state=active]:shadow-none"
            >
              Documents
            </TabsTrigger>
            <TabsTrigger
              value="spreadsheets"
              className="data-[state=active]:bg-[#f0f2f4] data-[state=active]:text-[#111418] data-[state=active]:shadow-none"
            >
              Spreadsheets
            </TabsTrigger>
            <TabsTrigger
              value="presentations"
              className="data-[state=active]:bg-[#f0f2f4] data-[state=active]:text-[#111418] data-[state=active]:shadow-none"
            >
              Presentations
            </TabsTrigger>
            <TabsTrigger
              value="images"
              className="data-[state=active]:bg-[#f0f2f4] data-[state=active]:text-[#111418] data-[state=active]:shadow-none"
            >
              Images
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {folders.map(folder => (
            <Link key={folder.id} href={`/dashboard/folder/${folder.id}`}>
              <FolderCard folder={folder} />
            </Link>
          ))}

          {allFiles.map((file, index) => (
            <Link
              key={`${file.name}-${index}`}
              href={`/file-preview/${encodeURIComponent(file.name)}`}
            >
              <FileCard file={file} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
