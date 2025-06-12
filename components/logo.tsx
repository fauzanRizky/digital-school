import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <div className="bg-blue-500 rounded-full p-1">
        <span className="text-white font-bold text-xl">
          <GraduationCap className="h-6 w-6 text-white" />
        </span>
      </div>
      <span className="font-bold text-xl">
        Digital <span className="text-blue-500">School</span>
      </span>
    </Link>
  );
}
