import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Session {
  id: string;
  date: string;
  duration: string;
  overallScore: number;
  verbalScore: number;
  nonVerbalScore: number;
  status: "completed" | "in-progress" | "scheduled";
}

const mockSessions: Session[] = [
  {
    id: "1",
    date: "Feb 5, 2026",
    duration: "12:34",
    overallScore: 85,
    verbalScore: 88,
    nonVerbalScore: 82,
    status: "completed",
  },
  {
    id: "2",
    date: "Feb 3, 2026",
    duration: "08:45",
    overallScore: 78,
    verbalScore: 75,
    nonVerbalScore: 81,
    status: "completed",
  },
  {
    id: "3",
    date: "Feb 1, 2026",
    duration: "15:22",
    overallScore: 72,
    verbalScore: 70,
    nonVerbalScore: 74,
    status: "completed",
  },
];

export function SessionHistoryCard() {
  const navigate = useNavigate();

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Sessions</CardTitle>
        <Button variant="ghost" size="sm" onClick={() => navigate("/reports")}>
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockSessions.map((session) => (
          <div
            key={session.id}
            className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
            onClick={() => navigate(`/report/${session.id}`)}
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-sm font-medium">{session.date}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{session.duration}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Verbal</p>
                <p className="text-sm font-medium">{session.verbalScore}%</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Non-Verbal</p>
                <p className="text-sm font-medium">{session.nonVerbalScore}%</p>
              </div>
              <Badge className={getScoreColor(session.overallScore)}>
                {session.overallScore}%
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
