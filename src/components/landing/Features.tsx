 import { Mic, Camera, Brain, FileText, TrendingUp, Eye, Smile, Activity, Volume2 } from "lucide-react";
 
 const Features = () => {
   const verbalFeatures = [
     {
       icon: Mic,
       title: "Speech Clarity",
       description: "Real-time analysis of pronunciation, articulation, and overall speech quality."
     },
     {
       icon: Brain,
       title: "Confidence Detection",
       description: "AI measures confidence levels through voice patterns and speaking style."
     },
     {
       icon: Volume2,
       title: "Filler Word Tracking",
       description: "Detects and counts 'um', 'uh', 'like' and other filler words automatically."
     },
     {
       icon: Activity,
       title: "Speaking Pace",
       description: "Monitors words per minute and provides optimal speed recommendations."
     },
   ];
 
   const nonVerbalFeatures = [
     {
       icon: Eye,
       title: "Eye Contact Tracking",
       description: "Measures how well you maintain eye contact with the camera."
     },
     {
       icon: Camera,
       title: "Posture Analysis",
       description: "Detects slouching, leaning, and provides posture improvement tips."
     },
     {
       icon: Smile,
       title: "Facial Expressions",
       description: "Identifies nervousness, confidence, and engagement through expressions."
     },
     {
       icon: TrendingUp,
       title: "Gesture Recognition",
       description: "Analyzes hand movements and body language for professional delivery."
     },
   ];
 
   return (
     <section id="features" className="py-24 bg-background">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
             Comprehensive Analysis
           </span>
           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
             Complete Interview Intelligence
           </h2>
           <p className="text-lg text-muted-foreground">
             Our AI analyzes every aspect of your interview performance to help you communicate with confidence.
           </p>
         </div>
 
         {/* Verbal Features */}
         <div className="mb-20">
           <div className="flex items-center gap-3 mb-8">
             <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
               <Mic className="w-6 h-6 text-primary-foreground" />
             </div>
             <div>
               <h3 className="font-display text-2xl font-bold text-foreground">Verbal Communication</h3>
               <p className="text-muted-foreground">What you say and how you say it</p>
             </div>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {verbalFeatures.map((feature, index) => (
               <div 
                 key={feature.title}
                 className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                   <feature.icon className="w-6 h-6 text-primary" />
                 </div>
                 <h4 className="font-display font-semibold text-lg text-foreground mb-2">{feature.title}</h4>
                 <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
               </div>
             ))}
           </div>
         </div>
 
         {/* Non-Verbal Features */}
         <div>
           <div className="flex items-center gap-3 mb-8">
             <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
               <Camera className="w-6 h-6 text-accent-foreground" />
             </div>
             <div>
               <h3 className="font-display text-2xl font-bold text-foreground">Non-Verbal Communication</h3>
               <p className="text-muted-foreground">Body language and visual presence</p>
             </div>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {nonVerbalFeatures.map((feature, index) => (
               <div 
                 key={feature.title}
                 className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                   <feature.icon className="w-6 h-6 text-accent" />
                 </div>
                 <h4 className="font-display font-semibold text-lg text-foreground mb-2">{feature.title}</h4>
                 <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Features;