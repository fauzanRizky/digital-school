"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";
import SectionHeader from "./section-header";

const basicFeatures = [
  "Student Information System",
  "Academic Excellence Suite",
  "Smart Communitacion Hub",
  "Financial Management Center",
];

const premiumFeatures = [
  "Student Information System",
  "Academic Excellence Suite",
  "Smart Communitacion Hub",
  "Financial Management Center",
  "Transport & Safety Control",
];

const priceList = [
  {
    title: "Single User",
    subTitle: "For individuals",
    price: "$19",
    features: basicFeatures,
    isPopular: true,
  },
  {
    title: "Team",
    subTitle: "For small teams",
    price: "$99",
    features: premiumFeatures,
    isPopular: false,
  },
  //   {
  //     title: "Enterprise",
  //     subTitle: "For large enterprises",
  //     price: "$499",
  //     features: enterpriseFeatures,
  //     isPopular: false,
  //   },
];

export default function Pricing() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-green-50/50 to-transparent">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Pricing"
          heading="Choose the right plan for your needs"
          description="Choose the right plan for your needs"
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {priceList.map((price, i) => (
            <Card key={i} className="relative border-2">
              <div
                className={
                  price.isPopular ? "absolute -top-3 left-4" : "hidden"
                }
              >
                <span className="px-3 py-1 text-xs font-semibold text-white bg-rose-500 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-6 mr-4 border-r">
                    <div>
                      <Button
                        variant={"outline"}
                        className="px-8 text-muted-foreground mb-4"
                      >
                        {price.title}
                      </Button>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">
                          {price.price}
                        </span>
                        <span className="text-4xl font-bold text-gray-400">
                          .99
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        {price.subTitle}
                      </p>
                    </div>
                    <Button
                      className={
                        price.isPopular
                          ? "w-fit"
                          : "bg-blue-500 hover:bg-gray-600 text-white w-fit"
                      }
                    >
                      Buy now
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <ul className="grid gap-4">
                    {price.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-500"
                      >
                        <Check className="w-5 h-5 text-emerald-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <p className="mt-8 text-sm text-gray-500 text-center max-w-3xl mx-auto">
            We value Purchasing Power Parity (PPP) and offer discount codes. To
            prove your eligibility, please send your student ID, driver&apos;s
            license, or similar documentation. You can contact us on our Contact
            page.
          </p>
        </div>
      </div>
    </section>
  );
}
