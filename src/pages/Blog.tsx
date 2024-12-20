import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Summer Golf Tournament 2024",
      date: "March 15, 2024",
      excerpt: "Join us for our annual summer golf tournament with amazing prizes and special guests.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    },
    {
      title: "New Tennis Program Launch",
      date: "March 10, 2024",
      excerpt: "Introducing our new tennis program for juniors with professional coaching staff.",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
    },
    {
      title: "Fitness Center Upgrade",
      date: "March 5, 2024",
      excerpt: "Discover our newly renovated fitness center with state-of-the-art equipment.",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">Club News & Updates</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-gray-500">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;