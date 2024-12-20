import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-foreground">About Triangle Country Club</h1>
        
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
              alt="Club grounds"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Our Legacy</h2>
            <p className="mb-4 text-muted-foreground">
              Founded in 1925, Triangle Country Club has been a cornerstone of excellence in sports and leisure. Our club
              combines traditional values with modern amenities to create an unparalleled experience for our members.
            </p>
            <p className="text-muted-foreground">
              We take pride in our championship golf courses, world-class tennis facilities, and our commitment to fostering
              a vibrant community of sports enthusiasts.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide an exceptional sporting and social experience while maintaining the highest standards of service
                and facilities.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence, integrity, and community are at the heart of everything we do at Triangle Country Club.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Our Future</h3>
              <p className="text-muted-foreground">
                We continue to invest in our facilities and programs to ensure we remain at the forefront of country club
                excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;