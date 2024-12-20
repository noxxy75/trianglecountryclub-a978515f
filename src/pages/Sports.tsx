import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Sports = () => {
  const sportBlogs = {
    golf: [
      {
        title: "Mastering Your Golf Swing",
        date: "March 20, 2024",
        content: "Learn the fundamentals of a perfect golf swing from our resident pro. This comprehensive guide covers grip, stance, and follow-through.",
        image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b"
      },
      {
        title: "Golf Course Maintenance Tips",
        date: "March 15, 2024",
        content: "Discover how our grounds team maintains our championship course in pristine condition year-round.",
        image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa"
      }
    ],
    tennis: [
      {
        title: "Tennis Fundamentals",
        date: "March 18, 2024",
        content: "Master the basics of tennis with our comprehensive guide to serves, volleys, and court positioning.",
        image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0"
      },
      {
        title: "Tennis Tournament Preparation",
        date: "March 12, 2024",
        content: "Get ready for our upcoming tennis tournament with these essential preparation tips.",
        image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6"
      }
    ],
    swimming: [
      {
        title: "Swimming Techniques",
        date: "March 16, 2024",
        content: "Improve your swimming technique with tips from our Olympic-trained coaches.",
        image: "https://images.unsplash.com/photo-1530549387789-4c1017266635"
      },
      {
        title: "Pool Safety Guidelines",
        date: "March 10, 2024",
        content: "Important safety guidelines and protocols for all pool users at Triangle Country Club.",
        image: "https://images.unsplash.com/photo-1560090995-01632a28895b"
      }
    ],
    fitness: [
      {
        title: "Strength Training Basics",
        date: "March 14, 2024",
        content: "Learn proper form and technique for essential strength training exercises.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
      },
      {
        title: "Cardio Workout Plans",
        date: "March 8, 2024",
        content: "Effective cardio workout plans for all fitness levels at our state-of-the-art facility.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">Sports & Activities</h1>

        <Tabs defaultValue="golf" className="mx-auto max-w-5xl">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900">
            <TabsTrigger value="golf" className="text-gray-300 data-[state=active]:bg-gray-800 data-[state=active]:text-white">Golf</TabsTrigger>
            <TabsTrigger value="tennis" className="text-gray-300 data-[state=active]:bg-gray-800 data-[state=active]:text-white">Tennis</TabsTrigger>
            <TabsTrigger value="swimming" className="text-gray-300 data-[state=active]:bg-gray-800 data-[state=active]:text-white">Swimming</TabsTrigger>
            <TabsTrigger value="fitness" className="text-gray-300 data-[state=active]:bg-gray-800 data-[state=active]:text-white">Fitness</TabsTrigger>
          </TabsList>

          {Object.entries(sportBlogs).map(([sport, blogs]) => (
            <TabsContent key={sport} value={sport}>
              <Card className="border-none bg-gray-900 shadow-xl">
                <CardContent className="p-6">
                  <img
                    src={blogs[0].image}
                    alt={`${sport} facility`}
                    className="mb-6 h-64 w-full rounded-lg object-cover"
                  />
                  <h2 className="mb-4 text-2xl font-semibold text-white capitalize">{sport}</h2>
                  <p className="mb-8 text-gray-300">
                    {sport === "golf" && "Experience golf at its finest on our meticulously maintained 18-hole championship course."}
                    {sport === "tennis" && "Our state-of-the-art tennis facilities include both indoor and outdoor courts."}
                    {sport === "swimming" && "Dive into our Olympic-sized pool or relax by the leisure pool."}
                    {sport === "fitness" && "Our modern fitness center features the latest equipment and personal training services."}
                  </p>

                  <div className="mt-8">
                    <h3 className="mb-6 text-xl font-semibold text-white">Latest Articles</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      {blogs.map((blog, index) => (
                        <Card key={index} className="overflow-hidden bg-gray-800 border-gray-700">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="h-48 w-full object-cover"
                          />
                          <CardContent className="p-4">
                            <h4 className="mb-2 text-lg font-semibold text-white">{blog.title}</h4>
                            <p className="mb-2 text-sm text-gray-400">{blog.date}</p>
                            <p className="text-sm text-gray-300">{blog.content}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Sports;