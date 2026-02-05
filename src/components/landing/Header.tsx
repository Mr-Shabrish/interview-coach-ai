 import { useState } from "react";
 import { Button } from "@/components/ui/button";
 import { Menu, X, Sparkles } from "lucide-react";
 
 const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
 
   return (
     <header className="fixed top-0 left-0 right-0 z-50 glass">
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-16 md:h-20">
           {/* Logo */}
           <a href="/" className="flex items-center gap-2">
             <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
               <Sparkles className="w-5 h-5 text-primary-foreground" />
             </div>
             <span className="font-display font-bold text-xl text-foreground">
               InterviewLens
             </span>
           </a>
 
           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-8">
             <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
               Features
             </a>
             <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
               How It Works
             </a>
             <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
               Testimonials
             </a>
           </nav>
 
           {/* Desktop CTA */}
           <div className="hidden md:flex items-center gap-4">
             <a href="#auth">
               <Button variant="ghost">Sign In</Button>
             </a>
             <a href="#auth">
               <Button variant="default">Get Started</Button>
             </a>
           </div>
 
           {/* Mobile Menu Button */}
           <button
             className="md:hidden p-2 text-foreground"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
           >
             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
         </div>
 
         {/* Mobile Menu */}
         {isMenuOpen && (
           <div className="md:hidden py-4 border-t border-border animate-fade-in">
             <nav className="flex flex-col gap-4">
               <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                 Features
               </a>
               <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                 How It Works
               </a>
               <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                 Testimonials
               </a>
               <div className="flex flex-col gap-2 pt-4 border-t border-border">
                 <a href="#auth">
                   <Button variant="ghost" className="w-full">Sign In</Button>
                 </a>
                 <a href="#auth">
                   <Button className="w-full">Get Started</Button>
                 </a>
               </div>
             </nav>
           </div>
         )}
       </div>
     </header>
   );
 };
 
 export default Header;