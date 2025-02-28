import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="pt-[120px] min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-foreground">About Triangle Country Club</h1>
        
        {/* History Section */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div>
            <img
              src="/lovable-uploads/6e4525c2-81e6-453d-b8aa-15849c11f26b.png"
              alt="Triangle Country Club Entrance"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Our Heritage</h2>
            <p className="text-muted-foreground">
              Located in the heart of Zimbabwe's Lowveld, Triangle Country Club owes its origins to Murray MacDougall, 
              a visionary Scottish pioneer who ventured into the region in the early 20th century. Recognizing the 
              untapped potential of the area, MacDougall embarked on pioneering irrigation schemes, laying the 
              foundation for what would become a thriving agricultural hub.
            </p>
            <p className="text-muted-foreground">
              From its humble beginnings as a sports and social club catering to outgrowers, Triangle Country Club 
              gradually expanded its offerings to include the employees of Triangle Ltd in 1960. The club's growth 
              mirrored the development of the region, attracting members from various walks of life and fostering 
              a vibrant community spirit.
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-semibold text-foreground">Our World-Class Facilities</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Sports Facilities</h3>
                <p className="text-muted-foreground">
                  The Lowveld has produced numerous accomplished sportsmen. We proudly offer an 18-hole golf course, 
                  swimming pool, gym, tennis courts, bowling greens, and rugby and cricket pitches.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Accommodations</h3>
                <p className="text-muted-foreground">
                  Enjoy our fully air-conditioned chalets with free wifi, offering a comfortable retreat amidst 
                  the picturesque landscapes of the Lowveld.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Community</h3>
                <p className="text-muted-foreground">
                  We foster a vibrant community spirit, bringing together members from various walks of life 
                  to enjoy our premium facilities and create lasting memories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <img
            src="/lovable-uploads/72311812-79ba-4b7e-99f5-ef9edc6a15ee.png"
            alt="Club Bar Area"
            className="h-64 w-full rounded-lg object-cover"
          />
          <img
            src="/lovable-uploads/4fbcf926-3df5-469e-8f4b-44e9180d359e.png"
            alt="Restaurant Area"
            className="h-64 w-full rounded-lg object-cover"
          />
          <img
            src="/lovable-uploads/6e4525c2-81e6-453d-b8aa-15849c11f26b.png"
            alt="Club Entrance"
            className="h-64 w-full rounded-lg object-cover hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default About;