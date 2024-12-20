import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { BlogPost, BlogCategory } from "@/types/blog";

interface BlogPostFormProps {
  onSubmit: (post: Omit<BlogPost, "id" | "date">) => void;
}

const BlogPostForm = ({ onSubmit }: BlogPostFormProps) => {
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    category: "golf" as BlogCategory
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newPost);
    setNewPost({ title: "", excerpt: "", content: "", image: "", category: "golf" });
    toast.success("Blog post created successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">
          Category
        </label>
        <Select
          value={newPost.category}
          onValueChange={(value: BlogCategory) => 
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
  );
};

export default BlogPostForm;