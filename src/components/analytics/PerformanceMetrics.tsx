import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for demonstration
const data = [
  { name: 'Jan', spotify: 4000, appleMusic: 2400, tidal: 1800, youtube: 3200 },
  { name: 'Feb', spotify: 4200, appleMusic: 2600, tidal: 1900, youtube: 3400 },
  { name: 'Mar', spotify: 4800, appleMusic: 2900, tidal: 2200, youtube: 3800 },
  { name: 'Apr', spotify: 5200, appleMusic: 3200, tidal: 2500, youtube: 4200 },
  { name: 'May', spotify: 5800, appleMusic: 3500, tidal: 2800, youtube: 4600 },
  { name: 'Jun', spotify: 6200, appleMusic: 3800, tidal: 3000, youtube: 4800 },
];

const PerformanceMetrics: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-lg bg-primary/10 p-4 text-center">
          <h3 className="text-sm font-medium">Total Streams</h3>
          <p className="text-2xl font-bold">835,402</p>
          <p className="text-xs text-muted-foreground">+12.3% from last month</p>
        </div>
        <div className="rounded-lg bg-primary/10 p-4 text-center">
          <h3 className="text-sm font-medium">Track Saves</h3>
          <p className="text-2xl font-bold">24,986</p>
          <p className="text-xs text-muted-foreground">+8.7% from last month</p>
        </div>
        <div className="rounded-lg bg-primary/10 p-4 text-center">
          <h3 className="text-sm font-medium">Playlist Adds</h3>
          <p className="text-2xl font-bold">3,752</p>
          <p className="text-xs text-muted-foreground">+15.2% from last month</p>
        </div>
        <div className="rounded-lg bg-primary/10 p-4 text-center">
          <h3 className="text-sm font-medium">Average Daily Streams</h3>
          <p className="text-2xl font-bold">27,847</p>
          <p className="text-xs text-muted-foreground">+10.5% from last month</p>
        </div>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="spotify" stroke="#1DB954" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="appleMusic" stroke="#FC3C44" />
            <Line type="monotone" dataKey="tidal" stroke="#00FFFF" />
            <Line type="monotone" dataKey="youtube" stroke="#FF0000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-medium">Platform Comparison</h3>
        <p className="text-sm text-muted-foreground">
          Spotify continues to be your strongest platform with consistent growth. 
          YouTube is showing the fastest growth rate at +18.2% this month.
        </p>
      </div>
    </div>
  );
};

export default PerformanceMetrics;