import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignInPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center px-8">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-8">
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="rounded-full bg-primary/10 p-3">
              <svg
                className="h-10 w-10 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Welcome to CloudVault</h1>
              <p className="text-muted-foreground">
                Securely store, share, and access your files from anywhere
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
            <Button asChild className="w-full">
              <Link href="/dashboard">Sign In</Link>
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/sign-up" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/signin.jpg"
            alt="Cloud storage illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30">
            <div className="flex h-full flex-col items-start justify-end p-12 text-white">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &quot;CloudVault has transformed how our team collaborates and shares files. The
                  interface is intuitive and the security features give us peace of mind.
                </p>
                <footer className="text-sm font-medium">Sofia Chen, Product Designer</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
