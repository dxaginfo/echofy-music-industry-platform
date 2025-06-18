import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface RoyaltyTransaction {
  id: string;
  source: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'processing';
}

interface RoyaltyDistribution {
  name: string;
  value: number;
  color: string;
}

const transactions: RoyaltyTransaction[] = [
  { id: '89732', source: 'Spotify', amount: 427.82, date: '2025-06-17', status: 'completed' },
  { id: '89733', source: 'Apple Music', amount: 315.45, date: '2025-06-17', status: 'completed' },
  { id: '89734', source: 'YouTube Music', amount: 215.93, date: '2025-06-17', status: 'completed' },
  { id: '89735', source: 'Tidal', amount: 178.20, date: '2025-06-17', status: 'completed' },
  { id: '89736', source: 'Amazon Music', amount: 143.65, date: '2025-06-18', status: 'pending' },
  { id: '89737', source: 'TikTok', amount: 89.30, date: '2025-06-18', status: 'processing' },
];

const distribution: RoyaltyDistribution[] = [
  { name: 'Artist', value: 70, color: '#4f46e5' },
  { name: 'Producer', value: 15, color: '#10b981' },
  { name: 'Label', value: 10, color: '#f59e0b' },
  { name: 'Publisher', value: 5, color: '#3b82f6' },
];

const RoyaltyTracker: React.FC = () => {
  const [periodFilter, setPeriodFilter] = useState('all');

  const totalRoyalties = transactions
    .filter(t => t.status === 'completed')
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Blockchain Royalty Tracker</CardTitle>
        <CardDescription>
          Monitor your music royalties with real-time blockchain verification.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium mb-2">Royalty Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {distribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium">Recent Transactions</h3>
              <div className="text-sm font-medium">
                Total: ${totalRoyalties.toFixed(2)}
              </div>
            </div>
            
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recent" className="mt-2">
                <TransactionTable 
                  transactions={transactions.filter(t => t.status === 'completed').slice(0, 5)} 
                />
              </TabsContent>
              
              <TabsContent value="pending" className="mt-2">
                <TransactionTable 
                  transactions={transactions.filter(t => t.status !== 'completed')} 
                />
              </TabsContent>
              
              <TabsContent value="all" className="mt-2">
                <TransactionTable transactions={transactions} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="mt-6 p-4 rounded-lg bg-muted">
          <h4 className="font-medium mb-2">Smart Contract Details</h4>
          <div className="text-sm">
            <div className="grid grid-cols-2 gap-2">
              <div>Contract Address:</div>
              <div className="font-mono">0x7f1e44bF4F2D78740864e4D5490553e28c9Af6B9</div>
              <div>Last Updated:</div>
              <div>2025-06-18 04:32:18 UTC</div>
              <div>Payment Status:</div>
              <div className="text-green-500 font-medium">Active & Verified</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TransactionTable: React.FC<{ transactions: RoyaltyTransaction[] }> = ({ transactions }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Source</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell>{tx.source}</TableCell>
            <TableCell className="text-right">${tx.amount.toFixed(2)}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <div className={`h-2 w-2 rounded-full mr-2 ${
                  tx.status === 'completed' ? 'bg-green-500' : 
                  tx.status === 'pending' ? 'bg-yellow-500' : 'bg-blue-500'
                }`} />
                <span className="capitalize">{tx.status}</span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RoyaltyTracker;