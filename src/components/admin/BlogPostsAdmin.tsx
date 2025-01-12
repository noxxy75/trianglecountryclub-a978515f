import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const BlogPostsAdmin = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error("Error fetching posts");
      return;
    }

    setPosts(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      toast.error("You must be logged in to create posts");
      return;
    }

    const { error } = await supabase
      .from('blog_posts')
      .insert([
        {
          ...newPost,
          author_id: session.user.id,
        }
      ]);

    if (error) {
      toast.error("Error creating post");
      return;
    }

    toast.success("Post created successfully");
    setNewPost({ title: "", content: "" });
    fetchPosts();
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Error deleting post");
      return;
    }

    toast.success("Post deleted successfully");
    fetchPosts();
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <Input
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <Textarea
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            required
            rows={4}
          />
        </div>
        <Button type="submit">Create Post</Button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Existing Posts</h3>
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg">
            <h4 className="font-medium">{post.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{post.content}</p>
            <Button
              variant="destructive"
              size="sm"
              className="mt-2"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostsAdmin;