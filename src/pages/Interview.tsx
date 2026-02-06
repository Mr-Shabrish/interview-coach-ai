import { useState, useRef, useEffect } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Play, 
  Square, 
  RotateCcw,
  Clock,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Camera
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const interviewQuestions = [
  "Tell me about yourself and your background.",
  "Why are you interested in this position?",
  "What are your greatest strengths and weaknesses?",
  "Describe a challenging situation you've faced and how you handled it.",
  "Where do you see yourself in 5 years?",
];

export default function Interview() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(0);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, isPaused]);

  // Start camera
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setPermissionGranted(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      setPermissionGranted(false);
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  // Toggle video
  const toggleVideo = () => {
    if (stream) {
      stream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setVideoEnabled(!videoEnabled);
    }
  };

  // Toggle audio
  const toggleAudio = () => {
    if (stream) {
      stream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setAudioEnabled(!audioEnabled);
    }
  };

  // Start recording
  const startRecording = () => {
    setIsRecording(true);
    setSessionStarted(true);
    setTimer(0);
  };

  // Stop recording and go to report
  const stopRecording = () => {
    setIsRecording(false);
    stopCamera();
    // Navigate to report page with mock data
    navigate("/report/new");
  };

  // Next question
  const nextQuestion = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  // Format timer
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Progress percentage
  const progress = ((currentQuestion + 1) / interviewQuestions.length) * 100;

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-display">Mock Interview</h1>
            <p className="text-muted-foreground mt-1">
              Practice your interview skills with AI-powered feedback
            </p>
          </div>
          {sessionStarted && (
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-lg px-4 py-2 gap-2">
                <Clock className="h-4 w-4" />
                {formatTime(timer)}
              </Badge>
              <Badge className="gradient-primary text-primary-foreground px-4 py-2">
                Question {currentQuestion + 1} of {interviewQuestions.length}
              </Badge>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {sessionStarted && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Interview Progress</span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Preview - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-muted">
                {permissionGranted ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Camera className="h-10 w-10 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="font-medium">Camera access required</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Click "Enable Camera" to start your interview
                      </p>
                    </div>
                    <Button onClick={startCamera} variant="hero" className="gap-2">
                      <Video className="h-4 w-4" />
                      Enable Camera
                    </Button>
                  </div>
                )}

                {/* Video overlay controls */}
                {permissionGranted && (
                  <>
                    {/* Recording indicator */}
                    {isRecording && (
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-destructive animate-pulse" />
                        <span className="text-sm font-medium text-destructive-foreground bg-destructive/90 px-2 py-1 rounded">
                          Recording
                        </span>
                      </div>
                    )}

                    {/* Timer overlay */}
                    {sessionStarted && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="text-lg px-3 py-1.5 bg-background/80 backdrop-blur-sm">
                          {formatTime(timer)}
                        </Badge>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Controls */}
              <CardContent className="p-4">
                <div className="flex items-center justify-center gap-4">
                  {/* Video toggle */}
                  <Button
                    variant={videoEnabled ? "secondary" : "destructive"}
                    size="icon"
                    onClick={toggleVideo}
                    disabled={!permissionGranted}
                    className="h-12 w-12 rounded-full"
                  >
                    {videoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                  </Button>

                  {/* Main control button */}
                  {!isRecording ? (
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={startRecording}
                      disabled={!permissionGranted}
                      className="h-14 px-8 gap-2"
                    >
                      <Play className="h-5 w-5" />
                      Start Interview
                    </Button>
                  ) : (
                    <Button
                      variant="destructive"
                      size="lg"
                      onClick={stopRecording}
                      className="h-14 px-8 gap-2"
                    >
                      <Square className="h-5 w-5" />
                      End Interview
                    </Button>
                  )}

                  {/* Audio toggle */}
                  <Button
                    variant={audioEnabled ? "secondary" : "destructive"}
                    size="icon"
                    onClick={toggleAudio}
                    disabled={!permissionGranted}
                    className="h-12 w-12 rounded-full"
                  >
                    {audioEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Question Panel */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Current Question
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-lg font-medium leading-relaxed">
                    {interviewQuestions[currentQuestion]}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={nextQuestion}
                  disabled={!isRecording || currentQuestion >= interviewQuestions.length - 1}
                >
                  Next Question
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  Quick Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      1
                    </span>
                    Maintain eye contact with the camera
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      2
                    </span>
                    Speak clearly and at a moderate pace
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      3
                    </span>
                    Sit up straight and use natural gestures
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      4
                    </span>
                    Take a breath before answering
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* All Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  All Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {interviewQuestions.map((question, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-sm transition-colors ${
                      index === currentQuestion
                        ? "bg-primary/10 border border-primary/30 font-medium"
                        : index < currentQuestion
                        ? "bg-muted/50 text-muted-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span className="font-medium mr-2">Q{index + 1}:</span>
                    {question.substring(0, 40)}...
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
