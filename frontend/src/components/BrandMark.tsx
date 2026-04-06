import { useState } from "react";
import { BRAND_NAME, LEGAL_ENTITY } from "../constants/brand";
import fallbackLogo from "../assets/Zyrowaste_Updated.jpg";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
  clickable?: boolean;
};

const sizeClasses = {
  sm: "h-8 w-8 sm:h-9 sm:w-9",
  md: "h-9 w-9 sm:h-10 sm:w-10",
  lg: "h-20 w-20 sm:h-24 sm:w-24",
};

/**
 * Prefer `public/zyrowaste-logo.png` (your circular mark). Falls back to bundled JPEG if missing.
 */
export function BrandMark({
  size = "lg",
  showWordmark = false,
  className="scale-200",
  clickable = true,
}: BrandMarkProps) {
  const [useFallback, setUseFallback] = useState(false);
  const src = useFallback ? fallbackLogo : "/zyrowaste-logo.png";

  const content = (
    <>
      <span
        className={`shrink-0 rounded-full overflow-hidden ring-2 ring-swaroop-100 bg-swaroop-900 ${sizeClasses[size]}`}
      >
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover"
          onError={() => setUseFallback(true)}
          draggable={false}
        />
      </span>
      {showWordmark ? (
        <span
          className="font-bold text-sm text-swaroop-800 truncate"
          title={`${BRAND_NAME} — ${LEGAL_ENTITY}`}
        >
          {BRAND_NAME}
        </span>
      ) : null}
    </>
  );

  if (!clickable) {
    return (
      <div className={`flex items-center gap-2 min-w-0 ${className}`}>
        {content}
      </div>
    );
  }

  return (
    <a href="#/" className={`flex items-center gap-2 min-w-0 ${className}`}>
      {content}
    </a>
  );
}
