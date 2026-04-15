import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-lg border-none bg-input/50 text-sm transition-colors outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        error:
          "border-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive",
        success:
          "border-green-500 focus-visible:ring-green-500/20 focus-visible:border-green-500",
      },
      size: {
        sm: "h-8 px-2 py-1 text-xs",
        default: "h-9 px-3 py-2",
        lg: "h-11 px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Input = React.forwardRef(
  ({ className, type = "text", variant, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          inputVariants({ variant, size }),
          "focus-visible:ring-2 focus-visible:ring-ring/50",
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }