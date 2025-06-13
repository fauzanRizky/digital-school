import React from "react";
import SmallTitle from "./small-title";

export default function SectionHeader({
  title,
  heading,
  description,
}: {
  title: string;
  heading: string;
  description: string;
}) {
  return (
    <div className="text-center mb-16">
      <SmallTitle title={title} />
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
        {heading}
      </h2>
      <p className="text-lg text-muted-foreground sm:text-xl max-w-[900px] mx-auto">
        {description}
      </p>
    </div>
  );
}
