import * as React from "react"
import { cva } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ",
  {
    variants: {
      variant: {
        default: "bg-main text-white hover:bg-main/80",
        
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground",

        secondary:
          "bg-highlight text-white hover:bg-highlight/80",

        ghost:
          "hover:bg-muted hover:text-foreground",

        destructive:
          "bg-red-500 text-white hover:bg-red-600",

        link:
          "text-main underline-offset-4 hover:underline",
      },

      size: {
        default: "h-9 px-4 gap-2",
        xs: "h-6 px-2 text-xs gap-1",
        sm: "h-8 px-3 text-sm gap-1.5",
        lg: "h-11 px-6 gap-2",
        
        icon: "h-9 w-9",
        "icon-xs": "h-6 w-6",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-11 w-11",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }