import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-primary/20 float">
        <Sparkles size={40} />
      </div>
      <div className="absolute bottom-10 right-10 text-accent/20 float" style={{ animationDelay: "1.5s" }}>
        <Sparkles size={32} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Ready to fill those spots?
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Stop copy-pasting names into group chats and manually tracking who's keen. Let's Bounce handles the invites, the queue, and the backfill—so the catch up actually happens.
        </p>
        <p className="text-lg text-muted-foreground/80 mb-12 max-w-xl mx-auto">
          Whether it's the weekly game, a regular catch up, or a last-minute spare ticket, we'll get it sorted.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="px-8 py-6 text-lg group">
            Set up an event
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2">
            Show me how it works
          </Button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground/60">
            Coming soon • Fill spots at real-life events • Less friction, more catch ups
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;