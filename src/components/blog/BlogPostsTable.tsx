import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BlogPost, BlogCategory } from "@/types/blog";
import { toast } from "sonner";

interface BlogPostsTableProps {
  posts: BlogPost[];
  onDelete: (id: number) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogPostsTable = ({ posts, onDelete, selectedCategory, onCategoryChange }: BlogPostsTableProps) => {
  const handleDelete = (id: number) => {
    onDelete(id);
    toast.success("Blog post deleted successfully!");
  };

  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Manage Posts</h2>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
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
  );
};

export default BlogPostsTable;