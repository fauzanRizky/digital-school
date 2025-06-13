import Image from "next/image";

export default function LogoCloud() {
  const schools = [
    {
      name: "School A",
      logo: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      name: "School B",
      logo: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    },
    {
      name: "School C",
      logo: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    },
    {
      name: "School D",
      logo: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    },
    {
      name: "School E",
      logo: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {schools.map((school, i) => (
            <Image
              key={i}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={school.logo}
              alt={school.name}
              width={158}
              height={48}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
