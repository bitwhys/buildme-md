import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { tv, type VariantProps } from "tailwind-variants"

import { cx } from "@/lib/style-utils"
import {
  btnBase,
  btnColors,
  btnGhost,
  btnOutline,
  btnSolid,
} from "@/components/ui/button/button-utils"

const buttonVariants = tv({
  base: btnBase,
  variants: {
    variant: {
      primary: btnColors["dark/white"],
      accent: btnColors["purple"],
      secondary: btnColors["zinc"],
      ghost: btnGhost,
      outline: btnOutline,
      danger: btnColors["red"],
    },
    size: {
      xs: [],
      sm: [],
      md: [],
      lg: [],
    },
  },
  compoundVariants: [
    {
      variant: ["accent", "primary", "secondary", "danger"],
      class: btnSolid,
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, state, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cx(buttonVariants({ variant, size, state, className }))}
        ref={ref}
        {...props}
      >
        <TouchTarget>{children}</TouchTarget>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
export function TouchTarget({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  )
}
