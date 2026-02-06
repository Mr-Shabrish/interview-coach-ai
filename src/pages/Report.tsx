import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Download,
  Share2,
  ArrowLeft,
  Mic,
  Eye,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
  Volume2,
  Gauge,
  Smile,
  Hand,
  User,
  Target,
  Lightbulb
} from "lucide-react";

// Mock report data
const reportData = {
  id: "1",
  date: "February 5, 2026",
  duration: "12:34",
  overallScore: 85,
  verbalScore: 88,
  nonVerbalScore: 82,
  verbal: {
    clarity: 90,
    confidence: 85,
    tone: 88,
    pace: 82,
    volume: 86,
    fillerWords: 12,
    wpm: 145,
  },
  nonVerbal: {
    eyeContact: 85,
    posture: 80,
    facialExpression: 78,
    gestures: 82,
    headMovement: 84,
  },
  transcript: `
Interviewer: Tell me about yourself and your background.

You: Thank you for having me today. I'm a software engineer with over 5 years of experience in building web applications. I graduated from MIT with a degree in Computer Science and have since worked at companies like Google and a couple of startups.

My passion lies in creating user-centric products that solve real problems. In my current role, I've led the development of a customer-facing dashboard that improved user engagement by 40%.

I'm excited about this opportunity because I believe my technical skills and leadership experience align well with what you're looking for. I'm particularly drawn to your company's mission of making technology accessible to everyone.

Interviewer: Why are you interested in this position?

You: I've been following your company's growth for the past two years, and I'm genuinely impressed by the innovative products you've been shipping. The role combines my two areas of expertise - frontend development and team leadership.

I believe I can make a significant impact by bringing my experience in building scalable applications and mentoring junior developers. Plus, the opportunity to work on cutting-edge technology in the AI space is incredibly exciting to me.
  `,
  strengths: [
    "Excellent speech clarity and articulation",
    "Good eye contact maintained throughout",
    "Professional tone and confident delivery",
    "Well-structured responses with clear examples",
  ],
  improvements: [
    "Reduce filler words (12 detected: 'um', 'like')",
    "Slightly improve posture - occasional slouching noted",
    "Add more hand gestures for emphasis",
    "Consider slowing down during complex explanations",
  ],
  suggestions: [
    {
      title: "Practice the STAR method",
      description: "Structure your answers using Situation, Task, Action, Result for behavioral questions.",
    },
    {
      title: "Record yourself speaking",
      description: "Review recordings to identify and reduce filler words like 'um' and 'like'.",
    },
    {
      title: "Posture exercises",
      description: "Practice sitting with your back straight and shoulders relaxed before interviews.",
    },
    {
      title: "Mirror practice",
      description: "Practice in front of a mirror to be more aware of your facial expressions and gestures.",
    },
  ],
};

interface ScoreCardProps {
  title: string;
  score: number;
  icon: React.ReactNode;
  color?: string;
}

function ScoreCard({ title, score, icon, color = "primary" }: ScoreCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
      <div className={`h-10 w-10 rounded-lg bg-${color}/10 flex items-center justify-center text-${color}`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-center gap-2">
          <Progress value={score} className="h-2 flex-1" />
          <span className="text-sm font-semibold w-10">{score}%</span>
        </div>
      </div>
    </div>
  );
}

export default function Report() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 80) return "bg-success/10 text-success border-success/30";
    if (score >= 60) return "bg-warning/10 text-warning border-warning/30";
    return "bg-destructive/10 text-destructive border-destructive/30";
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold font-display">Interview Report</h1>
              <div className="flex items-center gap-3 mt-1 text-muted-foreground">
                <span>{reportData.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {reportData.duration}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="hero" className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Overall Scores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="relative inline-flex items-center justify-center">
                <svg className="h-32 w-32 -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    strokeWidth="12"
                    fill="none"
                    className="stroke-muted"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    className="stroke-primary"
                    style={{
                      strokeDasharray: `${(reportData.overallScore / 100) * 352} 352`,
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-4xl font-bold ${getScoreColor(reportData.overallScore)}`}>
                    {reportData.overallScore}%
                  </span>
                  <span className="text-xs text-muted-foreground">Overall</span>
                </div>
              </div>
              <p className="mt-4 font-medium">Overall Score</p>
              <p className="text-sm text-muted-foreground">Great performance!</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="h-20 w-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                <Mic className="h-10 w-10 text-primary-foreground" />
              </div>
              <p className={`text-4xl font-bold ${getScoreColor(reportData.verbalScore)}`}>
                {reportData.verbalScore}%
              </p>
              <p className="mt-2 font-medium">Verbal Score</p>
              <p className="text-sm text-muted-foreground">Speech & communication</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="h-20 w-20 mx-auto rounded-full gradient-accent flex items-center justify-center mb-4">
                <Eye className="h-10 w-10 text-accent-foreground" />
              </div>
              <p className={`text-4xl font-bold ${getScoreColor(reportData.nonVerbalScore)}`}>
                {reportData.nonVerbalScore}%
              </p>
              <p className="mt-2 font-medium">Non-Verbal Score</p>
              <p className="text-sm text-muted-foreground">Body language & expression</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Tabs */}
        <Tabs defaultValue="verbal" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="verbal" className="gap-2">
              <Mic className="h-4 w-4" />
              Verbal
            </TabsTrigger>
            <TabsTrigger value="nonverbal" className="gap-2">
              <Eye className="h-4 w-4" />
              Non-Verbal
            </TabsTrigger>
            <TabsTrigger value="transcript" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Transcript
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="gap-2">
              <Lightbulb className="h-4 w-4" />
              Suggestions
            </TabsTrigger>
          </TabsList>

          {/* Verbal Analysis */}
          <TabsContent value="verbal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Verbal Metrics</CardTitle>
                  <CardDescription>Detailed breakdown of your speech analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ScoreCard title="Speech Clarity" score={reportData.verbal.clarity} icon={<Volume2 className="h-5 w-5" />} />
                  <ScoreCard title="Confidence Level" score={reportData.verbal.confidence} icon={<TrendingUp className="h-5 w-5" />} />
                  <ScoreCard title="Tone Quality" score={reportData.verbal.tone} icon={<Mic className="h-5 w-5" />} />
                  <ScoreCard title="Speaking Pace" score={reportData.verbal.pace} icon={<Gauge className="h-5 w-5" />} />
                  <ScoreCard title="Volume Consistency" score={reportData.verbal.volume} icon={<Volume2 className="h-5 w-5" />} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Speech Statistics</CardTitle>
                  <CardDescription>Key metrics from your interview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <p className="text-3xl font-bold text-primary">{reportData.verbal.wpm}</p>
                      <p className="text-sm text-muted-foreground">Words per minute</p>
                      <Badge variant="outline" className="mt-2">Optimal: 120-150</Badge>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <p className="text-3xl font-bold text-warning">{reportData.verbal.fillerWords}</p>
                      <p className="text-sm text-muted-foreground">Filler words detected</p>
                      <Badge variant="outline" className="mt-2">Target: &lt;5</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Detected Filler Words</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">um (5x)</Badge>
                      <Badge variant="secondary">like (4x)</Badge>
                      <Badge variant="secondary">you know (2x)</Badge>
                      <Badge variant="secondary">uh (1x)</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Non-Verbal Analysis */}
          <TabsContent value="nonverbal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Non-Verbal Metrics</CardTitle>
                  <CardDescription>Body language and visual communication analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ScoreCard title="Eye Contact" score={reportData.nonVerbal.eyeContact} icon={<Eye className="h-5 w-5" />} />
                  <ScoreCard title="Posture" score={reportData.nonVerbal.posture} icon={<User className="h-5 w-5" />} />
                  <ScoreCard title="Facial Expression" score={reportData.nonVerbal.facialExpression} icon={<Smile className="h-5 w-5" />} />
                  <ScoreCard title="Hand Gestures" score={reportData.nonVerbal.gestures} icon={<Hand className="h-5 w-5" />} />
                  <ScoreCard title="Head Movement" score={reportData.nonVerbal.headMovement} icon={<Target className="h-5 w-5" />} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expression Analysis</CardTitle>
                  <CardDescription>Detected emotions during the interview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Confident</span>
                      <div className="flex items-center gap-2 flex-1 mx-4">
                        <Progress value={65} className="h-2" />
                      </div>
                      <span className="text-sm font-medium w-10">65%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Engaged</span>
                      <div className="flex items-center gap-2 flex-1 mx-4">
                        <Progress value={80} className="h-2" />
                      </div>
                      <span className="text-sm font-medium w-10">80%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Calm</span>
                      <div className="flex items-center gap-2 flex-1 mx-4">
                        <Progress value={72} className="h-2" />
                      </div>
                      <span className="text-sm font-medium w-10">72%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Nervous</span>
                      <div className="flex items-center gap-2 flex-1 mx-4">
                        <Progress value={25} className="h-2" />
                      </div>
                      <span className="text-sm font-medium w-10">25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Transcript */}
          <TabsContent value="transcript">
            <Card>
              <CardHeader>
                <CardTitle>Interview Transcript</CardTitle>
                <CardDescription>Complete transcript of your interview session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-foreground bg-muted/50 p-6 rounded-lg">
                    {reportData.transcript}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Suggestions */}
          <TabsContent value="suggestions">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    Strengths
                  </CardTitle>
                  <CardDescription>What you did well</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {reportData.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-success/10 text-success flex items-center justify-center text-sm shrink-0">
                          ✓
                        </span>
                        <span className="text-sm">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    Areas to Improve
                  </CardTitle>
                  <CardDescription>Focus on these for better results</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {reportData.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-warning/10 text-warning flex items-center justify-center text-sm shrink-0">
                          !
                        </span>
                        <span className="text-sm">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    AI-Powered Suggestions
                  </CardTitle>
                  <CardDescription>Personalized recommendations to improve your performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {reportData.suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors"
                      >
                        <h4 className="font-medium flex items-center gap-2">
                          <span className="h-6 w-6 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-sm">
                            {index + 1}
                          </span>
                          {suggestion.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-2">{suggestion.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="outline" size="lg" onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
          <Button variant="hero" size="lg" onClick={() => navigate("/interview")}>
            Practice Again
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
