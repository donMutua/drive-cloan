import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FolderCardProps {
  folder: {
    id: string;
    name: string;
  };
}

export function FolderCard({ folder }: FolderCardProps) {
  return (
    <div className="group relative flex flex-col rounded-lg border border-[#e5e8eb] p-4 transition-all hover:shadow-md">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-[#f0f2f4]">
        <svg
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"
            fill="#5F6368"
          />
        </svg>
      </div>
      <h3 className="font-medium text-[#111418]">{folder.name}</h3>
      <p className="text-sm text-[#637588]">Folder</p>

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
