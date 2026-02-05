 import { useState } from "react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 import { Eye, EyeOff, Mail, Lock, User, GraduationCap, Briefcase } from "lucide-react";
 
 const AuthSection = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const [selectedRole, setSelectedRole] = useState<"student" | "job-seeker">("student");
 
   return (
     <section id="auth" className="py-24 bg-secondary/30">
       <div className="container mx-auto px-4">
         <div className="max-w-md mx-auto">
           {/* Section Header */}
           <div className="text-center mb-8">
             <h2 className="font-display text-3xl font-bold text-foreground mb-2">
               Get Started Today
             </h2>
             <p className="text-muted-foreground">
               Create your account or sign in to continue
             </p>
           </div>
 
           {/* Auth Card */}
           <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
             <Tabs defaultValue="signup" className="w-full">
               <TabsList className="grid w-full grid-cols-2 mb-8">
                 <TabsTrigger value="signup" className="font-semibold">Sign Up</TabsTrigger>
                 <TabsTrigger value="signin" className="font-semibold">Sign In</TabsTrigger>
               </TabsList>
 
               {/* Sign Up Form */}
               <TabsContent value="signup" className="space-y-6">
                 {/* Role Selection */}
                 <div className="space-y-3">
                   <Label className="text-sm font-medium">I am a</Label>
                   <div className="grid grid-cols-2 gap-3">
                     <button
                       type="button"
                       onClick={() => setSelectedRole("student")}
                       className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                         selectedRole === "student"
                           ? "border-primary bg-primary/5"
                           : "border-border hover:border-primary/30"
                       }`}
                     >
                       <GraduationCap className={`w-5 h-5 ${selectedRole === "student" ? "text-primary" : "text-muted-foreground"}`} />
                       <span className={`font-medium ${selectedRole === "student" ? "text-primary" : "text-foreground"}`}>
                         Student
                       </span>
                     </button>
                     <button
                       type="button"
                       onClick={() => setSelectedRole("job-seeker")}
                       className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                         selectedRole === "job-seeker"
                           ? "border-primary bg-primary/5"
                           : "border-border hover:border-primary/30"
                       }`}
                     >
                       <Briefcase className={`w-5 h-5 ${selectedRole === "job-seeker" ? "text-primary" : "text-muted-foreground"}`} />
                       <span className={`font-medium ${selectedRole === "job-seeker" ? "text-primary" : "text-foreground"}`}>
                         Job Seeker
                       </span>
                     </button>
                   </div>
                 </div>
 
                 {/* Full Name */}
                 <div className="space-y-2">
                   <Label htmlFor="fullName">Full Name</Label>
                   <div className="relative">
                     <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     <Input
                       id="fullName"
                       type="text"
                       placeholder="John Doe"
                       className="pl-10 h-12"
                     />
                   </div>
                 </div>
 
                 {/* Email */}
                 <div className="space-y-2">
                   <Label htmlFor="signupEmail">Email</Label>
                   <div className="relative">
                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     <Input
                       id="signupEmail"
                       type="email"
                       placeholder="you@example.com"
                       className="pl-10 h-12"
                     />
                   </div>
                 </div>
 
                 {/* Password */}
                 <div className="space-y-2">
                   <Label htmlFor="signupPassword">Password</Label>
                   <div className="relative">
                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     <Input
                       id="signupPassword"
                       type={showPassword ? "text" : "password"}
                       placeholder="••••••••"
                       className="pl-10 pr-10 h-12"
                     />
                     <button
                       type="button"
                       onClick={() => setShowPassword(!showPassword)}
                       className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                     >
                       {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                     </button>
                   </div>
                 </div>
 
                 {/* Confirm Password */}
                 <div className="space-y-2">
                   <Label htmlFor="confirmPassword">Confirm Password</Label>
                   <div className="relative">
                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     <Input
                       id="confirmPassword"
                       type={showConfirmPassword ? "text" : "password"}
                       placeholder="••••••••"
                       className="pl-10 pr-10 h-12"
                     />
                     <button
                       type="button"
                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                       className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                     >
                       {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                     </button>
                   </div>
                 </div>
 
                 <Button className="w-full" size="lg">
                   Create Account
                 </Button>
 
                 {/* Divider */}
                 <div className="relative">
                   <div className="absolute inset-0 flex items-center">
                     <span className="w-full border-t border-border" />
                   </div>
                   <div className="relative flex justify-center text-xs uppercase">
                     <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                   </div>
                 </div>
 
                 {/* Google Sign In */}
                 <Button variant="outline" className="w-full h-12">
                   <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                     <path
                       fill="currentColor"
                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                     />
                     <path
                       fill="currentColor"
                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                     />
                     <path
                       fill="currentColor"
                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                     />
                     <path
                       fill="currentColor"
                       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                     />
                   </svg>
                   Continue with Google
                 </Button>
               </TabsContent>
 
               {/* Sign In Form */}
               <TabsContent value="signin" className="space-y-6">
                 {/* Email */}
                 <div className="space-y-2">
                   <Label htmlFor="signinEmail">Email</Label>
                   <div className="relative">
                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     <Input
                       id="signinEmail"
                       type="email"
                       placeholder="you@example.com"
                       className="pl-10 h-12"
                     />
                   </div>
                 </div>
 
                 {/* Password */}
                 <div className="space-y-2">
                   <div className="flex items-center justify-between">
                     <Label htmlFor="signinPassword">Password</Label>
                     <a href="#" className="text-sm text-primary hover:underline">
                       Forgot password?
                     </a>
                   </div>
                   <div className="relative">
                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     <Input
                       id="signinPassword"
                       type={showPassword ? "text" : "password"}
                       placeholder="••••••••"
                       className="pl-10 pr-10 h-12"
                     />
                     <button
                       type="button"
                       onClick={() => setShowPassword(!showPassword)}
                       className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                     >
                       {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                     </button>
                   </div>
                 </div>
 
                 <Button className="w-full" size="lg">
                   Sign In
                 </Button>
 
                 {/* Divider */}
                 <div className="relative">
                   <div className="absolute inset-0 flex items-center">
                     <span className="w-full border-t border-border" />
                   </div>
                   <div className="relative flex justify-center text-xs uppercase">
                     <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                   </div>
                 </div>
 
                 {/* Google Sign In */}
                 <Button variant="outline" className="w-full h-12">
                   <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                     <path
                       fill="currentColor"
                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                     />
                     <path
                       fill="currentColor"
                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                     />
                     <path
                       fill="currentColor"
                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                     />
                     <path
                       fill="currentColor"
                       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                     />
                   </svg>
                   Continue with Google
                 </Button>
               </TabsContent>
             </Tabs>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default AuthSection;