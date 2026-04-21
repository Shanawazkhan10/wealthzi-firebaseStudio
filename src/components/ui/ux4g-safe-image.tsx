"use client";

import { useUx4gImageProtection } from "@/hooks/use-ux4g-image-protection";
import { cn } from "@/lib/utils";
import Image, { type ImageProps } from "next/image";

type Ux4gSafeImageProps = ImageProps & {
  wrapperClassName?: string;
};

export function Ux4gSafeImage({
  wrapperClassName,
  className,
  ...props
}: Ux4gSafeImageProps) {
  const { containerProps } = useUx4gImageProtection({
    className: cn("ux4g-safe-image relative z-[99] ", wrapperClassName),
  });

  return (
    <div {...containerProps}>
      <Image {...props} className={className} />
    </div>
  );
}




type Ux4gSafeTextProps = {
  text1?: React.ReactNode;
  text2?: string;
  text1Size?: string;
  text2Size?: string;
};

const defaultText1 = (
  <p>
    Default <span className="text-[#56b28b]">Text</span>
  </p>
);

export function Ux4gSafeText({
  text1 = defaultText1,
  text2 = "string",
  text1Size = "text-3xl sm:text-4xl md:text-5xl",
  text2Size = "text-xl sm:text-2xl md:text-3xl",
}: Ux4gSafeTextProps) {
  const { containerProps } = useUx4gImageProtection({
    className: cn("ux4g-safe-image relative z-[999]"),
  });

  return (
    <div {...containerProps}>
      <div
        className={cn(
          "font-heading font-extrabold tracking-tight drop-shadow-lg text-white",
          text1Size
        )}
      >
        {text1}
      </div>
      <div
        className={cn(
          "pt-6 font-normal text-white text-left leading-tight font-caveat-brush",
          text2Size
        )}
      >
        {text2}
      </div>
    </div>
  );
}



export function Ux4gSafeText1({
  text = "string",
}) {
  const { containerProps } = useUx4gImageProtection({
    className: cn('ux4g-safe-image relative z-[999]'),
  });

  return (
    <div {...containerProps}>
      {text}
    </div>
  );
}