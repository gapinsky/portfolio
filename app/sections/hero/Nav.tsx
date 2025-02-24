"use client";
import React from "react";
import { FloatingNav } from "../../../components/ui/floating-navbar";
export function Nav() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About me",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
