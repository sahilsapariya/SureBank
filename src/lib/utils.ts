import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine class names and merge Tailwind CSS classes.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
