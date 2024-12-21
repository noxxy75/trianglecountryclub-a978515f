import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "Summer Golf Tournament 2024",
      date: "March 15, 2024",
      excerpt: "Join us for our annual summer golf tournament with amazing prizes and special guests.",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
    },
    {
      title: "New Tennis Program Launch",
      date: "March 10, 2024",
      excerpt: "Introducing our new tennis program for juniors with professional coaching staff.",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0",
    },
    {
      title: "Fitness Center Upgrade",
      date: "March 5, 2024",
      excerpt: "Discover our newly renovated fitness center with state-of-the-art equipment.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-foreground">Club News & Updates</h1>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/blog/admin">Manage Blog</Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-border bg-card">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <CardHeader>
                <CardTitle className="text-card-foreground">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;