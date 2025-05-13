'use client';

import type React from 'react';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface CreateFolderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentPath?: string;
}

export function CreateFolderDialog({
  open,
  onOpenChange,
  // currentPath = 'My Drive',
}: CreateFolderDialogProps) {
  const [folderName, setFolderName] = useState('Untitled folder');
  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!folderName.trim()) {
      return;
    }

    setIsCreating(true);

    // Simulate folder creation
    setTimeout(() => {
      setIsCreating(false);

      // Dispatch custom event for folder creation
      const event = new CustomEvent('folderCreated', {
        detail: { folderName: folderName.trim() },
      });
      window.dispatchEvent(event as Event);

      // Reset form and close dialog
      setFolderName('Untitled folder');
      onOpenChange(false);
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New folder</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <Input
              id="folder-name"
              value={folderName}
              onChange={e => setFolderName(e.target.value)}
              autoFocus
              className="w-full"
              onFocus={e => e.target.select()}
            />
          </div>

          <DialogFooter className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isCreating}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isCreating || !folderName.trim()}>
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
