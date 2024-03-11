import { clsxTwMerge } from "@/utils/clsxTwMerge";

type SectionProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section className={clsxTwMerge("px-4 md:px-8 py-10", className)}>
      <div
        className={clsxTwMerge(
          "container 2xl:max-w-[1440px] mx-auto",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
