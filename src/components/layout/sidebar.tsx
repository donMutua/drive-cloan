'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cloud, FolderIcon, Share2, Star, Trash2, Users } from 'lucide-react';

import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';

interface SidebarProps {
  usage: {
    used: number;
    total: number;
  };
}

export function DashboardSidebar({ usage }: SidebarProps) {
  const pathname = usePathname();
  const usedPercentage = (usage.used / usage.total) * 100;

  const navigation = [
    { name: 'My Drive', href: '/dashboard', icon: FolderIcon },
    { name: 'Shared with Me', href: '/dashboard/shared', icon: Share2 },
    { name: 'Starred', href: '/dashboard/starred', icon: Star },
    { name: 'Trash', href: '/dashboard/trash', icon: Trash2 },
  ];

  const teams = [
    { name: 'Design Team', href: '/dashboard/teams/design' },
    { name: 'Marketing', href: '/dashboard/teams/marketing' },
    { name: 'Development', href: '/dashboard/teams/development' },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map(item => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Teams</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {teams.map(team => (
                <SidebarMenuItem key={team.name}>
                  <SidebarMenuButton asChild isActive={pathname === team.href}>
                    <Link href={team.href}>
                      <Users className="size-4" />
                      <span>{team.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="space-y-4">
        <div className="px-3 py-2">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium">Storage</span>
            <span className="text-xs text-muted-foreground">
              {Math.round(usage.used)} GB of {usage.total} GB
            </span>
          </div>
          <Progress value={usedPercentage} />
        </div>

        <div className="px-3">
          <Button className="w-full" size="sm">
            <Cloud className="mr-2 size-4" />
            Upgrade Storage
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
