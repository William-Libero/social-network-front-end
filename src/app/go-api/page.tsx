"use client";
import { selectCurrentPage } from "@/lib/features/currentPage/currentPageSlice";
import { useAppSelector } from "@/lib/hooks";

export default function GoApi() {
  if (typeof window !== "undefined") {
    window.location.replace(
      "https://github.com/William-Libero/social-networking-posts-and-rabbitmq"
    );
  }

  return <div></div>;
}
