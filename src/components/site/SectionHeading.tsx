import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Flourish } from "./icons";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", className }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl text-foreground sm:text-5xl md:text-6xl">{title}</h2>
      <Flourish className={cn("mt-5 h-4 w-32 text-gold", centered && "mx-auto")} />
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
