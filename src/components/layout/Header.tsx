import React from 'react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Bell, Search } from 'lucide-react';
import { Input } from '../ui/input';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="hidden md:block">
        <h1 className="text-lg font-semibold">Echofy Platform</h1>
      </div>
      
      <div className="relative md:ml-auto md:w-1/3">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full bg-background pl-8"
        />
      </div>
      
      <Button size="icon" variant="ghost" className="ml-auto md:ml-0">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>
      
      <div className="border-l pl-4">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=13" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;