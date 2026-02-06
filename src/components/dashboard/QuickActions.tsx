import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, FileText, BookOpen, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const actions = [
  {
    title: "Start Interview",
    description: "Begin a new mock interview session",
    icon: Video,
    path: "/interview",
    variant: "hero" as const,
  },
  {
    title: "View Reports",
    description: "Check your past performance",
    icon: FileText,
    path: "/reports",
    variant: "secondary" as const,
  },
  {
    title: "Practice Tips",
    description: "Learn interview techniques",
    icon: BookOpen,
    path: "/tips",
    variant: "secondary" as const,
  },
  {
    title: "Set Goals",
    description: "Define your target scores",
    icon: Target,
    path: "/goals",
    variant: "secondary" as const,
  },
];

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Button
            key={action.title}
            variant={action.variant}
            className="h-auto flex-col items-start gap-1 p-4"
            onClick={() => navigate(action.path)}
          >
            <action.icon className="h-5 w-5 mb-1" />
            <span className="font-semibold">{action.title}</span>
            <span className="text-xs opacity-80 font-normal">{action.description}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
