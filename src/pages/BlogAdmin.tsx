import { useState } from "react";
import { BlogPost } from "@/types/blog";
import BlogPostForm from "@/components/blog/BlogPostForm";
import BlogPostsTable from "@/components/blog/BlogPostsTable";

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

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleCreatePost = (newPostData: Omit<BlogPost, "id" | "date">) => {
    const post: BlogPost = {
      id: posts.length + 1,
      ...newPostData,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setPosts([...posts, post]);
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Sports Blog Administration</h1>

        <div className="mb-12 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Create New Post</h2>
          <BlogPostForm onSubmit={handleCreatePost} />
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <BlogPostsTable
            posts={posts}
            onDelete={handleDeletePost}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;