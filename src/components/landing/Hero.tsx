 import { Button } from "@/components/ui/button";
 import { ArrowRight, Play, Mic, Camera, BarChart3 } from "lucide-react";
 import heroImage from "@/assets/hero-illustration.jpg";
 
 const Hero = () => {
   return (
     <section className="relative min-h-screen gradient-hero overflow-hidden">
       {/* Background decorations */}
       <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
         <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
       </div>
 
       <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-160px)]">
           {/* Left Content */}
           <div className="space-y-8 animate-fade-in-up">
             {/* Badge */}
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-sm">
               <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
               <span className="text-muted-foreground">AI-Powered Interview Coach</span>
             </div>
 
             {/* Headline */}
             <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
               <span className="text-primary-foreground">Master Your Interview with </span>
               <span className="text-gradient">AI Intelligence</span>
             </h1>
 
             {/* Subheadline */}
             <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
               Analyze your verbal and non-verbal communication in real-time. Get personalized feedback to boost your confidence and land your dream job.
             </p>
 
             {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-4">
               <a href="#auth">
                 <Button variant="hero" size="xl" className="w-full sm:w-auto">
                   Start Free Practice
                   <ArrowRight className="w-5 h-5" />
                 </Button>
               </a>
               <Button variant="heroOutline" size="xl" className="group">
                 <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 Watch Demo
               </Button>
             </div>
 
             {/* Stats */}
             <div className="flex flex-wrap gap-8 pt-8 border-t border-border/20">
               <div>
                 <div className="font-display text-3xl font-bold text-primary-foreground">50K+</div>
                 <div className="text-sm text-muted-foreground">Interviews Analyzed</div>
               </div>
               <div>
                 <div className="font-display text-3xl font-bold text-primary-foreground">94%</div>
                 <div className="text-sm text-muted-foreground">Success Rate</div>
               </div>
               <div>
                 <div className="font-display text-3xl font-bold text-primary-foreground">4.9★</div>
                 <div className="text-sm text-muted-foreground">User Rating</div>
               </div>
             </div>
           </div>
 
           {/* Right Content - Hero Image */}
           <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20">
               <img 
                 src={heroImage} 
                 alt="AI Interview Analysis Dashboard" 
                 className="w-full h-auto"
               />
               
               {/* Floating Cards */}
               <div className="absolute top-4 left-4 glass-dark rounded-xl p-3 animate-float">
                 <div className="flex items-center gap-2">
                   <Mic className="w-4 h-4 text-accent" />
                   <span className="text-sm text-primary-foreground">Speech Clarity: 92%</span>
                 </div>
               </div>
               
               <div className="absolute top-4 right-4 glass-dark rounded-xl p-3 animate-float" style={{ animationDelay: "1s" }}>
                 <div className="flex items-center gap-2">
                   <Camera className="w-4 h-4 text-primary" />
                   <span className="text-sm text-primary-foreground">Eye Contact: 87%</span>
                 </div>
               </div>
               
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-dark rounded-xl p-3 animate-float" style={{ animationDelay: "2s" }}>
                 <div className="flex items-center gap-2">
                   <BarChart3 className="w-4 h-4 text-success" />
                   <span className="text-sm text-primary-foreground">Overall Score: 89/100</span>
                 </div>
               </div>
             </div>
 
             {/* Glow effect */}
             <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-2xl -z-10" />
           </div>
         </div>
       </div>
 
       {/* Bottom gradient fade */}
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
     </section>
   );
 };
 
 export default Hero;