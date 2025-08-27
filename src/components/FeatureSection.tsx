import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users2, Zap, Target, Bell } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Users2,
      title: "Start with Your Squad",
      description: "Invite your besties first - if they're not in, nobody else gets invited",
      color: "primary"
    },
    {
      icon: Target,
      title: "Backup Plans Built In",
      description: "Limited spots? We'll automatically invite the next person if someone flakes",
      color: "accent"
    },
    {
      icon: Clock,
      title: "No Waiting Around",
      description: "People have 30 minutes to respond or we move on to the next person",
      color: "primary"
    },
    {
      icon: CheckCircle,
      title: "Only Good Vibes",
      description: "Your main crew confirms first, then we expand the party",
      color: "accent"
    },
    {
      icon: Zap,
      title: "Runs Itself",
      description: "Set it up once and we handle all the annoying follow-ups for you",
      color: "primary"
    },
    {
      icon: Bell,
      title: "Stay in the Loop",
      description: "Real-time updates so you always know who's coming and who's not",
      color: "accent"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Here's the Magic
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps that make sure your hangouts actually happen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isAccent = feature.color === "accent";
            
            return (
              <Card 
                key={index} 
                className="group relative bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-elegant"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                    isAccent ? 'bg-accent/20' : 'bg-primary/20'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={isAccent ? 'text-accent' : 'text-primary'} size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;