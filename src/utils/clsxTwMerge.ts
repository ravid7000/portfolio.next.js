import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const clsxTwMerge = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};
