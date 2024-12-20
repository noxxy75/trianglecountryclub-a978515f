import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: "golf" | "tennis" | "swimming" | "fitness";
}

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Summer Golf Tournament 2024",
      excerpt: "Join us for our annual summer golf tournament with amazing prizes and special guests.",
      content: "Full content here...",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      category: "golf"
    },
    {
      id: 2,
      title: "Tennis Fundamentals",
      excerpt: "Master the basics of tennis with our comprehensive guide.",
      content: "Full content here...",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      category: "tennis"
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    category: "golf" as const
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: BlogPost = {
      id: posts.length + 1,
      ...newPost,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setPosts([...posts, post]);
    setNewPost({ title: "", excerpt: "", content: "", image: "", category: "golf" });
    toast.success("Blog post created successfully!");
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
    toast.success("Blog post deleted successfully!");
  };

  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Sports Blog Administration</h1>

        <div className="mb-12 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Create New Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">
                Category
              </label>
              <Select
                value={newPost.category}
                onValueChange={(value: "golf" | "tennis" | "swimming" | "fitness") => 
                  setNewPost({ ...newPost, category: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="golf">Golf</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                  <SelectItem value="swimming">Swimming</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">
                Title
              </label>
              <Input
                id="title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="excerpt" className="mb-2 block text-sm font-medium text-gray-700">
                Excerpt
              </label>
              <Input
                id="excerpt"
                value={newPost.excerpt}
                onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="mb-2 block text-sm font-medium text-gray-700">
                Content
              </label>
              <Textarea
                id="content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="image" className="mb-2 block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <Input
                id="image"
                value={newPost.image}
                onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              Create Post
            </Button>
          </form>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Manage Posts</h2>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="golf">Golf</SelectItem>
                <SelectItem value="tennis">Tennis</SelectItem>
                <SelectItem value="swimming">Swimming</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="capitalize">{post.category}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(post.id)}
                      className="text-sm"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;