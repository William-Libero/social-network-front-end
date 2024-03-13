"use client";
import React, { useEffect } from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import {
  setCurrentPage,
  selectCurrentPage,
} from "@/lib/features/currentPage/currentPageSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "./Header.css";

export default function Header() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);

  const definesCurrentPage = (currentPageValue: string) => {
    dispatch(setCurrentPage(currentPageValue));
  };

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div className="container header lg:max-w-screen-lg">
      <Navbar maxWidth="fluid">
        <NavbarContent className="gap-4 max-w-full" justify="start">
          <NavbarItem isActive={currentPage == "home" ? true : false}>
            <Link onClick={() => definesCurrentPage("home")} href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={currentPage == "createPost" ? true : false}>
            <Link
              onClick={() => definesCurrentPage("createPost")}
              href="#"
              aria-current="page"
            >
              Criar post
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
