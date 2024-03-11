import Image from "next/image";
import { SOCIAL_LINKS } from "./constants";
import { clsxTwMerge } from "@/utils/clsxTwMerge";

type SocialLinkProps = {
  onClick?: () => void;
  withLabel?: boolean;
  className?: string;
};

export function SocialLinks({
  className,
  onClick,
  withLabel = true,
}: SocialLinkProps) {
  return (
    <ul className={clsxTwMerge("flex flex-col", className)}>
      {SOCIAL_LINKS.map((link, idx) => (
        <li
          key={link.name}
          className={
            withLabel && idx !== SOCIAL_LINKS.length - 1
              ? "border-b border-b-slate-100"
              : ""
          }
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener"
            className="flex py-3 px-4 gap-4 text-slate-700 text-sm hover:bg-slate-100 transition-colors"
            onClick={onClick}
            title={link.name}
          >
            <Image
              width="24"
              height="24"
              src={`/icons/${link.icon}`}
              alt={link.name}
            />
            {withLabel && link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
