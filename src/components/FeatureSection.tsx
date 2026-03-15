import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users2, Zap, Target, Bell } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Users2,
      title: "Pick your invite list",
      description: "Choose who to invite from your contacts. Invites go out one by one until every spot is filled.",
      color: "primary"
    },
    {
      icon: Target,
      title: "Automatic backfill",
      description: "Limited spots? If someone can't make it, we automatically invite the next person so you're not left with empty seats.",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Set a response window",
      description: "Give people a set time to respond. If they're not in, we move on to the next person—no chasing or copy-pasting names.",
      color: "primary"
    },
    {
      icon: CheckCircle,
      title: "Friends can suggest people",
      description: "Your friends can put names forward for your event, and you can get put forward when something comes up that suits you.",
      color: "accent"
    },
    {
      icon: Zap,
      title: "We handle the queue",
      description: "Set up the event once. We handle the invites, the queue, and the backfill so you stop stressing and the catch up actually happens.",
      color: "primary"
    },
    {
      icon: Bell,
      title: "Stay in the loop",
      description: "Real-time updates so you always know who's in, who's not, and when every spot is filled.",
      color: "accent"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            For anyone who wants to see people in real life but finds sorting the plans a bit of a mission
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