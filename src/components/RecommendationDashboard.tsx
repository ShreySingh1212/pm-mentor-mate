import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Clock, Users, Star, Briefcase, GraduationCap } from "lucide-react";

const RecommendationDashboard = () => {
  const recommendations = [
    {
      id: 1,
      title: "Product Management Intern",
      company: "TechCorp India",
      location: "Bangalore, Karnataka",
      duration: "6 months",
      stipend: "₹25,000/month",
      match: 95,
      skills: ["Product Strategy", "Analytics", "User Research"],
      applicants: 45,
      rating: 4.8,
      description: "Work on product roadmap planning and user experience optimization for B2B products."
    },
    {
      id: 2,
      title: "Associate Product Manager Trainee",
      company: "StartupXYZ",
      location: "Mumbai, Maharashtra",
      duration: "4 months",
      stipend: "₹20,000/month",
      match: 88,
      skills: ["Agile", "Market Research", "Data Analysis"],
      applicants: 32,
      rating: 4.6,
      description: "Support product development lifecycle and collaborate with cross-functional teams."
    },
    {
      id: 3,
      title: "Digital Product Intern",
      company: "FinTech Solutions",
      location: "Hyderabad, Telangana",
      duration: "5 months",
      stipend: "₹22,000/month",
      match: 82,
      skills: ["Digital Strategy", "UX Design", "Analytics"],
      applicants: 28,
      rating: 4.7,
      description: "Focus on digital product innovation and customer experience enhancement."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your AI-Powered Recommendations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based on your profile, skills, and preferences, here are the top internship matches for you.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((recommendation) => (
            <Card key={recommendation.id} className="shadow-medium hover:shadow-large transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg line-clamp-2">{recommendation.title}</CardTitle>
                    <p className="text-sm font-medium text-primary">{recommendation.company}</p>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {recommendation.match}% Match
                  </Badge>
                </div>
                
                <Progress value={recommendation.match} className="w-full" />
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{recommendation.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{recommendation.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{recommendation.stipend}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{recommendation.applicants} applicants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>{recommendation.rating}/5.0</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {recommendation.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Required Skills:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {recommendation.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1">Apply Now</Button>
                  <Button variant="outline" className="flex-1">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Recommendations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationDashboard;