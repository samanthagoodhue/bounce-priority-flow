import { Button } from "@/components/ui/button";
import { Calendar, Users, Sparkles, Timer } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="People enjoying a vibrant social event" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-primary/30 float">
        <Sparkles size={32} />
      </div>
      <div className="absolute top-40 right-20 text-accent/30 float" style={{ animationDelay: "1s" }}>
        <Calendar size={28} />
      </div>
      <div className="absolute bottom-40 left-20 text-primary/30 float" style={{ animationDelay: "2s" }}>
        <Users size={30} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="bounce-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Let's Bounce
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto">
            Fill spots at real-life events—tennis, a spare gig ticket, an empty seat at dinner.
          </p>
          <p className="text-lg mb-12 text-muted-foreground/80 max-w-2xl mx-auto">
            Set up an event, pick who to invite from your contacts, and invites go out one by one with a response window until every spot is filled. We handle the queue so the catch up actually happens.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
              Set up an event
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2">
              Show Me How
            </Button>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:scale-105 transition-transform duration-300">
            <div className="p-2 rounded-lg bg-primary/20">
              <Users className="text-primary" size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground">Pick who to invite</h3>
              <p className="text-sm text-muted-foreground">Choose from your contacts; invites go out in order</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:scale-105 transition-transform duration-300">
            <div className="p-2 rounded-lg bg-accent/20">
              <Timer className="text-accent" size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground">Response window</h3>
              <p className="text-sm text-muted-foreground">If someone can't make it, we move to the next person</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:scale-105 transition-transform duration-300">
            <div className="p-2 rounded-lg bg-primary/20">
              <Sparkles className="text-primary" size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground">Every spot filled</h3>
              <p className="text-sm text-muted-foreground">The catch up actually happens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;