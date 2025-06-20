import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { tv, type VariantProps } from "tailwind-variants"

import { cx } from "@/lib/style-utils"

const buttonVariants = tv({
  base: [
    // Base styles
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-150",
    // Focus styles
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
    // Disabled styles
    "disabled:pointer-events-none disabled:opacity-50",
    // Default shadow
    "shadow-sm",
  ],
  variants: {
    variant: {
      primary: [
        "bg-accent-bold text-accent-contrast border border-transparent",
        "hover:bg-accent-bold-hover active:bg-accent-bold-pressed",
        "focus-visible:ring-cyan-500/50",
        "disabled:bg-cyan-300",
      ],
      accent: [
        "border border-transparent bg-cyan-400 text-white",
        "hover:bg-cyan-500 active:bg-cyan-600",
        "focus-visible:ring-cyan-400/50",
        "disabled:bg-cyan-200",
      ],
      secondary: [
        "border border-gray-300 bg-white text-gray-900",
        "hover:bg-gray-50 active:bg-gray-100",
        "focus-visible:ring-gray-500/50",
        "disabled:bg-gray-100 disabled:text-gray-400",
        // dark mode styles
        "dark:bg-gray-9 dark:border-white-a2 dark:text-gray-contrast",
      ],
      ghost: [
        "border border-transparent bg-transparent text-gray-900",
        "hover:bg-gray-100 active:bg-gray-200",
        "focus-visible:ring-gray-500/50",
        "disabled:text-gray-400",
      ],
      outline: [
        "border border-gray-300 bg-gray-50 text-gray-900",
        "hover:bg-gray-100 active:bg-gray-200",
        "focus-visible:ring-gray-500/50",
        "disabled:bg-gray-25 disabled:text-gray-400",
      ],
      // muted: [
      //   "border border-gray-300 bg-gray-50 text-gray-900",
      //   "hover:bg-gray-100 active:bg-gray-200",
      //   "focus-visible:ring-gray-500/50",
      //   "disabled:bg-gray-25 disabled:text-gray-400",
      // ],
      // Ghost variants
    },
    // Danger/Red variants
    danger: [
      "border border-transparent bg-red-500 text-white",
      "hover:bg-red-600 active:bg-red-700",
      "focus-visible:ring-red-500/50",
      "disabled:bg-red-300",
    ],

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
    variant: "primary",
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
