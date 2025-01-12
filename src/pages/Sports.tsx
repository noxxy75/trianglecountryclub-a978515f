import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sports = () => {
  const [selectedSport, setSelectedSport] = useState("golf");

  const sportBlogs = {
    golf: [
      {
        title: "Mastering Your Golf Swing",
        date: "March 20, 2024",
        content: "Learn the fundamentals of a perfect golf swing from our resident pro. This comprehensive guide covers grip, stance, and follow-through.",
        image: "/lovable-uploads/462667f2-1634-4244-8769-84ebeae168c0.png"
      },
      {
        title: "Golf Course Maintenance Tips",
        date: "March 15, 2024",
        content: "Discover how our grounds team maintains our championship course in pristine condition year-round.",
        image: "/lovable-uploads/01788374-64a9-4691-b5dc-2f3092c9c329.png"
      }
    ],
    tennis: [
      {
        title: "Tennis Fundamentals",
        date: "March 18, 2024",
        content: "Master the basics of tennis with our comprehensive guide to serves, volleys, and court positioning.",
        image: "/lovable-uploads/3b3afe95-2660-4f9d-8313-cdee62547699.png"
      },
      {
        title: "Tennis Tournament Preparation",
        date: "March 12, 2024",
        content: "Get ready for our upcoming tennis tournament with these essential preparation tips.",
        image: "/lovable-uploads/3b3afe95-2660-4f9d-8313-cdee62547699.png"
      }
    ],
    swimming: [
      {
        title: "Swimming Techniques",
        date: "March 16, 2024",
        content: "Improve your swimming technique with tips from our Olympic-trained coaches.",
        image: "/lovable-uploads/33041125-7ff3-4571-be6c-f4c4eebdff34.png"
      },
      {
        title: "Pool Safety Guidelines",
        date: "March 10, 2024",
        content: "Important safety guidelines and protocols for all pool users at Triangle Country Club.",
        image: "/lovable-uploads/33041125-7ff3-4571-be6c-f4c4eebdff34.png"
      }
    ],
    fitness: [
      {
        title: "Strength Training Basics",
        date: "March 14, 2024",
        content: "Learn proper form and technique for essential strength training exercises.",
        image: "/lovable-uploads/d13d790f-b914-49c1-86a0-57699b617699.png"
      },
      {
        title: "Cardio Workout Plans",
        date: "March 8, 2024",
        content: "Effective cardio workout plans for all fitness levels at our state-of-the-art facility.",
        image: "/lovable-uploads/d13d790f-b914-49c1-86a0-57699b617699.png"
      }
    ],
    soccer: [
      {
        title: "Soccer Training Programs",
        date: "March 19, 2024",
        content: "Join our comprehensive soccer training programs suitable for all skill levels.",
        image: "/lovable-uploads/01788374-64a9-4691-b5dc-2f3092c9c329.png"
      },
      {
        title: "Youth Soccer League",
        date: "March 13, 2024",
        content: "Information about our youth soccer league and upcoming tournaments.",
        image: "/lovable-uploads/01788374-64a9-4691-b5dc-2f3092c9c329.png"
      }
    ],
    gym: [
      {
        title: "New Equipment Arrival",
        date: "March 17, 2024",
        content: "Check out our newly arrived state-of-the-art gym equipment for a better workout experience.",
        image: "/lovable-uploads/d13d790f-b914-49c1-86a0-57699b617699.png"
      },
      {
        title: "Personal Training Sessions",
        date: "March 11, 2024",
        content: "Book your personal training sessions with our certified trainers.",
        image: "/lovable-uploads/d13d790f-b914-49c1-86a0-57699b617699.png"
      }
    ],
    cricket: [
      {
        title: "Cricket Academy Launch",
        date: "March 15, 2024",
        content: "Join our new cricket academy with professional coaching staff.",
        image: "/lovable-uploads/01788374-64a9-4691-b5dc-2f3092c9c329.png"
      },
      {
        title: "Weekend Cricket League",
        date: "March 9, 2024",
        content: "Participate in our weekend cricket league - open for all skill levels.",
        image: "/lovable-uploads/01788374-64a9-4691-b5dc-2f3092c9c329.png"
      }
    ]
  };

  const sportDescriptions = {
    golf: "Experience golf at its finest on our meticulously maintained 18-hole championship course.",
    tennis: "Our state-of-the-art tennis facilities include both indoor and outdoor courts.",
    swimming: "Dive into our Olympic-sized pool or relax by the leisure pool.",
    fitness: "Our modern fitness center features the latest equipment and personal training services.",
    soccer: "Join our soccer programs featuring professional coaching and well-maintained fields.",
    gym: "State-of-the-art equipment and expert trainers to help you achieve your fitness goals.",
    cricket: "Experience cricket on our professional grounds with top-notch practice facilities."
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-foreground">Sports & Activities</h1>

        <div className="mx-auto max-w-5xl">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full mb-6">
                {selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1)}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-[200px]">
              {Object.keys(sportBlogs).map((sport) => (
                <DropdownMenuItem
                  key={sport}
                  className="cursor-pointer"
                  onClick={() => setSelectedSport(sport)}
                >
                  {sport.charAt(0).toUpperCase() + sport.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Card className="border-border">
            <CardContent className="p-6">
              <img
                src={sportBlogs[selectedSport][0].image}
                alt={`${selectedSport} facility`}
                className="mb-6 h-64 w-full rounded-lg object-cover"
              />
              <h2 className="mb-4 text-2xl font-semibold text-foreground capitalize">{selectedSport}</h2>
              <p className="mb-8 text-muted-foreground">
                {sportDescriptions[selectedSport]}
              </p>

              <div className="mt-8">
                <h3 className="mb-6 text-xl font-semibold text-foreground">Latest Articles</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {sportBlogs[selectedSport].map((blog, index) => (
                    <Card key={index} className="overflow-hidden border-border">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-48 w-full object-cover"
                      />
                      <CardContent className="p-4">
                        <h4 className="mb-2 text-lg font-semibold text-foreground">{blog.title}</h4>
                        <p className="mb-2 text-sm text-muted-foreground">{blog.date}</p>
                        <p className="text-sm text-muted-foreground">{blog.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sports;