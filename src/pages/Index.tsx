import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import RecommendationDashboard from "@/components/RecommendationDashboard";
import ProfileSection from "@/components/ProfileSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <RecommendationDashboard />
      <ProfileSection />
    </div>
  );
};

export default Index;
