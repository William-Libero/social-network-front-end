"use client";
import { selectCurrentPage } from "@/lib/features/currentPage/currentPageSlice";
import { useAppSelector } from "@/lib/hooks";
import CreatePost from "./components/CreatePost/CreatePost";
import PostsFeed from "./components/PostsFeed/PostsFeed";

export default function Home() {
  const currentPage = useAppSelector(selectCurrentPage);

  return (
    <main className="flex min-h-screen flex-col items-start justify-between container lg:max-w-screen-lg">
      {currentPage === "home" && <PostsFeed />}
      {currentPage === "createPost" && <CreatePost />}
    </main>
  );
}
