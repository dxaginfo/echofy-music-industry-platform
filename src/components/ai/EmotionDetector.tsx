import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';

interface EmotionData {
  emotion: string;
  confidence: number;
  color: string;
}

const EmotionDetector: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<EmotionData[] | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResults(null);
    }
  };
  
  const analyzeAudio = () => {
    if (!file) return;
    
    setAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      // Mock results - in a real app, this would come from an AI service
      const mockResults: EmotionData[] = [
        { emotion: 'Melancholy', confidence: 72, color: '#6366f1' },
        { emotion: 'Hopeful', confidence: 58, color: '#10b981' },
        { emotion: 'Energetic', confidence: 43, color: '#f59e0b' },
        { emotion: 'Reflective', confidence: 38, color: '#3b82f6' },
        { emotion: 'Nostalgic', confidence: 31, color: '#8b5cf6' },
      ];
      
      setResults(mockResults);
      setAnalyzing(false);
    }, 2000);
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Audio Emotion Analysis</CardTitle>
        <CardDescription>
          Upload an audio file to analyze its emotional characteristics using AI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button 
              onClick={analyzeAudio} 
              disabled={!file || analyzing}
              className="min-w-24"
            >
              {analyzing ? 'Analyzing...' : 'Analyze'}
            </Button>
          </div>
          
          {file && (
            <p className="text-sm text-muted-foreground">
              Selected file: <span className="font-medium">{file.name}</span>
            </p>
          )}
          
          {analyzing && (
            <div className="space-y-2">
              <p className="text-sm">Analyzing audio patterns...</p>
              <Progress value={45} className="h-2 w-full" />
            </div>
          )}
          
          {results && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Emotional Analysis Results</h3>
              <div className="space-y-3">
                {results.map((item) => (
                  <div key={item.emotion} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{item.emotion}</span>
                      <span className="text-sm text-muted-foreground">{item.confidence}%</span>
                    </div>
                    <Progress value={item.confidence} className="h-2 w-full" style={{ backgroundColor: `${item.color}20`, '--progress-color': item.color } as React.CSSProperties} />
                  </div>
                ))}
              </div>
              <div className="rounded-md bg-muted p-4">
                <h4 className="font-medium">AI Insights</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  This track has a predominantly melancholic mood with hopeful undertones. 
                  The emotional arc shifts from reflective to more energetic in the middle section.
                  These emotional characteristics align well with genres like indie folk and ambient pop.
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmotionDetector;