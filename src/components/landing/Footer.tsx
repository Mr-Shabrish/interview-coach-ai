 import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react";
 
 const Footer = () => {
   return (
     <footer className="bg-card border-t border-border">
       <div className="container mx-auto px-4 py-16">
         <div className="grid md:grid-cols-4 gap-12">
           {/* Brand */}
           <div className="md:col-span-1">
             <a href="/" className="flex items-center gap-2 mb-4">
               <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                 <Sparkles className="w-5 h-5 text-primary-foreground" />
               </div>
               <span className="font-display font-bold text-xl text-foreground">
                 InterviewLens
               </span>
             </a>
             <p className="text-muted-foreground text-sm leading-relaxed mb-6">
               AI-powered interview coaching to help you land your dream job with confidence.
             </p>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                 <Twitter className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                 <Linkedin className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                 <Github className="w-5 h-5" />
               </a>
             </div>
           </div>
 
           {/* Product */}
           <div>
             <h4 className="font-display font-semibold text-foreground mb-4">Product</h4>
             <ul className="space-y-3">
               <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
               <li><a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a></li>
               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
             </ul>
           </div>
 
           {/* Company */}
           <div>
             <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
             <ul className="space-y-3">
               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
             </ul>
           </div>
 
           {/* Support */}
           <div>
             <h4 className="font-display font-semibold text-foreground mb-4">Support</h4>
             <ul className="space-y-3">
               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
               <li>
                 <a href="mailto:support@interviewlens.ai" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                   <Mail className="w-4 h-4" />
                   Contact Us
                 </a>
               </li>
             </ul>
           </div>
         </div>
 
         {/* Bottom Bar */}
         <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-sm text-muted-foreground">
             © 2025 InterviewLens AI. All rights reserved.
           </p>
           <p className="text-sm text-muted-foreground">
             Made with ❤️ for ambitious job seekers
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;