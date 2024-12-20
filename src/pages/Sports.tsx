import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Sports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">Sports & Activities</h1>

        <Tabs defaultValue="golf" className="mx-auto max-w-3xl">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="golf">Golf</TabsTrigger>
            <TabsTrigger value="tennis">Tennis</TabsTrigger>
            <TabsTrigger value="swimming">Swimming</TabsTrigger>
            <TabsTrigger value="fitness">Fitness</TabsTrigger>
          </TabsList>

          <TabsContent value="golf">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Golf course"
                  className="mb-6 h-64 w-full rounded-lg object-cover"
                />
                <h2 className="mb-4 text-2xl font-semibold">Championship Golf</h2>
                <p className="text-gray-600">
                  Experience golf at its finest on our meticulously maintained 18-hole championship course. With challenging
                  holes and stunning landscapes, our course offers an unforgettable golfing experience for players of all
                  skill levels.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tennis">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">Tennis Courts</h2>
                <p className="text-gray-600">
                  Our state-of-the-art tennis facilities include both indoor and outdoor courts, professional coaching, and
                  regular tournaments for all ages and skill levels.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="swimming">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">Swimming Complex</h2>
                <p className="text-gray-600">
                  Dive into our Olympic-sized pool or relax by the leisure pool. We offer swimming lessons, aqua fitness
                  classes, and a dedicated children's pool.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fitness">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">Fitness Center</h2>
                <p className="text-gray-600">
                  Our modern fitness center features the latest equipment, personal training services, and a variety of group
                  fitness classes to help you achieve your wellness goals.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Sports;