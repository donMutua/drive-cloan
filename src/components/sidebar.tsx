import Link from 'next/link';
import { Database, ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CreateNewMenu } from '@/components/create-new-menu';

export function Sidebar() {
  return (
    <div className="hidden w-64 flex-shrink-0 border-r border-[#e5e8eb] bg-[#f0f2f4] md:block">
      <div className="flex h-16 items-center border-b border-[#e5e8eb] px-4">
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

      <div className="p-4">
        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-md p-2 text-[#637588] hover:bg-white hover:text-[#111418] hover:shadow-sm"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
                fill="#5F6368"
              />
            </svg>
            <span className="text-sm font-medium">Home</span>
          </Link>

          <Link
            href="/dashboard/my-drive"
            className="flex items-center gap-3 rounded-md p-2 text-[#637588] hover:bg-white hover:text-[#111418] hover:shadow-sm"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"
                fill="#5F6368"
              />
            </svg>
            <span className="text-sm font-medium">My Drive</span>
          </Link>

          <div className="pt-4 pb-2">
            <div className="px-2 text-xs font-medium uppercase text-[#637588]">Categories</div>
          </div>

          <Link
            href="/dashboard/documents"
            className="flex items-center gap-3 rounded-md p-2 text-[#637588] hover:bg-white hover:text-[#111418] hover:shadow-sm"
          >
            <svg
              className="h-5 w-5"
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
            <span className="text-sm font-medium">Documents</span>
          </Link>

          <Link
            href="/dashboard/spreadsheets"
            className="flex items-center gap-3 rounded-md p-2 text-[#637588] hover:bg-white hover:text-[#111418] hover:shadow-sm"
          >
            <svg
              className="h-5 w-5"
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
            <span className="text-sm font-medium">Spreadsheets</span>
          </Link>

          <Link
            href="/dashboard/presentations"
            className="flex items-center gap-3 rounded-md p-2 text-[#637588] hover:bg-white hover:text-[#111418] hover:shadow-sm"
          >
            <svg
              className="h-5 w-5"
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
            <span className="text-sm font-medium">Presentations</span>
          </Link>

          <Link
            href="/dashboard/forms"
            className="flex items-center gap-3 rounded-md p-2 text-[#637588] hover:bg-white hover:text-[#111418] hover:shadow-sm"
          >
            <svg
              className="h-5 w-5"
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
            <span className="text-sm font-medium">Forms</span>
          </Link>

          <Link
            href="/dashboard/images"
            className="flex items-center gap-3 rounded-md p-2 text-[#637588] hover:bg-white hover:text-[#111418] hover:shadow-sm"
          >
            <svg
              className="h-5 w-5"
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
            <span className="text-sm font-medium">Photos & Images</span>
          </Link>

          <Link
            href="/dashboard/pdfs"
            className="flex items-center gap-3 rounded-md p-2 text-[#637588] hover:bg-white hover:text-[#111418] hover:shadow-sm"
          >
            <svg
              className="h-5 w-5"
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
            <span className="text-sm font-medium">PDFs</span>
          </Link>

          <Link
            href="/dashboard/videos"
            className="flex items-center gap-3 rounded-md p-2 text-[#637588] hover:bg-white hover:text-[#111418] hover:shadow-sm"
          >
            <svg
              className="h-5 w-5"
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
            <span className="text-sm font-medium">Videos</span>
          </Link>
        </nav>

        <div className="mt-8">
          <CreateNewMenu />
        </div>

        <div className="mt-8 space-y-4 rounded-lg border border-[#e5e8eb] bg-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-[#111418]">Storage</h3>
            <span className="text-xs text-[#637588]">25.4 GB of 100 GB</span>
          </div>
          <Progress value={25} className="h-2 bg-[#e5e8eb]" />
          <Button variant="outline" className="w-full border-[#e5e8eb] text-[#637588]">
            <Database className="mr-2 h-4 w-4" />
            <span>Manage Storage</span>
          </Button>
        </div>

        <div className="mt-4">
          <Button
            variant="outline"
            className="w-full justify-start gap-2 border-[#e5e8eb] text-[#637588]"
          >
            <ArrowUpRight className="h-4 w-4" />
            <span>Upgrade to Pro</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
