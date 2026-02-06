import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";

const performanceData = [
  { date: "Jan 15", verbal: 65, nonVerbal: 60, overall: 62 },
  { date: "Jan 22", verbal: 70, nonVerbal: 68, overall: 69 },
  { date: "Jan 29", verbal: 72, nonVerbal: 70, overall: 71 },
  { date: "Feb 1", verbal: 70, nonVerbal: 74, overall: 72 },
  { date: "Feb 3", verbal: 75, nonVerbal: 81, overall: 78 },
  { date: "Feb 5", verbal: 88, nonVerbal: 82, overall: 85 },
];

const chartConfig = {
  verbal: {
    label: "Verbal Score",
    color: "hsl(245, 58%, 51%)",
  },
  nonVerbal: {
    label: "Non-Verbal Score",
    color: "hsl(172, 66%, 50%)",
  },
  overall: {
    label: "Overall Score",
    color: "hsl(280, 70%, 50%)",
  },
};

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Performance Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="date" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              className="fill-muted-foreground"
            />
            <YAxis 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
              className="fill-muted-foreground"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="verbal"
              stroke="hsl(245, 58%, 51%)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="nonVerbal"
              stroke="hsl(172, 66%, 50%)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="overall"
              stroke="hsl(280, 70%, 50%)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">Verbal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-accent" />
            <span className="text-sm text-muted-foreground">Non-Verbal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "hsl(280, 70%, 50%)" }} />
            <span className="text-sm text-muted-foreground">Overall</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
