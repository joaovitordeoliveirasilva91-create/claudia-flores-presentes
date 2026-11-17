import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.36-2.49V9.66a5.73 5.73 0 0 0-.76-.05A5.69 5.69 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.25-1.48Z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.55V4.47A20.6 20.6 0 0 0 14.3 4.3c-2.25 0-3.8 1.37-3.8 3.9v2.3H8v3h2.5V21h3Z" />
    </svg>
  );
}

/** Thin gold botanical flourish used as an ornament under headings. */
export function Flourish(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 20" fill="none" stroke="currentColor" strokeWidth={0.9} aria-hidden="true" {...props}>
      <path d="M2 10h56" strokeLinecap="round" />
      <path d="M102 10h56" strokeLinecap="round" />
      <path d="M80 3c-4 3.5-4 10.5 0 14 4-3.5 4-10.5 0-14Z" />
      <path d="M80 10c-6-5-13-5-18 0 5 5 12 5 18 0Z" />
      <path d="M80 10c6-5 13-5 18 0-5 5-12 5-18 0Z" />
      <circle cx="80" cy="10" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Line-art rose sprig used as a large decorative background element. */
export function RoseSprig(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M100 295C98 230 104 170 100 95" />
      <path d="M100 210c-22-6-38-22-44-44 22 4 38 20 44 44Z" />
      <path d="M101 170c20-8 34-24 38-46-20 6-34 22-38 46Z" />
      <path d="M100 95c-18 0-30-12-30-28 0-18 14-30 30-36 16 6 30 18 30 36 0 16-12 28-30 28Z" />
      <path d="M100 95c-10-6-14-18-10-30 4-10 10-16 10-34" />
      <path d="M100 95c10-6 14-18 10-30-4-10-10-16-10-34" />
      <path d="M78 52c8 6 16 8 22 4 6 4 14 2 22-4" />
      <path d="M84 72c6 4 11 5 16 2 5 3 10 2 16-2" />
    </svg>
  );
}
