import Link from 'next/link';
import { Search, Bell, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';
import { CreateNewMenu } from '@/components/create-new-menu';

export function DashboardHeader() {
  return (
    <header className="border-b border-[#e5e8eb] bg-white">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5 text-[#637588]" />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1980e6]">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span className="text-lg font-semibold text-[#111418]">Cloud.io</span>
          </Link>
        </div>

        <div className="relative hidden md:block md:w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#637588]" />
          <Input
            type="search"
            placeholder="Search files"
            className="w-full rounded-full border-[#e5e8eb] bg-[#f0f2f4] pl-9 text-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <CreateNewMenu />
          </div>
          <Button variant="ghost" size="icon" className="text-[#637588]">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar />
        </div>
      </div>
    </header>
  );
}
