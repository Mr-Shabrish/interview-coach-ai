 import { Star, Quote } from "lucide-react";
 
 const Testimonials = () => {
   const testimonials = [
     {
       name: "Sarah Chen",
       role: "Software Engineer @ Google",
       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
       content: "InterviewLens helped me identify my nervous habits and improve my confidence. I landed my dream job at Google after just 2 weeks of practice!",
       rating: 5
     },
     {
       name: "Michael Rodriguez",
       role: "Product Manager @ Meta",
       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
       content: "The eye contact and posture feedback was a game-changer. I never realized how much my body language was affecting my interview performance.",
       rating: 5
     },
     {
       name: "Emily Thompson",
       role: "Data Scientist @ Amazon",
       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
       content: "The detailed analytics and personalized suggestions made all the difference. My verbal clarity score improved by 40% in just one week.",
       rating: 5
     }
   ];
 
   return (
     <section id="testimonials" className="py-24 bg-background">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
             Success Stories
           </span>
           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
             Loved by Job Seekers
           </h2>
           <p className="text-lg text-muted-foreground">
             Join thousands of candidates who've transformed their interview skills with InterviewLens.
           </p>
         </div>
 
         {/* Testimonials Grid */}
         <div className="grid md:grid-cols-3 gap-8">
           {testimonials.map((testimonial, index) => (
             <div 
               key={testimonial.name}
               className="relative bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
               style={{ animationDelay: `${index * 0.15}s` }}
             >
               {/* Quote Icon */}
               <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
 
               {/* Rating */}
               <div className="flex gap-1 mb-4">
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                 ))}
               </div>
 
               {/* Content */}
               <p className="text-foreground leading-relaxed mb-6">
                 "{testimonial.content}"
               </p>
 
               {/* Author */}
               <div className="flex items-center gap-4">
                 <img 
                   src={testimonial.image} 
                   alt={testimonial.name}
                   className="w-12 h-12 rounded-full object-cover"
                 />
                 <div>
                   <div className="font-semibold text-foreground">{testimonial.name}</div>
                   <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Testimonials;