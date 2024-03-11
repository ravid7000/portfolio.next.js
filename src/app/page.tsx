import { SocialLinks } from "@/ui/Layout/SocialLinks";
import { Section } from "@/ui/Section/Section";
import { useMemo } from "react";

export default function Home() {
  const experience = useMemo(() => {
    const start = new Date("2015-01-01");
    const now = new Date();
    return now.getFullYear() - start.getFullYear();
  }, []);

  return (
    <>
      <Section
        className="lg:h-[calc(100vh-180px)] min-h-11"
        containerClassName="h-full grid grid-cols-9 items-center gap-6"
      >
        <div className="col-span-9 md:col-span-7 xl:col-span-4 flex flex-col-reverse lg:flex-col gap-6 md:gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-4 lg:gap-12 sm:text-xl">
            <p>I build visually appealing digital experiences</p>
            <p>With {experience} years of experience in the field</p>
          </div>
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold">
            Frontend Engineer
          </h1>
        </div>
        <div className="col-span-9 md:col-span-2 xl:col-span-5 flex md:justify-end">
          <SocialLinks className="max-md:flex-row" withLabel={false} />
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-9">
          <h2 className="col-span-9 lg:col-span-3 text-lg" id="raviDhiman">
            Ravi Dhiman
          </h2>
        </div>
      </Section>
    </>
  );
}
