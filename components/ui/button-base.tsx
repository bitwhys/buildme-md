import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { tv, type VariantProps } from "tailwind-variants"

import { cx } from "@/lib/style-utils"

const buttonVariants = tv({
  base: [
    // Base styles
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-150",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
    // Default shadow
    "shadow-sm",
  ],
  variants: {
    variant: {
      // Primary/Accent - Cyan
      accent: [
        "border border-transparent bg-cyan-500 text-white",
        "hover:bg-cyan-600 active:bg-cyan-700",
        "focus-visible:ring-cyan-500/50",
        "disabled:bg-cyan-300",
      ],
      "accent-light": [
        "border border-transparent bg-cyan-400 text-white",
        "hover:bg-cyan-500 active:bg-cyan-600",
        "focus-visible:ring-cyan-400/50",
        "disabled:bg-cyan-200",
      ],
      "accent-dark": [
        "border border-transparent bg-cyan-600 text-white",
        "hover:bg-cyan-700 active:bg-cyan-800",
        "focus-visible:ring-cyan-600/50",
        "disabled:bg-cyan-400",
      ],

      // Danger/Red variants
      danger: [
        "border border-transparent bg-red-500 text-white",
        "hover:bg-red-600 active:bg-red-700",
        "focus-visible:ring-red-500/50",
        "disabled:bg-red-300",
      ],
      "danger-light": [
        "border border-transparent bg-red-400 text-white",
        "hover:bg-red-500 active:bg-red-600",
        "focus-visible:ring-red-400/50",
        "disabled:bg-red-200",
      ],
      "danger-dark": [
        "border border-transparent bg-red-600 text-white",
        "hover:bg-red-700 active:bg-red-800",
        "focus-visible:ring-red-600/50",
        "disabled:bg-red-400",
      ],

      // Secondary/White variants
      secondary: [
        "border border-gray-300 bg-white text-gray-900",
        "hover:bg-gray-50 active:bg-gray-100",
        "focus-visible:ring-gray-500/50",
        "disabled:bg-gray-100 disabled:text-gray-400",
      ],
      muted: [
        "border border-gray-300 bg-gray-50 text-gray-900",
        "hover:bg-gray-100 active:bg-gray-200",
        "focus-visible:ring-gray-500/50",
        "disabled:bg-gray-25 disabled:text-gray-400",
      ],

      // Ghost variants
      ghost: [
        "border border-transparent bg-transparent text-gray-900",
        "hover:bg-gray-100 active:bg-gray-200",
        "focus-visible:ring-gray-500/50",
        "disabled:text-gray-400",
      ],
      "ghost-light": [
        "border border-transparent bg-gray-50/50 text-gray-900",
        "hover:bg-gray-100 active:bg-gray-200",
        "focus-visible:ring-gray-500/50",
        "disabled:text-gray-400",
      ],
      "ghost-muted": [
        "border border-transparent bg-gray-100/60 text-gray-900",
        "hover:bg-gray-200 active:bg-gray-300",
        "focus-visible:ring-gray-500/50",
        "disabled:text-gray-400",
      ],
    },
    size: {
      xs: ["h-6 px-3 text-xs", "[&>svg]:size-3"],
      sm: ["h-8 px-4 text-sm", "[&>svg]:size-4"],
      md: ["h-10 px-5 text-base", "[&>svg]:size-5"],
      lg: ["h-12 px-6 text-lg", "[&>svg]:size-6"],
    },
    state: {
      default: "",
      focused: "ring-2 ring-offset-2",
      disabled: "pointer-events-none opacity-40",
    },
  },
  compoundVariants: [
    // Focused state ring colors
    {
      variant: ["accent", "accent-light", "accent-dark"],
      state: "focused",
      class: "ring-cyan-500/50",
    },
    {
      variant: ["danger", "danger-light", "danger-dark"],
      state: "focused",
      class: "ring-red-500/50",
    },
    {
      variant: ["secondary", "muted", "ghost", "ghost-light", "ghost-muted"],
      state: "focused",
      class: "ring-gray-500/50",
    },
  ],
  defaultVariants: {
    variant: "secondary",
    size: "md",
    state: "default",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, state, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cx(buttonVariants({ variant, size, state, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
