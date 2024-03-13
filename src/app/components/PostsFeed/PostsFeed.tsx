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

export default function PostsFeed() {
  return (
    <Card className="container lg:max-w-screen-lg mt-4 p-0">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
        <CardDescription>Likes: 0</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button
          className="text-white bg-sky-500 hover:bg-sky-600"
          style={{ borderRadius: "5px" }}
        >
          <ThumbsUp className="mr-2 h-4 w-4" /> Like
        </Button>
      </CardFooter>
    </Card>
  );
}
