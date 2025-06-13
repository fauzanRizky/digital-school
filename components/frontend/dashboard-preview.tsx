import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function DashboardPreview() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Card className="w-full">
          <CardContent className="mt-4">
            <Image
              src="/images/dashboard-preview.jpg"
              alt="Dashboard Preview"
              width={2016}
              height={1210}
              className="w-full rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
