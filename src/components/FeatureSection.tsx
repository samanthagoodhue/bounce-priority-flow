import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users2, Zap, Target, Bell } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Users2,
      title: "Phase-Based Invites",
      description: "Start with core friends, expand to secondary circle, then friends-of-friends",
      color: "primary"
    },
    {
      icon: Target,
      title: "Priority Queues",
      description: "Limited spots? Send invites in order of preference with smart escalation",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Smart Timing",
      description: "Auto-escalate invites when people don't respond in time",
      color: "primary"
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Events",
      description: "Core friends must confirm before expanding the guest list",
      color: "accent"
    },
    {
      icon: Zap,
      title: "Auto-Management",
      description: "Background processing handles escalation without host intervention",
      color: "primary"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Real-time updates and reminders for every stage of planning",
      color: "accent"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three smart phases that ensure your events succeed every time
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