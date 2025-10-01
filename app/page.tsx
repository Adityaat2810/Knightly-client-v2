import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Users, History } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Real-Time Chess",
      description: "Experience instant moves and live gameplay with no delays",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Multiplayer Rooms",
      description: "Create or join rooms to play with friends or match with new opponents",
    },
    {
      icon: <History className="w-12 h-12 text-primary" />,
      title: "Move History",
      description: "Review every move with detailed game history and analysis",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Knightly
                </h1>

                <p className="text-2xl md:text-3xl text-muted-foreground">
                  Play Chess in Real-Time
                </p>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
                Join thousands of chess enthusiasts in fast-paced, real-time matches.
                Whether you're a beginner or a grandmaster, Knightly brings the classic
                game to life with instant moves and seamless multiplayer.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/login">
                  <Button
                    variant="outline" size="lg"
                    className="bg-[#48b8cc80] text-lg px-8 py-6 shadow-medium hover:shadow-soft transition-all"
                  >
                    Start Playing
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 shadow-soft hover:shadow-medium transition-all"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Hero Image */}
              <Image
                src="/assets/knightly-hero.png"
                alt="Knightly mascot - a cheerful knight character holding a smartphone displaying a chess game with the text 'Checkmate in seconds'"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl shadow-medium"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
              Why Choose Knightly?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience chess like never before with features designed for modern players
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-medium transition-all duration-300 bg-card border-1"
              >
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-[#48b8cc80] rounded-2xl flex items-center justify-center text-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chess Pieces Illustration Placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-muted rounded-3xl p-12 text-center space-y-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                <Image
                  src="/assets/knightly-3.png"
                  alt="Knightly mascot - a cheerful knight character holding a smartphone displaying a chess game with the text 'Checkmate in seconds'"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-medium"
                  priority
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
            Ready to Make Your Move?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the community and start playing chess in real-time today
          </p>
          <Link href="/game">
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 shadow-medium hover:shadow-soft transition-all bg-[#48b8cc80]">
              Join a Game
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
