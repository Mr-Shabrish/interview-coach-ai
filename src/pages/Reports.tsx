import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Clock, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const sessions = [
  {
    id: "1",
    date: "Feb 5, 2026",
    time: "10:30 AM",
    duration: "12:34",
    overallScore: 85,
    verbalScore: 88,
    nonVerbalScore: 82,
    questionsAnswered: 5,
  },
  {
    id: "2",
    date: "Feb 3, 2026",
    time: "2:15 PM",
    duration: "08:45",
    overallScore: 78,
    verbalScore: 75,
    nonVerbalScore: 81,
    questionsAnswered: 4,
  },
  {
    id: "3",
    date: "Feb 1, 2026",
    time: "11:00 AM",
    duration: "15:22",
    overallScore: 72,
    verbalScore: 70,
    nonVerbalScore: 74,
    questionsAnswered: 5,
  },
  {
    id: "4",
    date: "Jan 29, 2026",
    time: "3:45 PM",
    duration: "10:18",
    overallScore: 69,
    verbalScore: 68,
    nonVerbalScore: 70,
    questionsAnswered: 4,
  },
  {
    id: "5",
    date: "Jan 26, 2026",
    time: "9:00 AM",
    duration: "14:55",
    overallScore: 65,
    verbalScore: 62,
    nonVerbalScore: 68,
    questionsAnswered: 5,
  },
];

export default function Reports() {
  const navigate = useNavigate();

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-success/10 text-success border-success/30";
    if (score >= 60) return "bg-warning/10 text-warning border-warning/30";
    return "bg-destructive/10 text-destructive border-destructive/30";
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-display">My Reports</h1>
            <p className="text-muted-foreground mt-1">
              View and analyze your past interview sessions
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search sessions..." className="pl-9 w-64" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">{sessions.length}</p>
                <p className="text-sm text-muted-foreground mt-1">Total Sessions</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-success">
                  {Math.round(sessions.reduce((acc, s) => acc + s.overallScore, 0) / sessions.length)}%
                </p>
                <p className="text-sm text-muted-foreground mt-1">Average Score</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-accent">
                  +{sessions[0].overallScore - sessions[sessions.length - 1].overallScore}%
                </p>
                <p className="text-sm text-muted-foreground mt-1">Improvement</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sessions List */}
        <Card>
          <CardHeader>
            <CardTitle>All Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer gap-4"
                  onClick={() => navigate(`/report/${session.id}`)}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{session.date}</span>
                        <span className="text-sm text-muted-foreground">{session.time}</span>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {session.duration}
                        </span>
                        <span>{session.questionsAnswered} questions</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xs text-muted-foreground">Verbal</p>
                        <p className="font-semibold">{session.verbalScore}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Non-Verbal</p>
                        <p className="font-semibold">{session.nonVerbalScore}%</p>
                      </div>
                      <div>
                        <Badge className={getScoreColor(session.overallScore)}>
                          {session.overallScore}%
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
