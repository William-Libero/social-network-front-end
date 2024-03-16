import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  created_at: string;
  title: string;
  description: string;
  likes: number;
}

export default function PostsFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    try {
      let response = await fetch(
        "https://social-networking-posts-and-rabbitmq.onrender.com/getPosts"
      );
      let data = await response.json();

      var array: Post[] = [];
      data.forEach((post: string) => {
        post != "" && array.push(JSON.parse(post));
      });
      array = array.sort((a, b) => a.id - b.id);

      setPosts(array);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  async function likePost(id: number) {
    try {
      await fetch(
        `https://social-networking-posts-and-rabbitmq.onrender.com/likePost/${id}`,
        {
          method: "POST",
        }
      );
      await getPosts();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="w-full">
      {posts.map((post) => (
        <Card key={post.id} className="container lg:max-w-screen-lg mt-4 p-0">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
            <CardDescription>Likes: {post.likes}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button
              className="text-white bg-sky-500 hover:bg-sky-600"
              style={{ borderRadius: "5px" }}
              onClick={() => likePost(post.id)}
            >
              <ThumbsUp className="mr-2 h-4 w-4" /> Like
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
