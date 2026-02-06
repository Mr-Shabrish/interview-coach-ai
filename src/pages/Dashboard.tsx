import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { SessionHistoryCard } from "@/components/dashboard/SessionHistoryCard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Button } from "@/components/ui/button";
import { Video, Mic, Eye, TrendingUp, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-display">Welcome back, John! 👋</h1>
            <p className="text-muted-foreground mt-1">
              Ready to ace your next interview? Let's practice!
            </p>
          </div>
          <Button 
            variant="hero" 
            size="lg" 
            className="gap-2"
            onClick={() => navigate("/interview")}
          >
            <Play className="h-5 w-5" />
            Start Mock Interview
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Sessions"
            value={12}
            subtitle="Practice interviews completed"
            icon={<Video className="h-6 w-6" />}
            trend={{ value: 25, positive: true }}
          />
          <StatsCard
            title="Average Score"
            value="78%"
            subtitle="Overall performance"
            icon={<TrendingUp className="h-6 w-6" />}
            trend={{ value: 8, positive: true }}
          />
          <StatsCard
            title="Verbal Score"
            value="82%"
            subtitle="Speech & communication"
            icon={<Mic className="h-6 w-6" />}
            trend={{ value: 12, positive: true }}
          />
          <StatsCard
            title="Non-Verbal Score"
            value="74%"
            subtitle="Body language & expression"
            icon={<Eye className="h-6 w-6" />}
            trend={{ value: 5, positive: true }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>

          {/* Quick Actions */}
          <div>
            <QuickActions />
          </div>
        </div>

        {/* Session History */}
        <SessionHistoryCard />
      </div>
    </DashboardLayout>
  );
}
