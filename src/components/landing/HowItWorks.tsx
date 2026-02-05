 import { Video, Cpu, FileCheck, ArrowRight } from "lucide-react";
 
 const HowItWorks = () => {
   const steps = [
     {
       number: "01",
       icon: Video,
       title: "Record Your Practice",
       description: "Answer interview questions using your webcam and microphone. Practice in a realistic mock interview environment.",
       color: "primary"
     },
     {
       number: "02",
       icon: Cpu,
       title: "AI Analysis",
       description: "Our advanced AI processes your verbal responses and body language in real-time, identifying patterns and areas for improvement.",
       color: "accent"
     },
     {
       number: "03",
       icon: FileCheck,
       title: "Get Your Report",
       description: "Receive a comprehensive interview readiness report with scores, insights, and actionable suggestions to improve.",
       color: "success"
     }
   ];
 
   return (
     <section id="how-it-works" className="py-24 bg-secondary/30">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
             Simple Process
           </span>
           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
             How It Works
           </h2>
           <p className="text-lg text-muted-foreground">
             Get interview-ready in three simple steps with our AI-powered coaching platform.
           </p>
         </div>
 
         {/* Steps */}
         <div className="relative">
           {/* Connection Line - Desktop */}
           <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
           
           <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
             {steps.map((step, index) => (
               <div 
                 key={step.number}
                 className="relative animate-fade-in-up"
                 style={{ animationDelay: `${index * 0.2}s` }}
               >
                 {/* Arrow between steps - Mobile/Tablet */}
                 {index < steps.length - 1 && (
                   <div className="hidden md:flex lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                     <ArrowRight className="w-6 h-6 text-muted-foreground" />
                   </div>
                 )}
 
                 <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 h-full">
                   {/* Step Number & Icon */}
                   <div className="flex items-center justify-between mb-6">
                     <span className="font-display text-5xl font-bold text-muted-foreground/20">
                       {step.number}
                     </span>
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                       step.color === 'primary' ? 'gradient-primary' : 
                       step.color === 'accent' ? 'gradient-accent' : 
                       'bg-success'
                     }`}>
                       <step.icon className="w-7 h-7 text-primary-foreground" />
                     </div>
                   </div>
 
                   {/* Content */}
                   <h3 className="font-display text-xl font-bold text-foreground mb-3">
                     {step.title}
                   </h3>
                   <p className="text-muted-foreground leading-relaxed">
                     {step.description}
                   </p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default HowItWorks;