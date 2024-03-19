"use client";
import { selectCurrentPage } from "@/lib/features/currentPage/currentPageSlice";
import { useAppSelector } from "@/lib/hooks";

export default function NestApi() {
  if (typeof window !== "undefined") {
    window.location.replace(
      "https://github.com/William-Libero/social-networking-posts-service"
    );
  }

  return <div></div>;
}
