import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Link to="/" className={cn("group flex flex-col leading-none", className)} aria-label="Claudia Flores e Presentes — início">
      <span className={cn("font-script text-[2.1rem] leading-[0.8]", tone === "dark" ? "text-primary" : "text-gold-soft")}>
        Claudia
      </span>
      <span
        className={cn(
          "mt-1 pl-6 text-[0.6rem] font-medium uppercase tracking-[0.38em]",
          tone === "dark" ? "text-gold-deep" : "text-rosewood-foreground/80",
        )}
      >
        Flores &amp; Presentes
      </span>
    </Link>
  );
}
