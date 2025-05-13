'use client';

import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';
import Link from 'next/link';

interface QuickAccessCardProps {
  file: {
    name: string;
    type: string;
    date: string;
    size: string;
    icon?: ReactNode;
  };
}

export function QuickAccessCard({ file }: QuickAccessCardProps) {
  const getFileIcon = () => {
    if (file.icon) return file.icon;

    switch (file.type) {
      case 'doc':
        return (
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
              fill="#4285F4"
            />
            <path d="M14 2V8H20L14 2Z" fill="#A1C2FA" />
            <path d="M16 13H8V15H16V13Z" fill="white" />
            <path d="M16 17H8V19H16V17Z" fill="white" />
            <path d="M10 9H8V11H10V9Z" fill="white" />
          </svg>
        );
      case 'sheet':
        return (
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
              fill="#0F9D58"
            />
            <path d="M14 2V8H20L14 2Z" fill="#87CEAC" />
            <path d="M16 13H8V15H16V13Z" fill="white" />
            <path d="M16 17H8V19H16V17Z" fill="white" />
            <path d="M10 9H8V11H10V9Z" fill="white" />
          </svg>
        );
      case 'slide':
        return (
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
              fill="#F4B400"
            />
            <path d="M14 2V8H20L14 2Z" fill="#F7D77C" />
            <path d="M16 13H8V15H16V13Z" fill="white" />
            <path d="M16 17H8V19H16V17Z" fill="white" />
            <path d="M10 9H8V11H10V9Z" fill="white" />
          </svg>
        );
      default:
        return (
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
              fill="#5F6368"
            />
            <path d="M14 2V8H20L14 2Z" fill="#DADCE0" />
          </svg>
        );
    }
  };

  return (
    <Link href={`/file-preview/${encodeURIComponent(file.name)}`}>
      <div className="group flex items-start gap-3 rounded-lg border border-[#e5e8eb] p-3 hover:bg-[#f0f2f4]">
        <div className="rounded-md bg-[#f0f2f4] p-2">{getFileIcon()}</div>

        <div className="flex-1 space-y-1">
          <h3 className="font-medium text-[#111418]">{file.name}</h3>
          <p className="text-sm text-[#637588]">
            {file.date} • {file.size}
          </p>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="opacity-0 group-hover:opacity-100"
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            // In a real app, this would open the sharing dialog
          }}
        >
          <Share2 className="h-4 w-4 text-[#637588]" />
          <span className="sr-only">Share</span>
        </Button>
      </div>
    </Link>
  );
}
