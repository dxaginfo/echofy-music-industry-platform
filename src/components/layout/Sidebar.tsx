import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { BarChart, Music, Users, Zap, Settings, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="hidden md:flex h-screen w-64 flex-col border-r bg-background p-4">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="h-8 w-8 rounded-full bg-primary"></div>
        <span className="text-xl font-bold">Echofy</span>
      </div>
      
      <nav className="space-y-1.5">
        <NavItem href="/" active icon={<BarChart className="mr-2 h-4 w-4" />}>Dashboard</NavItem>
        <NavItem href="/analytics" icon={<BarChart className="mr-2 h-4 w-4" />}>Analytics</NavItem>
        <NavItem href="/ai" icon={<Zap className="mr-2 h-4 w-4" />}>AI Tools</NavItem>
        <NavItem href="/royalties" icon={<Music className="mr-2 h-4 w-4" />}>Royalties</NavItem>
        <NavItem href="/community" icon={<Users className="mr-2 h-4 w-4" />}>Community</NavItem>
      </nav>
      
      <div className="mt-auto space-y-1.5">
        <NavItem href="/settings" icon={<Settings className="mr-2 h-4 w-4" />}>Settings</NavItem>
        <NavItem href="/help" icon={<HelpCircle className="mr-2 h-4 w-4" />}>Help & Support</NavItem>
      </div>
    </div>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, icon, active }) => {
  return (
    <Link href={href} passHref>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start",
          active && "bg-muted font-medium"
        )}
      >
        {icon}
        {children}
      </Button>
    </Link>
  );
};

export default Sidebar;