const WORDS = ["Buquês", "Rosas", "Girassóis", "Arranjos", "Cestas", "Joias", "Perfumes", "Balões", "Surpresas"];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-gold/30 bg-ivory py-5" aria-hidden="true">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-10">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl italic text-foreground/70 md:text-3xl">
            {w}
            <span className="text-base not-italic text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
