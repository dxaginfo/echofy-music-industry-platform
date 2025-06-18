import Dashboard from '@/components/analytics/Dashboard';

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Echofy</h1>
      <p className="text-muted-foreground">
        The Music Industry's New Nervous System - Connecting AI, blockchain, and community tools
        to create a cohesive ecosystem for music professionals.
      </p>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">AI Analysis</h2>
          <p className="text-sm text-muted-foreground">
            Leverage AI to analyze audio content, detect emotions, and match with audience preferences.
          </p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Blockchain Royalties</h2>
          <p className="text-sm text-muted-foreground">
            Track and receive royalties in real-time with transparent blockchain verification.
          </p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Community Building</h2>
          <p className="text-sm text-muted-foreground">
            Create deeper connections with fans through token-gated experiences and direct engagement.
          </p>
        </div>
      </div>
      
      <Dashboard />
    </div>
  );
}
