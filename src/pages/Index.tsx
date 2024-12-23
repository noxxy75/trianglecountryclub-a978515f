import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar, Users, ArrowRight, Dumbbell, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/175ab89d-d271-4c17-adeb-cfd97c26c7dc.png")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to Triangle Country Club
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Discover the ultimate destination for leisure, fine dining, and exceptional sporting activities at Triangle Country Club, located in the picturesque Chiredzi, Zimbabwe. Our club is dedicated to providing a luxurious experience for members and guests alike, combining world-class amenities with a welcoming atmosphere.
          </p>
          <Link to="/contact?tab=membership">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Join Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Championship Golf Course</h3>
                <p className="text-muted-foreground">
                  Experience our meticulously maintained 18-hole championship golf course, designed to challenge and delight players of all skill levels.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Dumbbell className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Fitness Center</h3>
                <p className="text-muted-foreground">
                  Stay active in our state-of-the-art fitness center, featuring the latest equipment and professional training programs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Year-Round Events</h3>
                <p className="text-muted-foreground">
                  Enjoy a vibrant social calendar filled with tournaments, social gatherings, and special member events throughout the year.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Triangle, Zimbabwe, our club offers easy access and ample parking for members and guests.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">Ross Armstrong Way</p>
                  <p className="text-muted-foreground">Triangle</p>
                  <p className="text-muted-foreground">Zimbabwe</p>
                </div>
              </div>
              <div>
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Get Directions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/175ab89d-d271-4c17-adeb-cfd97c26c7dc.png" 
                alt="Triangle Country Club Location"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Become a member of Triangle Country Club and enjoy exclusive access to our world-class facilities, special events, and a vibrant community of like-minded individuals.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/contact?tab=membership">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Learn More About Membership <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;