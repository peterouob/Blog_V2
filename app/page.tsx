import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo"
import React from "react"
import {Toggle} from "@radix-ui/react-toggle";
import {MobileNav} from "@/components/MobileNav";
export default function Home() {
  return (
    <>
      <AuroraBackgroundDemo />
        <MobileNav/>
      <AuroraBackgroundDemo />
    </>
  )
}