import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Input } from '../ui/input';

interface Fan {
  id: string;
  name: string;
  username: string;
  avatar: string;
  tokenBalance: number;
  memberSince: string;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  interactions: number;
}

const fans: Fan[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    username: 'alexj',
    avatar: 'https://i.pravatar.cc/150?img=1',
    tokenBalance: 450,
    memberSince: '2025-01-15',
    tier: 'Gold',
    interactions: 87
  },
  {
    id: '2',
    name: 'Samantha Lee',
    username: 'samlee',
    avatar: 'https://i.pravatar.cc/150?img=5',
    tokenBalance: 720,
    memberSince: '2024-11-03',
    tier: 'Platinum',
    interactions: 134
  },
  {
    id: '3',
    name: 'Marcus Wong',
    username: 'mwong',
    avatar: 'https://i.pravatar.cc/150?img=8',
    tokenBalance: 215,
    memberSince: '2025-02-28',
    tier: 'Silver',
    interactions: 43
  },
  {
    id: '4',
    name: 'Julia Garcia',
    username: 'jgarcia',
    avatar: 'https://i.pravatar.cc/150?img=9',
    tokenBalance: 380,
    memberSince: '2025-03-10',
    tier: 'Gold',
    interactions: 65
  },
  {
    id: '5',
    name: 'David Kim',
    username: 'dkim',
    avatar: 'https://i.pravatar.cc/150?img=12',
    tokenBalance: 180,
    memberSince: '2025-04-05',
    tier: 'Bronze',
    interactions: 29
  },
];

const FanEngagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFan, setSelectedFan] = useState<Fan | null>(null);
  
  const filteredFans = searchQuery
    ? fans.filter(fan => 
        fan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fan.username.toLowerCase().includes(searchQuery.toLowerCase()))
    : fans;
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Fan Engagement Hub</CardTitle>
        <CardDescription>
          Connect with your most engaged listeners and token holders.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="superfans" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="superfans">Super Fans</TabsTrigger>
            <TabsTrigger value="tokenholders">Token Holders</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="superfans" className="mt-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Search fans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-sm"
              />
              <Button variant="outline">Filter</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-md p-4">
                <h3 className="text-lg font-medium mb-2">Top Fans</h3>
                <div className="space-y-3">
                  {filteredFans.map(fan => (
                    <div 
                      key={fan.id} 
                      className={`flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer ${selectedFan?.id === fan.id ? 'bg-muted' : ''}`}
                      onClick={() => setSelectedFan(fan)}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={fan.avatar} alt={fan.name} />
                          <AvatarFallback>{fan.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{fan.name}</div>
                          <div className="text-sm text-muted-foreground">@{fan.username}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`px-2 py-1 rounded-full text-xs ${
                          fan.tier === 'Platinum' ? 'bg-violet-100 text-violet-800' :
                          fan.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                          fan.tier === 'Silver' ? 'bg-gray-100 text-gray-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {fan.tier}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                {selectedFan ? (
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={selectedFan.avatar} alt={selectedFan.name} />
                        <AvatarFallback>{selectedFan.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold">{selectedFan.name}</h3>
                        <p className="text-muted-foreground">@{selectedFan.username}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-muted rounded-md p-3 text-center">
                        <div className="text-2xl font-bold">{selectedFan.tokenBalance}</div>
                        <div className="text-xs text-muted-foreground">ECHO Tokens</div>
                      </div>
                      <div className="bg-muted rounded-md p-3 text-center">
                        <div className="text-2xl font-bold">{selectedFan.interactions}</div>
                        <div className="text-xs text-muted-foreground">Interactions</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Member Since:</span>
                        <span>{selectedFan.memberSince}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Fan Tier:</span>
                        <span>{selectedFan.tier}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Last Active:</span>
                        <span>3 hours ago</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="w-full">Message</Button>
                      <Button variant="outline" className="w-full">View History</Button>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-center p-8">
                    <div className="space-y-2">
                      <p className="text-muted-foreground">Select a fan to view their profile and engagement details.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tokenholders" className="mt-4">
            <div className="p-8 text-center border rounded-md">
              <h3 className="text-lg font-medium mb-2">Token Holder Management</h3>
              <p className="text-muted-foreground mb-4">
                View token distributions, create exclusive content for token holders, 
                and manage token-gated experiences.
              </p>
              <Button>Manage Token Access</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="campaigns" className="mt-4">
            <div className="p-8 text-center border rounded-md">
              <h3 className="text-lg font-medium mb-2">Fan Engagement Campaigns</h3>
              <p className="text-muted-foreground mb-4">
                Create targeted campaigns to engage with different fan segments 
                based on their activity and token holdings.
              </p>
              <Button>Create Campaign</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FanEngagement;