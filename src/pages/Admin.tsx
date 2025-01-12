import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import BlogPostsAdmin from "@/components/admin/BlogPostsAdmin";
import UpdatesAdmin from "@/components/admin/UpdatesAdmin";

const Admin = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      if (profile?.role !== 'admin') {
        navigate('/');
        return;
      }

      setIsAdmin(true);
    };

    checkAdminStatus();
  }, [navigate]);

  if (!isAdmin) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Administration</h1>
      
      <Tabs defaultValue="blog" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="blog">
          <Card>
            <CardHeader>
              <CardTitle>Blog Posts Management</CardTitle>
            </CardHeader>
            <CardContent>
              <BlogPostsAdmin />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="updates">
          <Card>
            <CardHeader>
              <CardTitle>Updates Management</CardTitle>
            </CardHeader>
            <CardContent>
              <UpdatesAdmin />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;