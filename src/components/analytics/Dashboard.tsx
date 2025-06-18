import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import PerformanceMetrics from './PerformanceMetrics';
import AudienceAnalytics from './AudienceAnalytics';
import RevenueTracker from './RevenueTracker';
import TrendForecast from './TrendForecast';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Echofy Analytics Dashboard</h1>
      
      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>
        
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>
                Track your music performance across all platforms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceMetrics />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="audience" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audience Analytics</CardTitle>
              <CardDescription>
                Understand your listener demographics and behavior.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AudienceAnalytics />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Tracker</CardTitle>
              <CardDescription>
                Monitor royalties and revenue streams in real-time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RevenueTracker />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trend Forecast</CardTitle>
              <CardDescription>
                Predict upcoming music trends and opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TrendForecast />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;