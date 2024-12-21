import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-[url('/lovable-uploads/0d6c7c82-253b-4f70-88d6-3ea502d159d2.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="px-4">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">Triangle Country Club</h1>
            <p className="mb-8 text-xl text-white/90">Where Luxury Meets Nature</p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/contact">Join Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Experience Excellence</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-none shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
              <Trophy className="mb-4 h-10 w-10 text-green-600" />
              <h3 className="mb-2 text-xl font-semibold">World-Class Golf</h3>
              <p className="text-center text-gray-600">Championship courses designed for all skill levels</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
              <Trophy className="mb-4 h-10 w-10 text-green-600" />
              <h3 className="mb-2 text-xl font-semibold">Sports Excellence</h3>
              <p className="text-center text-gray-600">Premium facilities for tennis, swimming, and more</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
              <Calendar className="mb-4 h-10 w-10 text-green-600" />
              <h3 className="mb-2 text-xl font-semibold">Events</h3>
              <p className="text-center text-gray-600">Year-round social events and tournaments</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
              <Users className="mb-4 h-10 w-10 text-green-600" />
              <h3 className="mb-2 text-xl font-semibold">Community</h3>
              <p className="text-center text-gray-600">A vibrant community of sports enthusiasts</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;