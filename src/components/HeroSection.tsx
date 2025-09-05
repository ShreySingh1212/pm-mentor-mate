import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-internship.jpg";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                AI-Powered Internship
                <span className="block">Recommendations</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-md">
                Discover the perfect PM internship opportunities tailored to your skills, 
                interests, and career aspirations using advanced AI matching.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-primary-foreground/80">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-primary-foreground/80">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-6 shadow-large bg-gradient-card">
              <img 
                src={heroImage} 
                alt="Students collaborating on internship opportunities" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Smart Matching</h3>
                    <p className="text-sm text-muted-foreground">AI analyzes your profile for perfect matches</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Personalized Recommendations</h3>
                    <p className="text-sm text-muted-foreground">Tailored opportunities based on your goals</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Career Growth</h3>
                    <p className="text-sm text-muted-foreground">Track progress and enhance your profile</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;