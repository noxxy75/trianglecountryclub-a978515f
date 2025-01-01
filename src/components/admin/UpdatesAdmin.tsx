import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const UpdatesAdmin = () => {
  const [updates, setUpdates] = useState<any[]>([]);
  const [newUpdate, setNewUpdate] = useState({
    title: "",
    content: "",
    status: "draft"
  });

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    const { data, error } = await supabase
      .from('updates')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error("Error fetching updates");
      return;
    }

    setUpdates(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      toast.error("You must be logged in to create updates");
      return;
    }

    const { error } = await supabase
      .from('updates')
      .insert([
        {
          ...newUpdate,
          author_id: session.user.id,
        }
      ]);

    if (error) {
      toast.error("Error creating update");
      return;
    }

    toast.success("Update created successfully");
    setNewUpdate({ title: "", content: "", status: "draft" });
    fetchUpdates();
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('updates')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Error deleting update");
      return;
    }

    toast.success("Update deleted successfully");
    fetchUpdates();
  };

  const handleStatusChange = async (id: string, status: string) => {
    const { error } = await supabase
      .from('updates')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast.error("Error updating status");
      return;
    }

    toast.success("Status updated successfully");
    fetchUpdates();
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <Input
            value={newUpdate.title}
            onChange={(e) => setNewUpdate({ ...newUpdate, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <Textarea
            value={newUpdate.content}
            onChange={(e) => setNewUpdate({ ...newUpdate, content: e.target.value })}
            required
            rows={4}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <Select
            value={newUpdate.status}
            onValueChange={(value) => setNewUpdate({ ...newUpdate, status: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Create Update</Button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Existing Updates</h3>
        {updates.map((update) => (
          <div key={update.id} className="p-4 border rounded-lg">
            <h4 className="font-medium">{update.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{update.content}</p>
            <div className="mt-2 flex items-center gap-2">
              <Select
                value={update.status}
                onValueChange={(value) => handleStatusChange(update.id, value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(update.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatesAdmin;