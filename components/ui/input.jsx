import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full border-b border-black bg-transparent px-1 py-1 text-sm transition-colors placeholder:text-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 rounded-none md:h-12 md:text-lg",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
