import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';

interface FileCardProps {
  file: {
    name: string;
    type: string;
    date: string;
    size: string;
    icon?: ReactNode;
  };
}

export function FileCard({ file }: FileCardProps) {
  const getFileIcon = () => {
    if (file.icon) return file.icon;

    switch (file.type) {
      case 'doc':
        return (
          <svg
            className="h-10 w-10"
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
            className="h-10 w-10"
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
            className="h-10 w-10"
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
      case 'image':
        return (
          <svg
            className="h-10 w-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
              fill="#DB4437"
            />
            <path d="M19 16L15 12L5 21H19V16Z" fill="#A52714" />
            <path d="M19 12L14 7L9 12L5 9V19L9 15L14 19L19 16V12Z" fill="#EA8977" />
            <circle cx="10" cy="9" r="2" fill="#FFFFFF" />
          </svg>
        );
      case 'pdf':
        return (
          <svg
            className="h-10 w-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
              fill="#DB4437"
            />
            <path d="M14 2V8H20L14 2Z" fill="#EA8977" />
            <path
              d="M7 14.5H9V15.5H7V14.5ZM7 12.5H9V13.5H7V12.5ZM7 10.5H9V11.5H7V10.5ZM11 14.5H17V15.5H11V14.5ZM11 12.5H17V13.5H11V12.5ZM11 10.5H17V11.5H11V10.5Z"
              fill="white"
            />
          </svg>
        );
      case 'video':
        return (
          <svg
            className="h-10 w-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20C21.1 6 22 6.9 22 8V16C22 17.1 21.1 18 20 18H4C2.9 18 2 17.1 2 16V8C2 6.9 2.9 6 4 6Z"
              fill="#673AB7"
            />
            <path d="M10 9V15L15 12L10 9Z" fill="white" />
          </svg>
        );
      case 'form':
        return (
          <svg
            className="h-10 w-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
              fill="#673AB7"
            />
            <path d="M14 2V8H20L14 2Z" fill="#B39DDB" />
            <path d="M16 13H8V15H16V13Z" fill="white" />
            <path d="M16 17H8V19H16V17Z" fill="white" />
            <path d="M10 9H8V11H10V9Z" fill="white" />
          </svg>
        );
      default:
        return (
          <svg
            className="h-10 w-10"
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
    <div className="group relative flex flex-col rounded-lg border border-[#e5e8eb] p-4 transition-all hover:shadow-md">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-[#f0f2f4]">
        {getFileIcon()}
      </div>
      <h3 className="font-medium text-[#111418]">{file.name}</h3>
      <p className="text-sm text-[#637588]">
        {file.date} • {file.size}
      </p>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
      >
        <MoreHorizontal className="h-5 w-5 text-[#637588]" />
      </Button>
    </div>
  );
}
